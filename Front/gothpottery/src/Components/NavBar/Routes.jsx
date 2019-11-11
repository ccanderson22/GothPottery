import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Home/Home'
import Gallery from '../Products/Gallery'
import AboutMe from '../AboutMe/AboutMe'
import Admin from '../Admin/Admin'


export default class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/gallery' component={Gallery}/>
                    <Route exact path='/about' component={AboutMe}/>
                    <Route exact path='/admin' component={Admin}/>
                </Switch>
            </div>
        )
    }
}
