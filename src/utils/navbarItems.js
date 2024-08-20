import AudiophileLogo from "@/components/shared-components/navbar-components/Logo";
import NavbarOptions from "@/components/shared-components/navbar-components/NavOptions";
import CartToggleButton from "@/components/shared-components/navbar-components/CartToggle";

export const Logo = AudiophileLogo;
export const NavOptions = NavbarOptions
export const CartToggle = CartToggleButton;

export const navOptions = [
    { pageName: "Home", path: "/"},
    { pageName: "Headphones", path: "/headphones"},
    { pageName: "Speakers", path: "/speakers"},
    { pageName: "Earphones", path: "/earphones"},
];