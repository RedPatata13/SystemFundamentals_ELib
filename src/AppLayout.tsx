import { Outlet } from 'react-router-dom'
import { Header } from './components/header'
// import { Side } from './components/app-sidebar'
import SidebarMain from './components/func-sidebar'

export default function AppLayout(){
    return (
        <div className='flex h-screen'>
            {/* < SidebarMain children={null}/> */}
            <div className='flex-1 flex flex-col'>
                <Header />
                <main className='p-4 overflow-y-auto'>
                    <Outlet />
                </main>
            </div>

        </div>
    )
}