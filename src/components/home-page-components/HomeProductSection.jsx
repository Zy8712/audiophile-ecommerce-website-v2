import HomeProductSectionLayout from "@/layouts/HomeProductSectionLayout";
import ProductCategories from "../shared-components/product-categories-redirect-components/ProductCategories";
import ProductPromoSection from "./product-promos/ProductPromoSection";
import ZX9SpeakerPromo from "./product-promos/ZX9SpeakerPromo";
import ZX7SpeakerPromo from "./product-promos/ZX7SpeakerPromo";
import YX1EarphonePromo from "./product-promos/YX1EarphonePromo";
import SiteDescription from "../shared-components/SiteDescription";

export default function HomeProductSection(){
    return(
        <>
            <HomeProductSectionLayout>
                
                <ProductCategories />
                
                <ProductPromoSection>
                    <ZX9SpeakerPromo />
                    <ZX7SpeakerPromo />
                    <YX1EarphonePromo />
                </ProductPromoSection>

                <SiteDescription />

            </HomeProductSectionLayout>
        </>
    );
}