import React from "react"

function LogoutButton (props) {
  return (
    <a onClick={props.handleLogout}>Logout</a>
  )
}

export default LogoutButton
