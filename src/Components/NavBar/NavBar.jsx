import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import PiranhaIcon from './../../food-chain.png'
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
            } else {
                if (isDropdownOpen === true && downCaretRef.current.contains(e.target) ||
                    isDropdownOpen === true && dropdownRef.current.contains(e.target)) {
                    setDropdown(false)
                } else {
                   setDropdown(true) 
                }
            }
        }

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick)
        }
    }, [isDropdownOpen])

    function handleLeagueChange(newLeague) {
        changeLeague(newLeague)
    }

{/* <PiranhaIcon className='piranhaIcon'/> */}

    return (
        <nav className='navBar'>
            <div className='navBarContainer'>
                <div className='siteOverview'>
                    <div className='siteTitleBox'>
                        <h2>Stat Junky</h2>
                        <img src={PiranhaIcon} alt="Fish eating a fish" className='piranhaIcon'/>
                    </div>
                    <div className='infoLinksContainer'>
                        <div>About</div>
                        <div>Data</div>
                        <div>Contact</div>
                    </div>
                </div>

                <div className='leagueLinksContainer'>
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
                            <Link to='/home/nba' onClick={() => {handleLeagueChange('NBA')}}>
                                NBA
                            </Link>
                            <Link to='/home/nfl' onClick={() => {handleLeagueChange('NFL')}}>
                                NFL
                            </Link>
                            <p disabled={true}>NHL</p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

NavBar.propTypes = {
    currentLeague: PropTypes.string,
    changeLeague: PropTypes.func
}