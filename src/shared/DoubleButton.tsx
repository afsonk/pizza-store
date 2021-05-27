import classnames from "classnames"

type Props = {
    singleItemCount: number,
    handlePlusClick: () => void,
    handleMinusClick: () => void
}

function DoubleButton({singleItemCount,handlePlusClick, handleMinusClick}:Props){
    return(
        <div className={'double-button'}>
            <button className={classnames('remove-button',{
                'disabled': singleItemCount === 1
            })} onClick={handleMinusClick}>
                <svg width="10" height="10" className="icon">
                    <rect fill="#454B54" y="4" width="10" height="2" rx="1"></rect>
                </svg>
            </button>
            <span>{singleItemCount}</span>
            <button className={'add-button'} onClick={handlePlusClick} >
                <svg width="10" height="10" className="icon">
                    <g fill="#454B54">
                        <rect x="4" width="2" height="10" ry="1"></rect>
                        <rect y="4" width="10" height="2" rx="1"></rect>
                    </g>
                </svg>
            </button>
        </div>
    )
}

export default DoubleButton