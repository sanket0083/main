import React from 'react'
import Home from './Home'

const Header = (props) => {
    // console.log(props.EmployeeData);
    return (
        <div>
            <Home value={props.name} />
           <h2>{props.name}
                {props.email}
            {JSON.stringify(props.EmployeeData)}                         
           </h2>
           
            {
                props.EmployeeData.map((i) => {
                    return (
                        <div>
                        </div>


                    )
                })
            }
        </div>
    )
}

export default Header
