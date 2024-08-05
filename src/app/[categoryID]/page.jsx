'use client';

import { usePathname } from 'next/navigation';
import CategoryPageHeader from "@/components/shared-components/product-page-components/CategoryPageHeader";
import ProductCategoryPageLayout from "@/layouts/ProductCategoryPageLayout";
import ProductListings from '@/components/shared-components/product-page-components/ProductListings';

export default function ProductCategoryPage() {

    const pathname = usePathname();

    const pageTitle = pathname ? pathname.replace('/', '').charAt(0) + pathname.slice(2) : 'Home';

    return (
        <>
            <CategoryPageHeader>{pageTitle}</CategoryPageHeader>
            <ProductCategoryPageLayout>
                <ProductListings />
            </ProductCategoryPageLayout>
        </>
    );
}