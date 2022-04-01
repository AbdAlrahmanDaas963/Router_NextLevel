import React, { Component } from 'react'
import { motion } from 'framer-motion'
import Card from './Card'


const Third = ({exit, initial, animate}) => {
    return (
        <motion.div initial={{rotateX: initial}} animate={{rotateX: animate}} exit={{rotateX : exit}}  className="section third">
                <Card Name="Sipua" Skilles="UX-UI designer" />
        </motion.div>
        )
}

export default Third
