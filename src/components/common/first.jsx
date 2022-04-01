import React, { Component } from 'react'
import { motion } from 'framer-motion'
import Card from './Card'

const First = ({exit, initial, animate}) => {
    
    return (
                <motion.div initial={{rotateX: initial}} animate={{rotateX: animate}} exit={{rotateX : exit}} className="section first">
                    <Card Name="AbdAlrahman" Skilles="Front-end developer" />
                </motion.div>
            )
}

export default First
