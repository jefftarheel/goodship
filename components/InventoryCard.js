
import classes from './InventoryCard.module.css';

const InventoryCard = (props) => {
    const item = props.item;
    return (
        <div className={classes.container}>
          <div><img src={item.image_url} width="75px" height="75px"/></div>
          <div><p>{item.name}</p></div>
          <div><p>{item.price}</p></div>
          <button onClick={() => props.addItem(item)}>Add Item To Cart</button>
        </div>
    );
}

export default InventoryCard;