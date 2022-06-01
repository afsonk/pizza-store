const ordersResponce = {
  number: '4242424242424242',
  expiry: '12/21',
  cvc: '123',
  name: 'John Smith',
  amount: 20,
  meta: {
    items: {
      '7-small-0': {
        pizzas: [
          {
            id: 7,
            name: 'Margherita',
            image:
              'https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/d48003cd-902c-420d-9f28-92d9dc5f73b4.jpg',
            price: 10,
            type: 0,
            size: 'small'
          }
        ],
        totalPrice: 20
      }
    },
    totalCount: 2,
    totalPrice: 20
  },
  id: 12
}

export type OrdersResponseType = typeof ordersResponce
