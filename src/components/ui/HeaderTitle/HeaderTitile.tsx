import    './HeaderTitle.css'

type HeaderTitleProps = {
  header?: string; 
  className?: string;
};
const HeaderTitile = ({header,className=''}:HeaderTitleProps) => {
  return (
    <div>
      <h2 className={` nav-link  inline-block text-2xl md:text-4xl text-primary-green font-bold cursor-pointer ${className}`}>
       {header}
      </h2>
    </div>
  );
};

export default HeaderTitile;
