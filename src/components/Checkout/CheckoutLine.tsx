import {Field} from "formik"

type Props = {
    name: string,
    label: string,
    handleFocus: (el: string) => void
}

function CustomInput ({name, label, handleFocus}: Props)  {
    return (
        <Field name={name}>
            {({ field, meta }: any) => (
                <div className={'checkout__line'}>
                    <label className={'form__label'} htmlFor={name}>{label}</label>
                    <input className={'input'} type="text" {...field} placeholder="First Name" onFocus={() => handleFocus(name)}/>
                    {meta.touched &&
                    meta.error && <div className="error">{meta.error}</div>}
                </div>
            )}
        </Field>
    )
}
export default CustomInput