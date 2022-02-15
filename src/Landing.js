import corgiSleep from './assets/background-corgi-sleep.jpg'
import {ReactComponent as CorgiSleepSvg} from './assets/background-corgi-sleep.svg'
const Landing = () => {


    const handleOnClick = (e) => {
        e.preventDefault();
        console.log("You have clicked in the specified area")
    }

    return (
        <div>
            {/* <svg height="30" width="100" xmlnsXlink="http://www.w3.org/1999/xlink">
 <a xlinkHref="www.medium.com/p/f254e0f6b71a" target="__blank"><text x="0" y="15" fill="black">My Blog!</text></a>
</svg> */}
            {/* <img className="corgiImg" src={corgiSleep}/> */}
            <div className="svg-container" height="100" width="100" >
                <svg className="svg-content" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1900 1200" preserveAspectRatio="none" >
                   
                    <image href={corgiSleep}/>
                    <g>
  <g>
    {/* <circle class="st0" cx="437.8" cy="489.1" r="237.5"/> */}
    <a xlinkHref="https://en.wikipedia.org/wiki/Bullseye_(target)" >
    {/* <path 
d="M 500 500 Q 450 550 350 550 Q 250 550 200 500 Q 200 450 250 350 C 450 300 450 300 500 300 C 550 300 550 250 600 300 A 50 50 0 1 1 400 500 "/> */}
<path 
d="M 986 180 L 851 214 770 285 L 800 320 857 349 L 1030 351 1056 275 L 1032 205 "/>
    </a>
  </g>

  

  </g>

                   {/* <svg>
                    <defs>
    <clipPath id="corgiImg">
      <polygon 
        points="50,0  61,35 98,35
                68,57 79,91 50,70
                21,91 32,57 2,35 39,35"/>
    </clipPath>
  </defs> */}
                </svg>
            </div>
        <div style={{position: "absolute", top: "0"}}>
            <span style={{fontSize: "4em"}}>Omar Branez</span><br/>
            <span style={{fontSize: "2em"}}>Brooklyn-based Full Stack Developer</span>
        </div>
        </div>
    )
}

export default Landing
