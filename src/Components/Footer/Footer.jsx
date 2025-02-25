import '../../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

export const Footer = () => {

    return (
        <div className="footerContainer">
            
            <div className='copyrightContainer'>
                <FontAwesomeIcon icon={faCopyright} />
                <h3>Built in 2025</h3>
            </div>
            <div className='siteInfoContainer'>
                <h2 className='contactHeader'>
                    Get in Touch! :
                </h2>
                <h4 className='emailContact'>
                    tgbusiness463@gmail.com
                </h4>
                
            </div>

        </div>
    )
}