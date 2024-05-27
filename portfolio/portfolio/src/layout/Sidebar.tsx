
import { sidebarLinks } from './links'

const Sidebar = () => {
    return (
        <div id="sidebar-wraper" className='border-r-2 mt-[50px] border-secondary w-[200px] h-screen'>
            <ul className='flex flex-col gap-1 px-3 mt-4'>
                {
                    sidebarLinks.map((link, index) => {
                        return <li className={`${index === 0 ? 'bg-white sahdow-lg text-linkColor' : ''} flex items-center gap-3 px-4 rounded-lg py-1 hover:bg-gray-100 hover:text-linkColor cursor-pointer`}><span>{link.icons}</span> {link.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Sidebar
