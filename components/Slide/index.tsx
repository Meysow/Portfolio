import style from './Slide.module.scss';

interface PropTypes {
  selectedSection: number;
  children: React.ReactNode;
}

const Slide = ({ selectedSection, children }: PropTypes) => {
  const classNames = (sectionNumber: number) => {
    if (sectionNumber === 1) {
      return `${style.sections} ${selectedSection === 1 ? `${style.active}` : `${style.up}`}`;
    }
    return `${style.sections} ${
      selectedSection === sectionNumber
        ? `${style.active}`
        : selectedSection < sectionNumber
        ? `${style.down}`
        : `${style.up}`
    }`;
  };

  return <section className={classNames(selectedSection)}>{children}</section>;
};

export default Slide;
