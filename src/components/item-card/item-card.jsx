import './item-card.css';
import Button from '../button/button';
import { ShoppingCartOutlined } from '@ant-design/icons';

const ItemCard = (props) => {
    const { name, description, price, imgUrl, cartBtnOnClick, cartBtnText } = props;
    return (
        <div className='item-card'>
            <img className="item-img" src={imgUrl} alt="" width={250} />
            <div className="item-details">
                <h4>{name}</h4>
                <p>{description}</p>
                <div className="item-card-bottom">
                    <p className='price'>${price}</p>
                    <Button
                        onClick={cartBtnOnClick}
                        label={
                            <div className='cart-btn-content'>
                                <ShoppingCartOutlined style={{ fontSize: 20 }} />
                                <p>{cartBtnText}</p>
                            </div>
                        } />
                </div>
            </div>
        </div>
    )
}

export default ItemCard;