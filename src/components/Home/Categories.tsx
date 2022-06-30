import classnames from 'classnames'
import { memo, useCallback, useMemo } from 'react'
import { setActiveCategory } from '../../redux/filter/filterSlice'
import { useAppDispatch } from '../../redux'

type Props = {
  categories: Array<string>
  activeCategory: null | number
}

function Categories({ categories, activeCategory }: Props) {
  const dispatch = useAppDispatch()
  const setCategory = useCallback((payload: null | number) => {
    dispatch(setActiveCategory(payload))
  }, [])

  const setInitialCategory = () => setCategory(null)

  const categoriesJSX = useMemo(
    () =>
      categories.map((item, index) => {
        return (
          <li
            className={classnames('category__item', {
              active: activeCategory === index
            })}
            key={item}
            onClick={() => setCategory(index)}
          >
            {item}
          </li>
        )
      }),
    [categories, setCategory, activeCategory]
  )

  return (
    <ul className='categories' data-testid='categories'>
      <li
        className={classnames('category__item', {
          active: activeCategory === null
        })}
        onClick={setInitialCategory}
      >
        All
      </li>
      {categoriesJSX}
    </ul>
  )
}

export default memo(Categories)
