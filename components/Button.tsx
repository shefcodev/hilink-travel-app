import Image from 'next/image';

type ButtonProps = {
  type: 'button' | 'submit';
  icon?: string;
  variant: string;
  title: string;
};

const Button = ({ type, icon, variant, title }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant}`} // dynamically change background-color
    >
      {icon && <Image src={icon} alt='Log in icon' width={24} height={24} />}
      <label className='bold-16 whitespace-nowrap'>{title}</label>
    </button>
  );
};

export default Button;
