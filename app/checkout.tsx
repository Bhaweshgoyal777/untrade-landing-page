import { loadStripe } from '@stripe/stripe-js';
import { useEffect } from 'react';
const stripePromise = loadStripe('pk_test_51PhpXP2LEAEafN9DlT12fMiFVlXcoBTYQiHYmTr5NePfEiRzgT0b7fLv4TNkfUkiCHQbpGo0h4BM1NzcUDQCIH9000kmirpRzY')
export default function Checkout({sessionId}) {
    useEffect(() => {

        console.log(sessionId);
        const redirectToCheckOut = async() => {
            const strip = await stripePromise;

            const {error} = await strip.redirectToCheckout({
                sessionId
            })

            if(error){
                console.error('Error during Stripe checkout:', error);
            }
            
        }
        redirectToCheckOut();
    } , [sessionId])
        return (
            <div>
              <h1>Redirecting to checkout...</h1>
            </div>
        )
}