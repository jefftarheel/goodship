
import classes from './ShoppingCartCard.module.css';

const ShoppingCartCard = (props) => {
    const item = props.item;
    return (
        <div className={classes.container}>
          <div>
            <img src={item.image_url} width="75px" height="75px"/>
            <p>{item.name}</p>
          </div>
          <div>
            <button onClick={() => props.decrementCart(item.id)} className='btn-primary'>-</button>
            <input size="1" value={item.quantity} type="text" readOnly/>
            <button onClick={() => props.incrementCart(item.id)} className='btn-primary'>+</button>
          </div>
          <div>${item.price}</div>
          <div>
            <button onClick={() => props.removeItem(item.id)} className='btn-primary'>Remove From Cart</button>
          </div>
        </div>
    );
}

export default ShoppingCartCard;