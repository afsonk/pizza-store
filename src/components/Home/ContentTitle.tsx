import { StyledContentTitle } from './styles'

function ContentTitle({ activeCategory }: { activeCategory: string }) {
  return <StyledContentTitle>{activeCategory || 'All'} pizzas</StyledContentTitle>
}

export default ContentTitle
