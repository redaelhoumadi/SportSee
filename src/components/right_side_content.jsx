import '../styles/right_side_content.css'
import energy from '../assets/energy.svg'

function RightSideContent(){

    return(
        <div className="right-side-content">
        <span className="icon-right-side"><img id="" src={energy} alt="icone Calories"></img></span>
        
        <ul className="aside-data">
          <li className="aside-data-title">1930 kCal</li>
          <li className="aside-data-sub-title">Calories</li>
        </ul>
        </div>
    )

}

export default RightSideContent