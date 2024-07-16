
export default function BlackProductButton(props) {
    return (
        <>
            <a href={props.pageLink}
                className="w-40 h-12 flex justify-center items-center bg-black hover:bg-theme-grayish-black text-white text-[13px] font-bold leading-normal tracking-[1px] uppercase">
                See Product
            </a>
        </>
    );
}