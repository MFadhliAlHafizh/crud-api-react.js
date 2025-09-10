import Label from './Label'
import Input from './Input'

function InputContainer({ label, name, type, placeholder, value, onChange }) {
  return (
    <div className='mb-6'>
        <Label htmlFor={name}>{label}</Label>
        <Input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange}/>
    </div>
  )
}

export default InputContainer