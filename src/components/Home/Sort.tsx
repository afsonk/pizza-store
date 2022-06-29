import classnames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import { SortArrowSVG } from '../../assets/svg'
import { SortType } from '../../utills'
import { setActiveSort } from '../../redux/filter/filterSlice'
import { useAppDispatch } from '../../redux'
import { StyledPopupListItem, StyledSort, StyledSortPopup } from './styles'

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
    <StyledSort data-testid='sort'>
      <SortArrowSVG isVisible={isVisible} />
      <b>Sort by:</b>
      <span onClick={handleSortLabelClick} ref={sortRef} role='toolbar' data-testid='sortLabel'>
        {activeSort}
      </span>
      <StyledSortPopup isVisible={isVisible}>
        <ul>
          {sort.map((item) => {
            return (
              <StyledPopupListItem
                key={item}
                isListItemActive={item === activeSort}
                onClick={() => handleSortClick(item)}
              >
                {item}
              </StyledPopupListItem>
            )
          })}
        </ul>
      </StyledSortPopup>
    </StyledSort>
  )
}

export default Sort
