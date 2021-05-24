import classnames from "classnames"
import {useEffect, useRef, useState} from "react"
import SortArrow from "./SortArrow"
import {setActiveSort, actionsType} from "../redux/actionCreators"
import {SortType} from "../shared/types"
import {Dispatch} from "redux"


type Props = {
    sort: Array<SortType>,
    activeSort: SortType,
    dispatch: Dispatch<actionsType>
}

function Sort({sort, activeSort, dispatch}: Props) {
    const [isVisible, setIsVisible] = useState(false)

    const sortRef = useRef<HTMLSpanElement>(null)

    const handleSortClick = (item: SortType): void => {
        dispatch(setActiveSort(item))
        handleSortLabelClick()
    }

    const handleSortLabelClick = ():void => {
        setIsVisible(prevState => !prevState)
    }
    const handleOutsideClick = (e: any):void => {
        if(!e.path.includes(sortRef.current)){
            setIsVisible(false)
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick)
        return () => {
            document.removeEventListener('click', handleOutsideClick)
        }
    },[])

    return (
        <div className={'sort'}>
            <SortArrow isVisible={isVisible}/>
            <b>Sort by:</b>
            <span className={'sort__label'} onClick={handleSortLabelClick} ref={sortRef}>{activeSort}</span>
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
