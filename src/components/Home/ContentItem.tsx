type ContentTypes = {
    [key: string]: string[]
}

function ContentItem() {
    const contentTypes:ContentTypes = {
        sizes: ['small', 'medium', 'large'],
        dough: ['traditional', 'slim']
    }
    return (
        <div className={'content__item'}>
            <img className={'content__item-image'}
                 src="https://dodopizza-a.akamaihd.net/static/Img/Products/Pizza/ru-RU/b750f576-4a83-48e6-a283-5a8efb68c35d.jpg"
                 alt="pizza"/>
            <h2 className={'content__item-title'}>Gavaian</h2>
            <div className={'content-types'}>
                <ul className={'content-types-list content-types__sizes'}>
                    {
                        contentTypes.sizes.map(item => <li key={item}>{item}</li>)
                    }
                </ul>
                <ul className={'content-types-list content-types__dough'}>
                    {
                        contentTypes.dough.map(item => <li key={item}>{item}</li>)
                    }
                </ul>
            </div>
            <footer className={'item-bottom content-item__bottom'}>
                <span className={'item-bottom__price'}>20 USD</span>
                <button className={'item-bottom__cart button button--cart'}>
                    <span>Add to cart</span>
                </button>
            </footer>
        </div>
    )
}

export default ContentItem