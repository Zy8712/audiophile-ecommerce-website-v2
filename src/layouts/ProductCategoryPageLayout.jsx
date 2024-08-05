
export default function ProductCategoryPageLayout(props) {
    return (
        <>
            <div className="w-full flex justify-center items-center pt-[120px] pb-[196px] border-blue-500 border-2 border-solid">
                <div className="w-[95%] lg:w-[1110px] flex flex-col border-red-500 border-2 border-solid">
                    {props.children}
                </div>
            </div>
        </>
    );
}