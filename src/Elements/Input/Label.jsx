function Label({ htmlFor, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className="text-sm text-slate-700 font-bold block mb-2"
    >
      {children}
    </label>
  );
}

export default Label;
