'use client'
import { useDispatch } from 'react-redux';
import { toggleCart } from '@/lib/settings';

export default function CloseCartButton({ }) {

    const dispatch = useDispatch();
    
    const handleCloseClick = () => {
        dispatch(toggleCart());
    }

    return (
        <>
            <button onClick={() => handleCloseClick()} className="w-10 h-10 absolute top-0 right-0 rounded-bl-full rounded-tr-lg bg-theme-dark-orange">
                <div className="w-full h-full flex justify-end items-start rounded-bl-full">
                    <img src="/images/cart/cross-circle-svgrepo-com.svg" className="w-5 h-5 mt-[6px] mr-[6px]" />
                </div>
            </button>
        </>
    );
}