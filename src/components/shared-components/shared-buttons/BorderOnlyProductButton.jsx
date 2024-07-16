
export default function BorderOnlyProductButton(props) {
    return (
        <>
            <a href={props.pageLink}
                className="w-40 h-12 flex justify-center items-center border-black border-solid border-2 hover:bg-black text-black hover:text-white text-[13px] font-bold leading-normal tracking-[1px] uppercase">
                See Product
            </a>
        </>
    );
}