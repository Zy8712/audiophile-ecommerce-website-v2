'use client'
import { useSelector } from 'react-redux';
import { EmptyCartMessage, CloseCartButton } from '@/utils/cartComponents';

export default function Cart() {

    const { showCart, totalItems } = useSelector(state => state.projects);

    return (
        <>
            <div className={`w-[360px] ${totalItems == 0 ? 'h-[240px]' : 'min-h-[240px] max-h-[488px]'} bg-white rounded-lg fixed z-50 top-28 right-2 p-6 overflow-hidden ${showCart ? 'flex' : 'hidden'}`}>

                <CloseCartButton />

                <EmptyCartMessage totalItems={totalItems} />

            </div>
        </>
    );
} //BL