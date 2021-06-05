import {ReactNode} from "react"
import classnames from "classnames"

type Props = {
    children: ReactNode,
    cart?: boolean,
    empty?: boolean,
    pay?: boolean,
    onClick?: () => void,
    type?: "button" | "submit" | "reset" | undefined
}

function Button({children, cart, empty, pay, onClick, type=undefined}: Props) {
    return (
        <button className={classnames('button', {
            'button--cart': cart,
            'button--empty': empty,
            'pay-btn': pay
        })}
                type={type}
                onClick={onClick} >
            {children}
        </button>
    )
}

export default Button