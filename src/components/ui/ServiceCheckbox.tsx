interface ServiceCheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const ServiceCheckbox = ({
  label,
  checked,
  onChange,
}: ServiceCheckboxProps) => {
  return (
    <label
      className='
        flex
        items-center
        gap-3
        cursor-pointer
        select-none
      '
    >
      <input
        type='checkbox'
        checked={checked}
        onChange={onChange}
        className='hidden'
      />

      <div
        className={`
          flex
          h-5
          w-5
          items-center
          justify-center
          rounded-md
          border
          transition-all
          duration-300

          ${
            checked
              ? 'border-primary bg-primary'
              : 'border-neutral-300 bg-white'
          }
        `}
      >
        {checked && (
          <svg
            className='h-3 w-3 text-white'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={3}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M5 13l4 4L19 7'
            />
          </svg>
        )}
      </div>

      <span
        className='
          text-sm
          font-medium
          font-primary
          leading-sm
        '
      >
        {label}
      </span>
    </label>
  );
};

export default ServiceCheckbox;
