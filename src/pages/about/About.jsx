import React from 'react'
import AboutHero from '../../components/aboutHero/AboutHero'
import Clients from '../../components/clients/Clients'
import Story from '../../components/story/Story'
import Geography from '../../components/geography/Geography'
import Values from '../../components/values/Values'
import ChooseUs from '../../components/chooseUs/ChooseUs'

const About = () => {
    return (
        <>
            <AboutHero />
            <Clients />
            <Story />
            <Geography />
            <Values />
            <ChooseUs />
        </>
    )
}

export default About