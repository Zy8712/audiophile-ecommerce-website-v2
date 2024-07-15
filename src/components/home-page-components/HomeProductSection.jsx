import HomeProductSectionLayout from "@/layouts/HomeProductSectionLayout";
import ProductCategories from "../shared-components/product-categories-redirect-components/ProductCategories";

export default function HomeProductSection(){
    return(
        <>
            <HomeProductSectionLayout>
                <ProductCategories />

            </HomeProductSectionLayout>
        </>
    );
}