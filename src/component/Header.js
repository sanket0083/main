import React from 'react'
import Home from './Home'

const Header = (props) => {
   
    return (
        <div>
            <Home value={props.EmployeeData} />
        </div>  
    )
}

export default Header
