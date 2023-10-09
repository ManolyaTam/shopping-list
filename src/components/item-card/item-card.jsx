import './item-card.css';
import Button from '../button/button';
import { ShoppingCartOutlined } from '@ant-design/icons';

const ItemCard = ({ name, description, price, imgUrl }) => {
    return (
        <div className='item-card'>
            <img className="item-img" src={imgUrl} alt="" width={250} />
            <div className="item-details">
                <h4>{name}</h4>
                <p>{description}</p>
                <div className="item-card-bottom">
                    <p className='price'>${price}</p>
                    <Button label={
                        <div className='add-to-cart-btn-content'>
                            <ShoppingCartOutlined style={{ fontSize: 20 }} />
                            <p>Add to cart</p>
                        </div>
                    } />
                </div>
            </div>
        </div>
    )
}

export default ItemCard;