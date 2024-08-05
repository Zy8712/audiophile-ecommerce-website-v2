'use client';

import { usePathname } from 'next/navigation';
import CategoryPageHeader from "@/components/shared-components/product-page-components/CategoryPageHeader";
import ProductCategoryPageLayout from "@/layouts/ProductCategoryPageLayout";
import ProductListings from '@/components/shared-components/product-page-components/ProductListings';
import ProductCategories from '@/components/shared-components/ProductCategories';
import SiteDescription from '@/components/shared-components/SiteDescription';

export default function ProductCategoryPage() {

    const pathname = usePathname();

    const pageTitle = pathname ? pathname.replace('/', '').charAt(0) + pathname.slice(2) : 'Home';

    let categoryValue;
    if (pageTitle.toLowerCase() === 'headphones') {
        categoryValue = 1;
    } else if (pageTitle.toLowerCase() === 'speakers') {
        categoryValue = 2;
    } else if (pageTitle.toLowerCase() === 'earphones') {
        categoryValue = 3;
    } else {
        categoryValue = 0; // Default value if none of the conditions match
    }

    return (
        <>
            <CategoryPageHeader>{pageTitle}</CategoryPageHeader>
            <ProductCategoryPageLayout>
                <ProductListings category={categoryValue} />
                <div className="my-40">
                    <ProductCategories />
                </div>
                <SiteDescription />
            </ProductCategoryPageLayout>
        </>
    );
}