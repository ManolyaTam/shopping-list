import './view.css';
import { shoppingItems } from '../../data/shoppingItems'
import ItemCard from '../../components/item-card/item-card';

const ViewPage = () => {
    return (
        <div className='view-page'>
            {shoppingItems.map((item) => {
                return (
                    <ItemCard
                        key={'viewpage_itemCard' + item.id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        imgUrl={item.imageUrl}
                    />
                )
            })}
        </div>
    )
}

export default ViewPage;