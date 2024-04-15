import Image from 'next/image';

type ButtonProps = {
  type: 'button' | 'submit';
  icon?: string;
  variant: string;
  title: string;
  full?: boolean;
};

const Button = ({ type, icon, variant, title, full }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full && 'w-full'
      }`} // dynamically change background-color
    >
      {icon && <Image src={icon} alt='Log in icon' width={24} height={24} />}
      <label className='bold-16 whitespace-nowrap cursor-pointer'>
        {title}
      </label>
    </button>
  );
};

export default Button;
