import {Field} from "formik"
import {FocusType} from "./Checkout"
import {useState} from "react"

type Props = {
    name: FocusType,
    label: string,
    handleFocus: (el: FocusType) => void,
    place: string
}

function CustomInput({name, label, handleFocus, place}: Props) {
    const handleDateChange = (text: string) => {
       return  text.length === 3 && !text.includes("/")
            ? `${text.substring(0, 2)}/${text.substring(2)}`
            : text
    }
    return (
        <Field name={name}>
            {({field: {name, value, onChange, onBlur}, meta}: any) => (
                <div className={'checkout__line'}>
                    <label className={'form__label'} htmlFor={name}>{label}</label>
                    <input className={'input'} type="text"
                           name={name}
                           value={name !== 'expiry' ? value : handleDateChange(value)}
                           onChange={onChange}
                           onBlur={onBlur}
                           placeholder={place}
                           onFocus={() => handleFocus(name)}
                    />
                    {meta.touched &&
                    meta.error && <div className="checkout__line-error">{meta.error}</div>}
                </div>
            )}
        </Field>
    )
}

export default CustomInput