
import Summary from '../pages/Summary'
import Header from './Header'
import Sidebar from './Sidebar'
const Layout = () => {
    return (
        <div>
            <div>
                <Header />
                <div className='flex ' >
                    <Sidebar />
                    <div className='w-full p-4 ' id="content-wraper">
                        <Summary />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Layout