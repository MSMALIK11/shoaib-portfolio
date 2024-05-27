
interface HeadingProp {
    variant?: 'primary' | "secondary",
    text: string,
    className?: string,
}

const Heading = ({ className, text, variant = "primary" }: HeadingProp) => {
    return (
        <p className={`${className} ${variant === 'primary' ? 'text-white  text-sm font-bold' : 'text-muted text-xs'
            } `}>{text}</p>
    )
}

export default Heading