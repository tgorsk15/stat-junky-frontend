import nflStyles from './nflPage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons'

export const NflPage = () => {


    return (
        <main className={nflStyles.mainNflContainer}>
            <h1 className={nflStyles.tempHeader}>
                Under Construction... Come Back Later !
            </h1>
            <FontAwesomeIcon icon={faPersonDigging} className={nflStyles.constructionIcon}/>
        </main>
    )
}