
import InventoryCard from './InventoryCard';

const CatalogPage = (props) => {
    return (
        <div>
            {props.items.map((item) =>
              <InventoryCard key={item.id} item={item} addItem={props.addItem} />
            )}
        </div>
    );
}

export default CatalogPage;