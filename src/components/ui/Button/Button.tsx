
type ButtonProps = {
    name: string;
    className?: string; 
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  };

const Button = ({name ,className, onClick}:ButtonProps) => {
  return (
    <button onClick={onClick} className={` ${className} inset-x-0 bottom-0 flex justify-center font-semibold px-4 hover:bg-white text-sm md:text-base border hover:border-2 hover:border-blue-500 rounded-xl p-2 text-gray-100 hover:text-blue-900`}>
     {name}
    </button>
  );
};

export default Button;
