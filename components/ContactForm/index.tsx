'use client';

import Button from '@/components/Button';
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import style from './ContactForm.module.scss';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const [feedback, setFeedback] = useState<String>('');
  const form = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const sendEmail = async (data: FormData) => {
    // Environment variables are strings
    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY!;

    // Runtime checks here to ensure they're not undefined
    if (!serviceId || !templateId || !publicKey) {
      console.error('Email service configuration is missing!');
      return;
    }

    // Reset feedback
    setFeedback('');

    emailjs
      .sendForm(serviceId, templateId, form.current!, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!', data);
          setFeedback('Your message has been sent!');
          reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setFeedback('Something went wrong...');
        }
      );
  };

  return (
    <form
      className={style.form}
      onSubmit={handleSubmit(sendEmail)}
      ref={form}
    >
      <div className={style.input_data}>
        <input
          id='name'
          type='text'
          {...register('name', { required: true })}
          required
        />
        <div className={style.underline} />
        <label htmlFor='name'>Name</label>
        {errors.name && <span className={style.error}>This field is required</span>}
      </div>

      <div className={style.input_data}>
        <input
          id='mail'
          type='text'
          {...register('email', { required: true })}
          required
        />
        <div className={style.underline} />
        <label htmlFor='mail'>Email</label>
        {errors.email && <span className={style.error}>This field is required</span>}
      </div>

      <div className={`${style.input_data} ${style.textarea}`}>
        <textarea
          id='message'
          {...register('message', { required: true })}
          required
        />
        <div className={style.underline} />
        <label htmlFor='message'>Your Message</label>
        {errors.message && <span className={style.error}>error</span>}
      </div>

      <div className={style.buttonWrapper}>
        {feedback && <span className={style.feedback}>{feedback}</span>}
        <Button type='submit'>Send</Button>
      </div>
    </form>
  );
};

export default ContactForm;
