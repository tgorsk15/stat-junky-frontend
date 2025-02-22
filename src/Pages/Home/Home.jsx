import { Outlet } from "react-router-dom"
import { NavBar } from "../../Components/NavBar/NavBar"

export const Home = ({currentLeague}) => {

    return (
        <div>
            <nav>
                <NavBar 
                    currentLeague={currentLeague}
                />
            </nav>

            <Outlet />
        </div>
    )
}