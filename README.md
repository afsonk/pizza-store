# React pizza-store

## Short description

This is a pizza-store I made mostly using TypeScript. This store allow's user to buy any kind of pizza, choose their properties such as size or type of dough. Sorting and choosing categories are provided by JSON server that is located at heroku.com.  User can add items which he wants to buy to the shopping cart. On this page, he can see all the items that were added to the cart, the price, and quantity of every single item, and finally, continue to the checkout page. At checkout page appears credit card visualization, it helps the user to fill all the required credit card information correctly. After those steps user can make a "fake payment" which is sending to the backend.

## Implemented technologies

### `React` - building UI interface;
### `TypeScript` - for static type definitions and error catching;
### `@redux/toolkit` - for state managment of cart, filters and pizzas;
### `React-credit-cards` - for creating interactive credit cart;
### `Formik` - for creating checkout form;
### `Yup` - for form validation;
### `React Router` - for app routing; 
### `JSON Server` - for backend. All items are stored on JSON server. It helps with sorting and allows you to store all the orders that were made by customers;
### `Shopping Cart` - user can add or remove items from shopping cart, see detailed info about product: price, count, picture etc;
### `SCSS` - for styling;

## Links
### Live preview https://pizza-store-pet-project.netlify.app/
### BackEnd https://www.server-for-pizza.herokuapp.com/

