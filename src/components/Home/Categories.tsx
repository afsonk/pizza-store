import classnames from "classnames"
import {useState} from "react"

type Props = {
    categories: Array<string>
}

function Categories({categories}: Props) {
    const [active, setActive] = useState<null | number>(null)

    return (
        <ul className={'categories'}>
            <li className={classnames('category__item', {
                'active': active === null})}
                onClick={() => setActive(null)}>All</li>
            {
                categories.map((item, index) => {
                   return <li className={classnames('category__item',{
                       'active': active === index})}
                              key={item}
                              onClick={() => setActive(index)}>{item}</li>
                })
            }
        </ul>
    )
}

export default Categories
