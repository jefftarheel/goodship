
import PageHeader from '../components/PageHeader';
import CatalogPage from '../components/CatalogPage';
import ShoppingCartPage from '../components/ShoppingCartPage';

import catalogclass from './CatalogPage.module.css';
import cartclass from './ShoppingCartPage.module.css';

import { useState } from 'react';

const FRUIT_INVENTORY_LIST = [
    {
        id: 0,
        name: 'Banana',
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg',
        price: '2.00'
    },
    {
        id: 1,
        name: 'Apple',
        image_url: 'https://thumbs.dreamstime.com/z/red-apple-isolated-clipping-path-19130134.jpg',
        price: '1.50'
    },
    {
        id: 2,
        name: 'Orange',
        image_url: 'https://www.freepnglogos.com/uploads/orange-png/orange-ingredients-10.png',
        price: '1.25'
    },
    {
        id: 3,
        name: 'Watermelon',
        image_url: 'https://www.transparentpng.com/thumb/watermelon/TsIHwz-watermelon-clipart-file.png',
        price: '3.00'
    }
];

const HomePage = () => {

    const [shoppingCartItems, setShoppingCartItems] = useState([]);

    const removeItemFromCart = (id) => {
        setShoppingCartItems(
            shoppingCartItems.filter((item) =>
                item.id !== id
            )
        );
    };

    const addItemToCart = (item) => {
        const found = shoppingCartItems.find(i => i.id === item.id);
        if (!found) {
            setShoppingCartItems(shoppingCartItems => [...shoppingCartItems,
            {
                id: item.id,
                name: item.name,
                image_url: item.image_url,
                price: item.price,
                quantity: 1
            }]);
        }
    };

    const decrementItemFromCart = (id) => {
        setShoppingCartItems(
            shoppingCartItems.map((item) =>
                item.id === id && item.quantity > 0
                    ? { ...item, quantity: item.quantity-=1 }
                    : { ...item }
            )
        );
    };

    const incrementCartItem = (id) => {
        setShoppingCartItems(
            shoppingCartItems.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity+=1 }
                    : { ...item }
            )
        );
    };

    return (
      <div>
        <PageHeader />
        <CatalogPage items={FRUIT_INVENTORY_LIST}
                     addItem={addItemToCart} />
        <ShoppingCartPage items={shoppingCartItems}
                     removeItem={removeItemFromCart}
                     incrementCart={incrementCartItem}
                     decrementCart={decrementItemFromCart} />
      </div>
    );
}

export default HomePage;