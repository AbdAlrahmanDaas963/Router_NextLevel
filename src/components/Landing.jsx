import React, { Component } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Switch, useLocation } from 'react-router-dom';

import First from './common/first';
import Secound from './common/secound';
import Third from './common/third';



const Landing = () => {
    const location = useLocation();
    const exit = "180deg"
    const initial = "-180deg"
    const animate = "0deg"
    return (
            <div className="target">
                <div className="target-in">
                <AnimatePresence >
                    <Switch location={location} key={location.key} >
                        <Route hehe="hee" path="/" exact component={()=><First exit={exit} initial={initial} animate={animate} />} />
                        <Route path="/secound" component={()=><Secound exit={exit} initial={initial} animate={animate} />} />
                        <Route path="/third" component={()=><Third exit={exit} initial={initial} animate={animate} />} />
                    </Switch>
                </AnimatePresence>
                </div>
            </div>
        )
}


export default Landing
