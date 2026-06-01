interface ModalOverlayProps {
  children: React.ReactNode;
}

const ModalOverlay = ({ children }: ModalOverlayProps) => {
  return (
    <div
      className='
        fixed
        inset-0
        z-999
        flex
        items-center
        justify-center
        bg-black/50
        dark:bg-white/50
        transition-colors
        duration-300
        backdrop-blur-sm
        px-4
        animate-in
        fade-in
      '
    >
      {children}
    </div>
  );
};

export default ModalOverlay;
