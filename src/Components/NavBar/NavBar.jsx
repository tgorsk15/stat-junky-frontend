import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import '../../App.css'

export const NavBar = ({currentLeague}) => {

    return (
        <nav className='navBar'>
            <div className='navBarContainer'>
                <h2>Stat Junky</h2>
                <div className='linksContainer'>
                    <div className='leagueSelection'>
                        <button>
                            {currentLeague}  
                            <FontAwesomeIcon icon={faAngleDown} />
                        </button>
                        
                        <div className='leagueDropdown'>
                            <p>NBA</p>
                            <p>NFL</p>
                            <p>NHL</p>
                        </div>
                        {/* TMW 2/22: 
                        get icon to work, look up a video on how to import a Font awesome 
                        icon properly.  Start creating dropdown menu... menu should appear on
                        CLICK of the caret... think about it before going to Claude */}
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}