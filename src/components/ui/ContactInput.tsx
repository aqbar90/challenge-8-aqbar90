interface ContactInputProps {
  label: string;
  type?: string;
  placeholder: string;
}

const ContactInput = ({
  label,
  type = 'text',
  placeholder,
}: ContactInputProps) => {
  return (
    <div>
      <label
        className='
          mb-3
          block
          text-sm
          font-primary
          font-bold
          leading-sm
          text-black
          dark:text-white
          transition-colors
          duration-300
        '
      >
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className='
          h-12
          w-full
          rounded-xl
          border
          border-neutral-200
          dark:border-neutral-700
          bg-white
          dark:bg-black
          text-black
          dark:text-white
          placeholder:text-neutral-400
          dark:placeholder:text-neutral-500
          py-2
          px-xl
          gap-2
          text-sm
          font-medium
          leading-sm
          outline-none
          transition-all
          duration-300
          focus:border-primary
          focus:ring-2
          focus:ring-primary/10
        '
      />
    </div>
  );
};

export default ContactInput;
