const STATE = {
    ENTERING: 'entering',
    ENTERED: 'entered', 
    EXITING: 'exiting',
    EXITED: 'exited'
}

function useTransitionState(duration = 1000 ) {
    const [state, setState] = useState()
    useEffect(()=>{
        let timerId
        if (state === STATE.ENTERING) {
            timerId = setTimeout(()=> setState(STATE.ENTERED), duration)
        } else if (state===STATE.EXITING) {
            timerId = setTimeout(()=> setState(STATE.EXITED), duration)
        }
        return () => {
            timerId && clearTimeout(timerId)
        }
    })
    return [state, setState]
}
function useTransitionControl(duration) {
    const [state, setState] = useTransitionState(duration)
    const enter = () => {
        if (state !== STATE.EXITING) {
            setState(STATE.ENTERING)
            
        }
    }
    const exit = () => {
        if (state !== STATE.ENTERING) {
            setState(STATE.EXITING)
        }
    }
    return [state, enter, exit]
}
const defaultStyle = {
    transition: 'opacity 500ms ease-in-out',
    opacity: 0
}

const transitionStyles = {
    entering: {opacity: 1},
    entered: {opacity: 1},
    exiting: {opacity: 0},
    exited: {opacity: 0}
}

const Landing = (props) => {


    const [state, enter, exit] = useTransitionControl()
 
    const style= {
        ...defaultStyle,
        ...transitionStyles[state] || {}
    }
     return (
 
       <div style={style}/>)
     }