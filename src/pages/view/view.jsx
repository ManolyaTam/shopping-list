import './view.css';
import { shoppingItems } from '../../data/shoppingItems'
import ItemCard from '../../components/item-card/item-card';
import { useContext } from 'react';
import { cartContext } from '../../App';

const ViewPage = () => {
    const { cart, setCart } = useContext(cartContext)
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
                        addToCart={() => setCart([...cart, item])}
                    />
                )
            })}
        </div>
    )
}

export default ViewPage;