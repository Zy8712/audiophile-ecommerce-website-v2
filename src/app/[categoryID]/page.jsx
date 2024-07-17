'use client';

import { usePathname } from 'next/navigation';
import CategoryPageHeader from "@/components/product-category-page-components/CategoryPageHeader";
import ProductCategoryPageLayout from "@/layouts/ProductCategoryPageLayout";

export default function ProductCategoryPage() {

    const pathname = usePathname();

    const pageTitle = pathname ? pathname.replace('/', '').charAt(0) + pathname.slice(2) : 'Home';

    return (
        <>
            <CategoryPageHeader>{pageTitle}</CategoryPageHeader>
            <ProductCategoryPageLayout>

            </ProductCategoryPageLayout>
        </>
    );
}