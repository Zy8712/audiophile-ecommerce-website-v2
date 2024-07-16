
export default function EmptyCartMessage({totalItems}) {

    return (
        <>
            <div className={`w-full h-full ${totalItems == 0 ? 'flex' : 'hidden'} justify-center items-center p-1`}>
                <div className="w-full h-full flex flex-col justify-center items-center text-center">
                    <img src="/images/cart/shopping-cart-14-svgrepo-com.svg" className="w-16 mb-3" />
                    <p className="text-xl font-bold mb-2">Your cart is <span className="text-theme-dark-orange">empty</span>!</p>
                    <p className="text-xs">
                        Add items you're interested in with the "Add to cart" button.
                        Click back here to check your cart, or to proceed to checkout.
                    </p>
                </div>
            </div>
        </>
    );
}