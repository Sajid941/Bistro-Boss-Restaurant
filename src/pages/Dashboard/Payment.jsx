import {loadStripe} from '@stripe/stripe-js';
import SectionTitle from './../../components/SectionTitle/SectionTitle';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutFrom from './CheckoutFrom';
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)

const Payment = () => {
    return (
        <div>
            <SectionTitle heading={'Payment'}/>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutFrom/>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;