
export default function ProductCategories() {
    
    const productCategoriesData = [
        { categoryName: "Headphones", categoryLink: "/headphones", categoryImage: "/images/shared/desktop/image-category-thumbnail-headphones.png", categoryImageStyling: "h-40 md:h-52 absolute -top-16", mobileMenuVer: false },
        { categoryName: "Speakers", categoryLink: "/speakers", categoryImage: "/images/shared/desktop/image-category-thumbnail-speakers.png", categoryImageStyling: "h-36 md:h-48 absolute -top-12", mobileMenuVer: false },
        { categoryName: "Earphones", categoryLink: "/earphones", categoryImage: "/images/shared/desktop/image-category-thumbnail-earphones.png", categoryImageStyling: "h-32 md:h-44 absolute -top-11", mobileMenuVer: false }
    ];

    return (
        <>
            <div className="w-full h-[683px] sm:h-[284px] flex flex-col md:flex-row justify-between items-center">
                
                {productCategoriesData.map((category, index) => (
                    <a href={category.categoryLink} key={index} 
                    className={`w-full md:w-[230px] custom-md:w-[275px] lg:w-[300px] custom-lg:w-[350px] ${category.mobileMenuVer ? 'h-[160px]' : 'h-[217px]'}  md:h-full flex flex-col justify-end transition-all duration-500 ease-in-out`}>
                        <div className={`w-full ${category.mobileMenuVer ? 'h-[110px]' : 'h-[160px]'} md:h-[204px] flex flex-col justify-end items-center bg-theme-light-grey rounded-lg relative group hover:cursor-pointer`}>
                            <img src={category.categoryImage} className={category.categoryImageStyling} />

                            <div className={`w-full h-[58px] text-center ${category.mobileMenuVer ? 'mb-1' : 'mb-[30px]'}`}>
                                <span className={`text-black block text-lg font-bold uppercase leading-none tracking-[1.29px] ${category.mobileMenuVer ? 'mb-2' : 'mb-[15px]'}`}>
                                    {category.categoryName}
                                </span>
                                <div className="flex justify-center items-center">
                                    <img src="/images/cart/shopping-bag-grey-hsl-0-0-50-svgrepo-com.svg" className="h-4 mr-2" />
                                    <span className="text-[13px] tracking-[1px] uppercase font-bold opacity-50 group-hover:text-theme-dark-orange group-hover:opacity-100">
                                        Shop
                                    </span>
                                    <img src="/images/shared/desktop/icon-arrow-right.svg" className="h-2.5 ml-[13.32px]" />
                                </div>
                            </div>

                        </div>
                    </a>
                ))}

            </div>
        </>
    );
}