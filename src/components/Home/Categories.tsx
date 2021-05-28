import classnames from "classnames"

type Props = {
    categories: Array<string>,
    activeCategory: null | number,
    setCategory: (payload: number | null) => void
}

function Categories({categories, activeCategory, setCategory}: Props) {
    return (
        <ul className={'categories'}>
            <li className={classnames('category__item', {
                'active': activeCategory === null})}
                onClick={() => setCategory(null)}>All</li>
            {
                categories.map((item, index) => {
                   return <li className={classnames('category__item',{
                       'active': activeCategory === index})}
                              key={item}
                              onClick={() => setCategory(index)}>{item}</li>
                })
            }
        </ul>
    )
}

export default Categories
