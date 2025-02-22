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
                if (isDropdownOpen === true && downCaretRef.current.contains(e.target)) {
                    console.log('hitting false')
                    setDropdown(false)
                } else {
                    console.log('hitting true')
                   setDropdown(true) 
                }
                
            }
            
        }

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick)
        }
    }, [isDropdownOpen])

    return (
        <nav className='navBar'>
            <div className='navBarContainer'>
                <h2>Stat Junky</h2>
                <div className='linksContainer'>
                    <div className='leagueSelection'>
                        <button className='leagueBtn' ref={downCaretRef}>
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
                        {/* LEFT OFF HERE:  start stylign drop down and 
                        create animation for it */}
                    </div>
                </div>
            </div>
        </nav>
    )
}