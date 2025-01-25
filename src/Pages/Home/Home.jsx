import { Outlet } from "react-router-dom"
import { NavBar } from "../../Components/NavBar/NavBar"

export const Home = () => {

    return (
        <div>
            <nav>
                <NavBar />
            </nav>

            <Outlet />
        </div>
    )
}