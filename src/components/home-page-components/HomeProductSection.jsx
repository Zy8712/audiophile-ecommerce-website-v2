import HomeProductSectionLayout from "@/layouts/HomeProductSectionLayout";
import ProductCategories from "../shared-components/product-categories-redirect-components/ProductCategories";
import { ProductPromoSection, ZX9SpeakerPromo, ZX7SpeakerPromo, YX1EarphonePromo } from "@/utils/homePageProductPromo";
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