import {Component} from 'react'
import { connect } from "react-redux";
import './App.css';
import HomePage from './pages/homepage/homepage.component'; 
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component'
import Header from './components/header/header.component'
import {Route, Switch} from 'react-router-dom'

import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {setCurrentUser} from './redux/user/user.actions'


class App extends Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const {onSetCurrentUser} = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot =>{
          onSetCurrentUser({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
              }
            }
          )
        })
      }       
      
      else { // set current user to nul
        onSetCurrentUser(userAuth)
      }
      // console.log(user)
    })

  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signin' component={SignInAndSignUpPage} />
        </Switch>
  
      </div>
    )
  }

  
}

// state is from the top level root reducer, in this case is state.user is from 'user' in root reducer
const mapStateToProps = state => ({ 
  currentUser: state.user.currentUser
})

// dispatch an action
const mapDispatchToProps = dispatch => ({
  onSetCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
