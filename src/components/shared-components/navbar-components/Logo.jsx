import Image from 'next/image';

export default function Logo() {
    return (
        <>
            <a href="/">
                <Image
                    src="/images/shared/desktop/logo.svg"
                    alt=""
                    width={143}
                    height={25}
                />
            </a>
        </>
    );
}