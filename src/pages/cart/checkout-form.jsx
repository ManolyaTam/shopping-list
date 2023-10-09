import Button from '../../components/button/button';

function CheckoutForm() {
    const submitHandler = (event) => {
        event.preventDefault();
    };

    const cancelHandler = () => {
    };

    return (
        <form onSubmit={submitHandler}>
            <label >
                First Name:
            </label>
            <input />

            <label>
                Last Name:
            </label>
            <input />

            <label>
                Email:
            </label>
            <input type="email" />

            <Button type="submit" label='submit' onClick={submitHandler} />
            <Button type="reset" label='Cancel' onClick={cancelHandler} />
        </form>
    );
}

export default CheckoutForm;