import './TestimonialCard.css';

interface Props {
  name: string;
  image: string;
  text: string;
}

function TestimonialCard({ name, image, text }: Props) {
  return (
    <div className="flex w-full flex-col items-center rounded-[20px] bg-(--dark-purple) px-7 pb-8">
      <img src={image} alt={name} width={124} height={124} className="translate-y-[-50%]" />
      <div className="sub-header -mt-9.5">{name}</div>
      <div className="text mt-5.5">{text}</div>
    </div>
  );
}

export default TestimonialCard;
