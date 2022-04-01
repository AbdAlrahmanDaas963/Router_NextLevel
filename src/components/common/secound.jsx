import React, { Component } from 'react'
import { motion } from 'framer-motion'
import Card from './Card'

const Secound = ({exit, initial, animate}) => {
    return (
        <motion.div initial={{rotateX: initial}} animate={{rotateX: animate}} exit={{rotateX : exit}} className="section secound">
            <Card Name="Eile" Skilles="Full-stack developer" />
        </motion.div>
        )
}

export default Secound