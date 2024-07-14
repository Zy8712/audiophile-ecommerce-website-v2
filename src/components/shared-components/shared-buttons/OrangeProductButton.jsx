
export default function OrangeProductButton(props) {
    return (
        <>
            <a href={props.pageLink}
                className="bg-theme-dark-orange w-40 h-12 flex justify-center items-center text-white text-[13px] font-bold leading-normal tracking-[1px] uppercase hover:bg-theme-light-orange">
                See Product
            </a>
        </>
    );
}