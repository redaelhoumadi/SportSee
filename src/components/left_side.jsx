import '../styles/left_side.css'
import Activite from "./activite"
import Sessions from "./sessions"
import Intensite from './intensite'
import Score from './score'

function LeftSide() {
    return (
        <div className="left-side">
        <Activite />
        <div className='performance-details'>
        <Sessions />
        <Intensite />
        <Score />
        </div>
        </div>
        
    )
}

export default LeftSide