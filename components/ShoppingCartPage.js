
import ShoppingCartCard from './ShoppingCartCard';

const ShoppingCartPage = (props) => {

    const basketTotal = 0.0;
    props.items.forEach(element =>
        basketTotal += element.price * element.quantity
    );
    return (
        <div>
            {props.items.length > 0 ?
                props.items.map((item) =>
                    <ShoppingCartCard key={item.id} item={item}
                        removeItem={props.removeItem}
                        incrementCart={props.incrementCart}
                        decrementCart={props.decrementCart} />
                ) : <p>Shopping Cart is empty</p>
            }
            <h2>Total: ${basketTotal.toFixed(2)}</h2>
         </div>
    );
}

export default ShoppingCartPage;