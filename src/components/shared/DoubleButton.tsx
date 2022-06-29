import classnames from 'classnames'
import { StyledButtonInDouble, StyledDoubleButton } from './styles'

type Props = {
  singleItemCount: number
  handlePlusClick: () => void
  handleMinusClick: () => void
}

function DoubleButton({ singleItemCount, handlePlusClick, handleMinusClick }: Props) {
  return (
    <StyledDoubleButton className='double-button'>
      <StyledButtonInDouble
        disabled={singleItemCount === 1}
        onClick={handleMinusClick}
        type='button'
      >
        <svg width='10' height='10' className='icon'>
          <rect fill='#454B54' y='4' width='10' height='2' rx='1' />
        </svg>
      </StyledButtonInDouble>
      <span>{singleItemCount}</span>
      <button className='add-button' onClick={handlePlusClick} type='button'>
        <svg width='10' height='10' className='icon'>
          <g fill='#454B54'>
            <rect x='4' width='2' height='10' ry='1' />
            <rect y='4' width='10' height='2' rx='1' />
          </g>
        </svg>
      </button>
    </StyledDoubleButton>
  )
}

export default DoubleButton
