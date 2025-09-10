function Button({ type="button", onClick= () => {}, children, className }) {
  return (
    <button type={type} onClick={onClick} className={`text-sm text-white font-semibold py-2 px-4 rounded-md cursor-pointer ${className}`}>{children}</button>
  )
}

export default Button