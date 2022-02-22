import { useState, useEffect } from 'react'
import CorgiSploot from '../assets/background-corgi-sploot-2.jpg'
import { Grid, Typography } from '@material-ui/core'

const Skills = () => {

    const [showFront, setShowFront] = useState(false)
    const [showBack, setShowBack] = useState(false)

    const FrontEndSkills = ({ showMore }) => {
        return (
            <div>
                <span style={{ fontSize: "6vh", fontWeight: "bold", webkitTextFillColor: "white", textShadow: "-2px -2px 2px #000, 2px -2px 2px #000, 2px -2px 2px #000, 2px  2px   2px #000,2px  2px 2px #000,2px    2px 2px #000,-2px  2px 2px #000,-2px  2px   2px #000" }}>Front End Proficiencies</span>
                <div style={{ display: showMore ? "block" : "none" }}>
                    <span>More Things</span>

                </div>
            </div>
        )
    }

    const BackEndSkills = ({ showMore }) => {
        return (
            <div>

                <span style={{ fontSize: "6vh", fontWeight: "bold", webkitTextFillColor: "white", textShadow: "-2px -2px 2px #000, 2px -2px 2px #000, 2px -2px 2px #000, 2px  2px   2px #000,2px  2px 2px #000,2px    2px 2px #000,-2px  2px 2px #000,-2px  2px   2px #000" }}>Back End Proficiencies</span>
                <div style={{ display: showMore ? "block" : "none" }}>
                    <span>More Things</span>
                </div>
            </div>
        )
    }

    const handleBackClick = () => {
        setShowBack(!showBack)
    }

    const handleFrontClick = () => {
        setShowFront(!showFront)
    }
    return (
        <div style={{ overflow: "hidden" }}>
            <div className="svg-container" height="100" width="100" >
                <svg className="svg-content" height="100vh" width="100vw" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1280 720" preserveAspectRatio="none" >
                    <image href={CorgiSploot} />
                    <rect x="282" y="328" fill="#fff" opacity="0" width="322" height="297" cursor="grab" onClick={handleBackClick} />
                    <rect x="763" y="53" fill="#fff" opacity="0" width="194" height="249" cursor="grab" onClick={handleFrontClick} />
                </svg>
            </div>
            <div style={{ top: "2vh", left: "70vw", position: "absolute", }}>
                <FrontEndSkills showMore={showFront} />
            </div>
            <div style={{ top: "45vh", left: "8vw", position: "absolute", }}>
                <BackEndSkills showMore={showBack} />
            </div>
        </div>
    )
}

export default Skills
