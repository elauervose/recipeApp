import React from "react"

function LoginButton (props) {
  return (
    <a onClick={props.handleLogin}>Login</a>
  )
}

export default LoginButton
