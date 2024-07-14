
export default function CartToggle() {
    return (
        <>
            <div className="relative">
                <button>
                    <img src="/images/shared/desktop/icon-cart.svg" className={`custom-dark-orange-filter`} />
                </button>

                <div className="absolute z-[60px] -top-2 -right-3 w-4 h-4 flex flex-col justify-center items-center bg-theme-dark-orange rounded-full text-white font-bold text-[8px] text-center">
                    <span></span>
                </div>
            </div>
        </>
    );
}