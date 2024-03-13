import '../styles/left_side.css'
import Activite from "./activite"
import Sessions from "./sessions"
import Intensite from './intensite'

function LeftSide() {
    return (
        <div className="left-side">
        <Activite />
        <div className='performance-details'>
        <Sessions />
        <Intensite />
        </div>
        </div>
        
    )
}

export default LeftSide