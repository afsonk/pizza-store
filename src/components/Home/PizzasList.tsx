import { useSelector } from 'react-redux'
import ContentItem from './ContentItem'
import { CartItemType, ContentTypes } from '../../utills'
import { appStateType, useAppDispatch } from '../../redux'
import LoadingBlock from './LoadingBlock'
import { addItemToCart } from '../../redux/cart/cartSlice'

function PizzasList() {
  const { pizzas, isLoading } = useSelector((state: appStateType) => state.pizzaItems)
  const dispatch = useAppDispatch()

  const contentTypes: ContentTypes = {
    sizes: ['small', 'medium', 'large'],
    doughTypes: ['traditional', 'slim']
  }
  const handleAddToCart = (payload: CartItemType) => {
    dispatch(addItemToCart(payload))
  }

  return (
    <div className='content__list' data-testid='pizzasList'>
      {isLoading
        ? Array(4)
            .fill(0)
            .map((_, index) => {
              return <LoadingBlock key={index} />
            })
        : pizzas?.map((item) => {
            return (
              <ContentItem
                key={item.id}
                contentTypes={contentTypes}
                {...item}
                handleAddToCart={handleAddToCart}
              />
            )
          })}
    </div>
  )
}

export default PizzasList
