'use client'
import { useSelector } from 'react-redux';

export default function Cart() {

    const { showCart, totalItems } = useSelector(state => state.projects);

    return (
        <>
            <div className={`w-[360px] ${totalItems == 0 ? 'h-[240px]' : 'min-h-[240px] max-h-[488px]'} bg-white rounded-lg fixed z-50 top-28 right-2 p-6 overflow-hidden ${showCart ? 'flex' : 'hidden'}`}>

                <div className={`w-full h-full ${totalItems == 0 ? 'flex' : 'hidden'} justify-center items-center p-1`}>
                    <div className="w-full h-full flex flex-col justify-center items-center text-center">
                        <img src="/images/cart/shopping-cart-14-svgrepo-com.svg" className="w-16 mb-3" />
                        <p className="text-xl font-bold mb-2">Your cart is <span className="text-theme-dark-orange">empty</span>!</p>
                        <p className="text-xs">
                            Add items you're interested in with the "Add to cart" button.
                            Click back here to check your cart, or to proceed to checkout.
                        </p>
                        <p className="text-xs">
                        </p>
                    </div>
                </div>

            </div>
        </>
    );
}