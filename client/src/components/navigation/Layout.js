import React from 'react'
import MainNavigation from "./MainNavigation"

const Layout = (props) => {
  return (
    <div>
        <MainNavigation/>
        <div>
            {props.children}
        </div>    
    </div>
  )
}

export default Layout
