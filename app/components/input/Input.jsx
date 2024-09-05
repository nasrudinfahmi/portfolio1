function Input({
  type = 'text',
  name,
  placeholder,
  datas,
  label,
  idLabel,
  idInput,
  ariaDescribedby,
  onChange,
  onBlur,
}) {
  return (
    <div
      className={`flex flex-col ${!!datas[name].error ? 'mb-5' : 'mb-3'} duration-200 transition-all`}
    >
      <label htmlFor={idInput} id={idLabel}>
        {label}
        <span aria-hidden="true" className="text-red-500">
          {' '}
          *
        </span>
      </label>
      <input
        type={type}
        name={name}
        id={idInput}
        placeholder={placeholder}
        aria-labelledby={idLabel}
        required
        spellCheck={false}
        aria-describedby={ariaDescribedby}
        onChange={onChange}
        onBlur={onBlur}
        className={`my-2 px-2 py-1.5 text-lg rounded border-none outline outline-2 ${datas[name].error ? 'outline-red-500' : 'outline-slate-300/65'} transition-all`}
      />
      <span
        aria-live="polite"
        id={ariaDescribedby}
        className={`text-sm pl-0.5 ${datas[name].error ? 'opacity-100 text-red-500' : 'opacity-0 text-black'}`}
      >
        {datas[name].error || ''}
      </span>
    </div>
  );
}

export default Input;
