import './cart.css';
import ItemCard from '../../components/item-card/item-card';
import { useContext } from 'react';
import { cartContext } from '../../App';
const CartPage = () => {
    const { cart, setCart } = useContext(cartContext);
    console.log(cart);
    return (
        <div className='cart-page'>
            {cart.map((item) => {
                return (
                    <ItemCard
                        key={'viewpage_itemCard' + item.id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        imgUrl={item.imageUrl}
                        cartBtnOnClick={() => {
                            const newCart = cart.filter((tmp) => tmp !== item);
                            setCart(newCart);
                        }}
                        cartBtnText={'Remove from cart'}
                    />
                )
            })}
        </div>
    )
}

export default CartPage;