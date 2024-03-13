import { Fragment } from 'react'
import '../styles/index.css'
import Header from '../components/header'
import SideBar from '../components/sidebar'
import Dashboard from '../components/dashboard'

function Index() {
    return(
        <Fragment>
        <Header />
        <div className='main'>
        <SideBar />
        <Dashboard />
        </div>
        </Fragment>
        
    )
}

export default Index