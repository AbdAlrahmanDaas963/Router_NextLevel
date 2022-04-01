import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimateSharedLayout } from 'framer-motion'

export class Nav extends Component {
    state = {
        items: [
            {id: 1, color: "rgb(19, 120, 160)", title: "AbdAlrahman", link: "/"},
            {id: 2, color: "rgb(169, 172, 37)", title: "Eile", link: "/secound"},
            {id: 3, color: "rgb(17, 17, 17)", title: "Sipua", link: "/third"}
        ],
        selectedId: 1
    }
    handleClick = (selectedId) => {
        this.setState({selectedId})
        console.log("click")
    }
    render() {
        const { items, selectedId } = this.state;

        return (
            <ul className="ul">
                <AnimateSharedLayout>
                    {items.map(item => (
                        <li key={item.id} animate={{ color: item.color }}>
                            <Link to={item.link} onClick={()=>this.handleClick(item.id)} animate={{ color: item.color }} >{item.title}</Link>
                            {item.id === selectedId && (
                                <motion.div
                                    layoutId="underline"
                                    className="underline"
                                    animate={{ backgroundColor: item.color }}
                                />
                            )}
                        </li>  
                    ))}
                </AnimateSharedLayout>
                
            </ul>
        )
    }
}

export default Nav

// 
{/* <li>
                    <Link to="/">AbdAlrahman</Link>
                    <div className="under-line"></div>
                </li>
                <li>
                    <Link to="/secound">Eile</Link>
                    <div className="under-line"></div>
                </li>
                <li>
                    <Link to="/third">Sipua</Link>
                    <div className="under-line"></div>
                </li> */}