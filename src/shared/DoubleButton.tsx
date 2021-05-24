

function DoubleButton(){
    return(
        <div className={'double-button'}>
            <button>
                <svg width="10" height="10" className="icon">
                    <rect fill="#454B54" y="4" width="10" height="2" rx="1"></rect>
                </svg>
            </button>
            <span>1</span>
            <button>
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