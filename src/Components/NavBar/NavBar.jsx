import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import '../../App.css'

export const NavBar = ({currentLeague, changeLeague}) => {
    const [isDropdownOpen, setDropdown] = useState(false)

    const dropdownRef = useRef(null)
    const downCaretRef = useRef(null)

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!dropdownRef.current.contains(e.target) && 
            !downCaretRef.current.contains(e.target)) {
                setDropdown(false)
                console.log(dropdownRef.current)
            } else {
                setDropdown(true)
            }
            
        }

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick)
        }
    }, [])


    function handleLeagueClick(e) {
        setDropdown(true)
    }

    return (
        <nav className='navBar'>
            <div className='navBarContainer'>
                <h2>Stat Junky</h2>
                <div className='linksContainer'>
                    <div className='leagueSelection'>
                        <button className='leagueBtn'onClick={handleLeagueClick} ref={downCaretRef}>
                            {currentLeague}  
                            <FontAwesomeIcon icon={faAngleDown} className='downCaretIcon'/>
                        </button>
                        
                        <div 
                            ref={dropdownRef}
                            className={`leagueDropdown ${isDropdownOpen && ('dropdownVisible')}`}
                        >
                            {/* in the future, clicking the below will trigger changeLeague... */}
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