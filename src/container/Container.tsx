type ContainerProps = {
  className?: string; 
  children: React.ReactNode; 
};
const Container = ({ className, children }:ContainerProps) => {
  return (
    <div className={`container mx-auto px-3 ${className}`}>{children}</div>
  );
};

export default Container;
