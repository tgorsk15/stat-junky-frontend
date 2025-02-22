import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import '../../App.css'

export const NavBar = ({currentLeague, changeLeague}) => {
    const [isDropdownOpen, setDropdown] = useState(false)

    function handleLeagueClick(e) {
        if (!isDropdownOpen) {
            setDropdown(true)
        } else {
            setDropdown(false)
        }
    }

    return (
        <nav className='navBar'>
            <div className='navBarContainer'>
                <h2>Stat Junky</h2>
                <div className='linksContainer'>
                    <div className='leagueSelection'>
                        <button className='leagueBtn'onClick={handleLeagueClick}>
                            {currentLeague}  
                            <FontAwesomeIcon icon={faAngleDown} className='downCaretIcon'/>
                        </button>
                        
                        <div 
                            className={`leagueDropdown ${isDropdownOpen && ('dropdownVisible')}`}
                        >
                            <p>NBA</p>
                            <p>NFL</p>
                            <p>NHL</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}