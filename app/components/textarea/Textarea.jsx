import React from 'react';

function Textarea({
  datas,
  rows = 5,
  idTextarea,
  label,
  idLabel,
  name,
  ariaDescribedby,
  placeholder = '',
  onChange,
  onBlur,
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} id={idLabel}>
        {label}
        <span aria-hidden="true" className="text-red-500">
          {' '}
          *
        </span>
      </label>
      <textarea
        name={name}
        id={idTextarea}
        aria-describedby={ariaDescribedby}
        aria-labelledby={idLabel}
        required
        placeholder={placeholder}
        spellCheck={false}
        rows={rows}
        onChange={onChange}
        onBlur={onBlur}
        className={`my-2 px-2 py-1.5 text-lg rounded border-none outline outline-2 ${datas[name].error ? 'outline-red-500' : 'outline-slate-300/65'}`}
      />
      <span
        aria-live="polite"
        id={ariaDescribedby}
        className={`text-sm pl-0.5 ${datas[name].error ? 'opacity-100 text-red-500' : 'opacity-0 text-black'}`}
      >
        {datas[name].error || 'Please enter the field.'}
      </span>
    </div>
  );
}

export default Textarea;
