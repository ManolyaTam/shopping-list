import './item-card.css';

const ItemCard = ({ name, description, price, imgUrl }) => {
    return (
        <div className='item-card'>
            <img className="item-img" src={imgUrl} alt="" width={250} />
            <div className="item-details">
                <h4>{name}</h4>
                <p>{description}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default ItemCard;