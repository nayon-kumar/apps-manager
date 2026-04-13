const MyContainer = ({ children, className = "" }) => {
  return (
    <div className={`max-w-7xl mx-auto px-5 ${className}`}>{children}</div>
  );
};

export default MyContainer;
