import classnames from 'classnames'
import { memo, useEffect, useRef, useState } from 'react'
import { SortArrowSVG } from '../../assets/svg'
import { SortType } from '../../utills'
import { setActiveSort } from '../../redux/filter/filterSlice'
import { useAppDispatch } from '../../redux'

type Props = {
  sort: Array<SortType>
  activeSort: SortType
}

function Sort({ sort, activeSort }: Props) {
  const [isVisible, setIsVisible] = useState(false)
  const dispatch = useAppDispatch()

  const sortRef = useRef<HTMLSpanElement>(null)

  const handleSortClick = (item: SortType): void => {
    dispatch(setActiveSort(item))
    handleSortLabelClick()
  }

  const handleSortLabelClick = (): void => {
    setIsVisible((prevState) => !prevState)
  }
  const handleOutsideClick = (e: MouseEvent | TouchEvent): void => {
    if (!e.composedPath()?.includes(sortRef.current!)) {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  return (
    <div className='sort' data-testid='sort'>
      <SortArrowSVG isVisible={isVisible} />
      <b>Sort by:</b>
      <span
        className='sort__label'
        onClick={handleSortLabelClick}
        ref={sortRef}
        role='toolbar'
        data-testid='sortLabel'
      >
        {activeSort}
      </span>
      <div
        className={classnames('sort__popup', {
          active: isVisible
        })}
        data-testid='sortPopup'
      >
        <ul>
          {sort.map((item) => {
            return (
              <li
                key={item}
                className={classnames({
                  active: item === activeSort
                })}
                onClick={() => handleSortClick(item)}
              >
                {item}
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default memo(Sort)
