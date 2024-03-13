import '../styles/dashboard.css'
import HeaderUser from './dashboard_header'
import LeftSide from './left_side'

function Dashboard(){
    return(
        <div className="dashboard">
        <HeaderUser />
        <div className='performance'>
        <LeftSide />
        </div>
        
        </div>
    )
}

export default Dashboard