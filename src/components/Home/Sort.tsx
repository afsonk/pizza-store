import classnames from "classnames"
import {useState} from "react"
import SortArrow from "./SortArrow"


function Sort() {
    const sort = ['popularity', 'price', 'alphabet']
    const [activeSort, setActiveSort] = useState(sort[0])
    const [isVisible, setIsVisible] = useState(false)


    const handleSortClick = (item: string): void => {
        setActiveSort(item)
        handleSortLabelClick()
    }
    const handleSortLabelClick = ():void => {
        setIsVisible(prevState => !prevState)
    }


    return (
        <div className={'sort'}>
            <SortArrow isVisible={isVisible}/>
            <b>Sort by:</b>
            <span className={'sort__label'} onClick={handleSortLabelClick}>{activeSort}</span>
            <div className={classnames('sort__popup',{
                'active': isVisible
            })}>
                <ul>
                    {
                        sort.map(item => {
                            return <li className={classnames({
                                'active': item === activeSort
                            })}
                            onClick={() => handleSortClick(item)}>{item}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Sort
