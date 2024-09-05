function BtnClose({ className, onClick }) {
  return (
    <button
      type="button"
      className={`${className} border size-10 rounded-md bg-red-200 outline outline-1 outline-red-400 hover:outline-red-500 font-medium text-xl text-red-500 hover:text-red-600`}
      onClick={onClick}
    >
      X
    </button>
  );
}

export default BtnClose;
