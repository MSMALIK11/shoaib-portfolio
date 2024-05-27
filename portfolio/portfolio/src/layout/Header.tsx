import BrandLogo from "../component/BrandLogo"
import HeaderRightLinks from "../component/HeaderRightLinks"

const Header = () => {
    return (
        <div className='bg-secondary fixed z-50 top-0 w-full h-[48px] flex items-center justify-between lg:px-12 md:px-8 sm:px-4'>
            <BrandLogo />
            <HeaderRightLinks />


        </div>
    )
}

export default Header