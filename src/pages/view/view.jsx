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
                        cartBtnOnClick={() => {
                            if (!cart.some(cartItem => cartItem.id === item.id)) {
                                setCart([...cart, item])
                            }
                        }}
                        cartBtnText={'Add to cart'}
                    />
                )
            })}
        </div>
    )
}

export default ViewPage;