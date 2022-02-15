import corgiSleep from './assets/background-corgi-sleep.jpg'
const Landing = () => {


    return (
        <div>
            <div className="svg-container" height="100" width="100" >
                <svg className="svg-content" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1900 1200" preserveAspectRatio="none" >
                   
                    <image href={corgiSleep}/>
                    <g>
  <g>
    <a xlinkHref="/contact" >
    <path 
        d="M 986 180 L 851 214 770 285 L 800 320 857 349 L 1030 351 1056 275 L 1032 205 "/>
    </a>
  </g>

  

  </g>
                </svg>
            </div>
        <div style={{position: "absolute", top: "0"}}>
            <span style={{fontSize: "10vh"}}>Omar Branez</span><br/>
            <span style={{fontSize: "5vh"}}>Brooklyn-based Full Stack Developer</span>
        </div>
        </div>
    )
}

export default Landing
