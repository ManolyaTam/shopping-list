import './checkout-form.css'
import Button from '../../../components/button/button';

function CheckoutForm(props) {
    const submitHandler = (event) => {
        event.preventDefault();
        alert('✔ your order is submitted')
        props.close();
    };

    const cancelHandler = () => {
        props.close();
    };

    return (
        <div className="checkout-form">
            <form className='checkout-form-innner' onSubmit={submitHandler}>
            <h3>Checkout</h3>
                <label >First Name:</label>
                <input required />
                <br/>

                <label>Last Name:</label>
                <input required />
                <br/>

                <label>Email:</label>
                <input type="email" required />
                <br/>

                <div className="checkout-btns">
                    <Button type="submit" label='submit' />
                    <Button type="reset" label='Cancel' onClick={cancelHandler} />
                </div>
            </form>
        </div>
    );
}

export default CheckoutForm;