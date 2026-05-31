interface ContactTextareaProps {
  label: string;
  placeholder: string;
}

const ContactTextarea = ({ label, placeholder }: ContactTextareaProps) => {
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
        '
      >
        {label}
      </label>

      <textarea
        rows={6}
        placeholder={placeholder}
        className='
          w-full
          resize-none
          rounded-xl
          border
          border-neutral-200
          bg-white
          px-xl
          py-2
          text-sm
          leading-sm
          font-primary
          font-medium
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

export default ContactTextarea;
