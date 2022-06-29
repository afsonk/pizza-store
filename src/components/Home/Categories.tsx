import { useMemo } from 'react'
import { setActiveCategory } from '../../redux/filter/filterSlice'
import { useAppDispatch } from '../../redux'
import { StyledCategories, StyledCategoryItem } from './styles'

type Props = {
  categories: Array<string>
  activeCategory: null | number
}

function Categories({ categories, activeCategory }: Props) {
  const dispatch = useAppDispatch()
  const setCategory = (payload: null | number) => {
    dispatch(setActiveCategory(payload))
  }

  const setInitialCategory = () => setCategory(null)

  const categoriesJSX = useMemo(
    () =>
      categories.map((item, index) => {
        return (
          <StyledCategoryItem
            active={activeCategory === index}
            key={item}
            onClick={() => setCategory(index)}
          >
            {item}
          </StyledCategoryItem>
        )
      }),
    [categories, setCategory, activeCategory]
  )

  return (
    <StyledCategories data-testid='categories'>
      <StyledCategoryItem
        active={activeCategory === null}
        onClick={setInitialCategory}
      >
        All
      </StyledCategoryItem>
      {categoriesJSX}
    </StyledCategories>
  )
}

export default Categories
