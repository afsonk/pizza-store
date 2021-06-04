import {Field} from "formik"
import {FocusType} from "./Checkout"

type Props = {
    name: FocusType,
    label: string,
    handleFocus: (el: FocusType) => void,
    place: string
}

function CustomInput ({name, label, handleFocus, place}: Props)  {
    return (
        <Field name={name}>
            {({ field, meta }: any) => (
                <div className={'checkout__line'}>
                    <label className={'form__label'} htmlFor={name}>{label}</label>
                    <input className={'input'} type="text" {...field} placeholder={place} onFocus={() => handleFocus(name)}/>
                    {meta.touched &&
                    meta.error && <div className="checkout__line-error">{meta.error}</div>}
                </div>
            )}
        </Field>
    )
}
export default CustomInput