import PropTypes from "prop-types"
import { Outlet } from "react-router-dom"
import { NavBar } from "../../Components/NavBar/NavBar"

export const Home = ({currentLeague, changeLeague}) => {

    return (
        <div>
            <nav>
                <NavBar 
                    currentLeague={currentLeague}
                    changeLeague={changeLeague}
                />
            </nav>

            <Outlet />
        </div>
    )
}

Home.propTypes = {
    currentLeague: PropTypes.string,
    changeLeague: PropTypes.func
}