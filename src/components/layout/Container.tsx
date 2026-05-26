interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div
      className='
        
        px-3xl
        py-xl
        md:px-4xl
        md:py-2xl
        lg:px-5xl
        lg:py-3xl
      '
    >
      {children}
    </div>
  );
};

export default Container;
