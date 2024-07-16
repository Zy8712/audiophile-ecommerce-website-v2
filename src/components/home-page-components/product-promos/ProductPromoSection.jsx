
export default function ProductPromoSection(props) {
    return (
        <>
            <div className="w-full h-[1392px] custom-sm:h-[1423px] md:h-[1296px] flex flex-col justify-between mb-10">
                {props.children}
            </div>
        </>
    );
}