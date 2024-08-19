import all_products from "@/data/products.json";
import { OrangeProductButton } from "@/utils/productButtons";

export default function ProductListings({ category }) {

    const currentProducts = all_products.filter(prod => prod.category === category);

    const productCount = currentProducts.length;

    return (
        <div className="w-full flex flex-col">
            {currentProducts.length > 0 ? (
                currentProducts.map((product, index) => (
                    <div key={index} className={`${index != (productCount-1) ? 'mb-[120px] lg:mb-40' : 'mb-0' } w-full ${product.newProduct ? 'h-[724px] sm:h-[706px]' : 'h-[681px] sm:h-[671px]'} lg:h-[560px] flex flex-col ${index%2 == 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} justify-between items-center transition-all duration-500 ease-in-out`}>
                        
                        <img src={`${product.preview_images.previewImageDesktop}`} className="h-full rounded-lg hidden lg:inline-block" />
                        <img src={`${product.preview_images.previewImageTablet}`} className="max-w-[689px] rounded-lg hidden sm:inline-block lg:hidden" />
                        <img src={`${product.preview_images.previewImageMobile}`} className="max-w-[327px] rounded-lg inline-block sm:hidden" />
                        
                        <div className={`w-[327px] sm:w-[572px] lg:w-[445px] ${product.newProduct ? 'h-[340px] sm:h-[302px] lg:h-[343px]' : 'h-[297px] sm:h-[267px] lg:h-[308px]'} flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-500 ease-in-out`}>
                            <span className={`${product.newProduct ? 'block' : 'hidden'} text-theme-dark-orange text-sm tracking-[10px] uppercase mb-4`}>
                                New Product
                            </span>
                            <h2 className="text-black text-[28px] sm:text-[40px] leading-[32px] sm:leading-[44px] tracking-[1.43px] font-bold uppercase transition-all duration-500 ease-in-out">
                                {product.nameFront} <br className={`${product.lineBreak ? 'inline' : 'hidden'}`} /> {product.nameBack}
                            </h2>
                            <p className="text-black text-[15px] leading-[25px] font-medium opacity-50 mt-6 sm:mt-8 mb-6 lg:mb-10 transition-all duration-500 ease-in-out">
                                {product.description}
                            </p>
                            <OrangeProductButton pageLink={product.link}/>
                        
                        </div>
                    </div>
                ))
            ) : (
                <p>No products found for this category.</p>
            )}
        </div>
    );
}
