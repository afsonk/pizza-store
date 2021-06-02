type Props = {
    value: string,
    label: string,
    handleChange: (name: string) => (e: any) => void,
    text: string,
    length?: number
}

function CheckoutLine({value, label, handleChange, text, length}: Props) {
    return (
        <div className={'checkout__line'}>
            <label className={'form__label'} htmlFor={text}>{label}</label>
            <input type={text === 'number' ? 'text' : text === 'date' ? 'date' : 'text'}
                   className={'input'}
                   value={value}
                   name={text}
                   id={text}
                   maxLength={length ? length : undefined}
                   onChange={handleChange(text === 'date' ? 'expiry' : text)}
                   required
            />

        </div>
    )
}

export default CheckoutLine