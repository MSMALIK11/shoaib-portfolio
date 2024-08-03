

const Badge = ({ label, icon }: { label: string, icon: React.ReactElement | string }) => {
    return (
        <div id={label} className={`bg-badge inline-flex px-4 rounded-lg  icon py-1 gap-2 items-center justify-center `}> {icon && icon} <span className="glow">{label}</span></div>
    )
}

export default Badge