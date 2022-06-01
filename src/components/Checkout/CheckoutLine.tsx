import { Field } from 'formik'
import { FocusType } from './Checkout'

type Props = {
  name: FocusType
  label: string
  handleFocus: (el: FocusType) => void
  place: string
}

function CustomInput({ name, label, handleFocus, place }: Props) {
  const handleDateChange = (text: string) => {
    return text.length === 3 && !text.includes('/')
      ? `${text.substring(0, 2)}/${text.substring(2)}`
      : text
  }
  return (
    <Field name={name}>
      {({ field: { value, ...rest }, meta }: any) => (
        <div className='checkout__line'>
          <label className='form__label' htmlFor={name}>
            {label}
          </label>
          <input
            className='input'
            type={name === 'name' ? 'text' : 'tel'}
            name={name}
            value={name !== 'expiry' ? value : handleDateChange(value)}
            {...rest}
            placeholder={place}
            onFocus={() => handleFocus(name)}
          />
          {meta.touched && meta.error && <div className='checkout__line-error'>{meta.error}</div>}
        </div>
      )}
    </Field>
  )
}

export default CustomInput
