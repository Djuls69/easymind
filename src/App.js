import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Register from './Pages/register/Register'
import Login from './Pages/login/Login'
import Home from './Pages/home/Home'
import Footer from './components/footer/Footer'
import CreateContact from './Pages/create-contact/CreateContact'
import UpdateContact from './Pages/update-contact/UpdateContact'
import CreateMail from './Pages/create-mail/CreateMail'

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/create-contact' component={CreateContact} />
        <Route exact path='/update-contact/:id' component={UpdateContact} />
        <Route exact path='/create-mail' component={CreateMail} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
