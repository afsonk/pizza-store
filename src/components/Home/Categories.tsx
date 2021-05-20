import classnames from "classnames"

type Props = {
    categories: Array<string>,
    activeCategory: null | number,
    setActiveCategory: (index: number | null) => void
}

function Categories({categories, activeCategory, setActiveCategory}: Props) {
    return (
        <ul className={'categories'}>
            <li className={classnames('category__item', {
                'active': activeCategory === null})}
                onClick={() => setActiveCategory(null)}>All</li>
            {
                categories.map((item, index) => {
                   return <li className={classnames('category__item',{
                       'active': activeCategory === index})}
                              key={item}
                              onClick={() => setActiveCategory(index)}>{item}</li>
                })
            }
        </ul>
    )
}

export default Categories
