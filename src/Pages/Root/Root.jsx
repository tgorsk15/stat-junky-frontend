import { Outlet } from 'react-router-dom';
import '../../App.css'


export const Root = () => {

    return (
        <main className='MAINcontainer'>
            <Outlet context={{

            }}/>
        </main>
    )
}