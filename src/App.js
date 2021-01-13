
import './App.css';
import HomePage from './pages/homepage/homepage.component'; 
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup-component'
import Header from './components/header/header.component'
import {Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndSignUpPage} />
      </Switch>

    </div>
  )
}

export default App
