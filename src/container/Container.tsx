const Container = ({ className, children }) => {
  return (
    <div className={`container mx-auto px-3 ${className}`}>{children}</div>
  );
};

export default Container;
