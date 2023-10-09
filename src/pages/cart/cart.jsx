import './cart.css';
import ItemCard from '../../components/item-card/item-card';
import { useContext, useState } from 'react';
import { cartContext } from '../../App';
import Button from '../../components/button/button';
import CheckoutForm from './checkout/checkout-form';

const CartPage = () => {
    const { cart, setCart } = useContext(cartContext);
    const [showCheckout, setShowCheckout] = useState(false);
    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

    const closeCheckout = () => { setShowCheckout(false) }
    return (
        <div className='cart-page'>
            {cart.length > 0 && <>
                <div className="checkout-and-price">
                    <p className='total-price'>Total: ${totalPrice.toFixed(2)}</p>
                    <Button label='checkout' onClick={() => {
                        setShowCheckout(true)
                    }} />
                </div>
            </>
            }
            {
                !cart.length ?
                    <h4>your cart is empty -_-</h4>
                    :
                    <div>
                        <div className='cart-grid'>
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
                    </div>
            }
            {showCheckout && <CheckoutForm close={closeCheckout} />}
        </div>
    )
}

export default CartPage;

