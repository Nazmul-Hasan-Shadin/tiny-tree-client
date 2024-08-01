import    './HeaderTitle.css'

const HeaderTitile = ({header,className}) => {
  return (
    <div>
      <h2 className={` nav-link  inline-block text-2xl md:text-4xl text-primary-green font-bold cursor-pointer ${className}`}>
       {header}
      </h2>
    </div>
  );
};

export default HeaderTitile;
