import Button from "@/components/Button";
import { useForm } from "react-hook-form";
import style from "./ContactForm.module.scss";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        reset();
        alert("Message sent successfully!");
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
      <div className={style.input_data}>
        <input type="text" {...register("name", { required: true })} required />
        <div className={style.underline} />
        <label htmlFor="name">Name</label>
        {errors.name && (
          <span className={style.error}>This field is required</span>
        )}
      </div>

      <div className={style.input_data}>
        <input
          type="text"
          {...register("email", { required: true })}
          required
        />
        <div className={style.underline} />
        <label>Email</label>
        {errors.email && (
          <span className={style.error}>This field is required</span>
        )}
      </div>

      <div className={`${style.input_data} ${style.textarea}`}>
        <textarea {...register("message", { required: true })} required />
        <div className={style.underline} />
        <label htmlFor="message">Your Message</label>
        {errors.message && <span className={style.error}>error</span>}
      </div>

      <div className={style.input_data}>
        <Button type="submit">Send</Button>
      </div>
    </form>
  );
};

export default ContactForm;
