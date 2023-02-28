import React from 'react'
import MainNavigation from "./MainNavigation"

const Layout = (props) => {
  return (
    <div>
        <MainNavigation/>
        <div style={{background: "url('../../public/images/iplTeams.jpeg')"}}>
            {props.children}
        </div>    
    </div>
  )
}

export default Layout
