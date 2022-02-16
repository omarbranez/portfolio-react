import corgiSleep from './assets/background-corgi-sleep.jpg'
import { Tooltip, Typography } from '@material-ui/core'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { theme } from './themes/theme'
const Landing = () => {


    return (
        <div>
            <div className="svg-container" height="100" width="100" >
                <svg className="svg-content" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1900 1200" preserveAspectRatio="none" >
                    <image href={corgiSleep} />
                    <g>
                        <g>
                            <MuiThemeProvider theme={theme}>
                            <Tooltip title="Contact Me" arrow placement="top">
                                <a xlinkHref="/contact" >
                                    <path
                                        d="M 986 180 L 851 214 770 285 L 800 320 857 349 L 1030 351 1056 275 L 1032 205 "
                                        shape="poly"
                                        fillOpacity="0" />
                                </a>
                            </Tooltip>
                            </MuiThemeProvider>
                            <Tooltip title="My Languages" arrow placement="bottom">
                                <a xlinkHref="/skills">
                                    <path
                                        d="M 1012 568 L 908 583 786 666 L 757 780 842 816 L 917 793 1025 777 L 1113 668 1083 600" shape="poly" fillOpacity="0" />
                                </a>
                            </Tooltip>
                            <Tooltip title="About Me" arrow placement="top-end">
                                <a xlinkHref="/aboutme" >
                                    <path
                                        d="M 1493 334 L 1341 344 1227 497 L 1219 590 1219 700 L 1244 777 1381 800 L 1444 848 1527 861 L 1577 827 1580 799 L 1677 756 1726 648 L 1726 551 1789 539 L 1836 505 1746 468 L 1678 449 1605 368" shape="poly" fillOpacity="0" />
                                </a>
                            </Tooltip>
                            <Tooltip title="My Current Projects" arrow placement="top">
                                <a xlinkHref="/projects" >
                                    <path
                                        d="M 296 305 L 162 365 79 436 L 101 539 176 578 L 318 570 445 558 L 525 454 460 317" shape="poly" fillOpacity="0" />
                                </a>
                            </Tooltip>
                            <Tooltip title="My Blog" arrow placement="bottom-start" >
                                <a xlinkHref='/blog' >
                                    <path
                                        d="M 433 593 L 235 649 96 690 L 153 810 225 861 L 405 819 522 783 L 576 770 576 663" shape="poly" fillOpacity="0" />
                                </a>
                            </Tooltip>
                        </g>
                    </g>
                </svg>
            </div>
            <div style={{ position: "absolute", top: "0" }}>
                <span style={{ fontSize: "10vh" }}>Omar Branez</span><br />
                <span style={{ fontSize: "5vh" }}>Brooklyn-based Full Stack Engineer</span>
            </div>
        </div>
    )
}

export default Landing
