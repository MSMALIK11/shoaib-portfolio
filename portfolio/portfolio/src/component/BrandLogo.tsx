import codeCloseImg from '../assets/codeBracket.svg'
import codeOpenImg from '../assets/openBracket.svg'
const BrandLogo = () => {
    return (
        <div className='flex items-center'>
            <img width={22} src={codeOpenImg} alt="" />
            <p className="text-xl font-bold animate-fade-in">
                <span className="text-linkColor ">S</span>
                <span className="">h</span>
                <span className="">o</span>
                <span className="">a</span>
                <span className="">i</span>
                <span className="">b</span>
            </p>
            <img width={24} src={codeCloseImg} alt="" />
        </div>
    )
}

export default BrandLogo