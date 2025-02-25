import PropTypes from "prop-types"
import { Outlet } from "react-router-dom"
import { NavBar } from "../../Components/NavBar/NavBar"
import { Footer } from "../../Components/Footer/Footer"

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

            <Footer />
        </div>
    )
}

Home.propTypes = {
    currentLeague: PropTypes.string,
    changeLeague: PropTypes.func
}