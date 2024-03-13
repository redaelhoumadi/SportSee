import '../styles/dashboard.css'
import HeaderUser from './dashboard_header'
import LeftSide from './left_side'

function Dashboard(){
    return(
        <div className="dashboard">
        <HeaderUser />
        <LeftSide />
        </div>
    )
}

export default Dashboard