import React from "react"

import firebase from "./firebase"

import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"

class Account extends React.Component {
  constructor(props) {
    super(props)

    this.state = {userId: ''}

    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
    this.onAuthStateChanged = this.onAuthStateChanged.bind(this)

    firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  onAuthStateChanged(user) {
    // We ignore token refresh events.
    if (user && this.state.userId === user.uid) {
      return;
    }

    // cleanupUi();
    if (user) {
      this.setState({userId: user.uid});
      // splashPage.style.display = 'none';
      // writeUserData(user.uid, user.displayName, user.email, user.photoURL);
      // startDatabaseQueries();
    } else {
      // Set this.state.userId to null.
      this.setState({userId: ''});
      // Display the splash page where you can sign-in.
      // splashPage.style.display = '';
    }
  }

  handleLogin(event) {
    event.preventDefault()

    console.log("logging in")
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  handleLogout() {
    event.preventDefault()

    console.log("logging out")
    firebase.auth().signOut();
  }

  render() {
    return (
      this.state.userId === ''
      ? <LoginButton handleLogin={this.handleLogin} />
      : <LogoutButton handleLogout={this.handleLogout} />
    )
  }
}

export default Account
