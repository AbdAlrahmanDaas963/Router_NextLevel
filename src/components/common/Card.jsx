import React from 'react'
import { motion } from 'framer-motion'

function Card({ Name, Skilles }) {
    const NameVari = {
        initial: {
            scale:2
        },
        animate: {
            scale: 1,
            x: "-80px", 
            y: "-90px", 
            transition: {
                delay:.5
            }
        }
    }
    const SkillesVari = {
        initial: {
            scale:2,
            opacity: 0
        },
        animate: {
            scale: 1,
            opacity: 1,
            x: "-80px",  
            transition: {
                delay: 1
            }
        }
    }
    return (
        <motion.div>
            <motion.div variants={NameVari} initial="initial" animate="animate" >
                {Name}
            </motion.div> 
            <motion.div variants={SkillesVari} initial="initial" animate="animate" >
                {Skilles}
            </motion.div>
        </motion.div>
    )
}

export default Card
