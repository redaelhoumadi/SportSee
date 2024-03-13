import '../styles/dashboard.css'
import HeaderUser from './dashboard_header'
import LeftSide from './left_side'
import RightSide from './right_side'

function Dashboard(){
    return(
        <div className="dashboard">
        <HeaderUser />
        <div className='performance'>
        <LeftSide />
        <RightSide />
        </div>
        
        </div>
    )
}

export default Dashboard