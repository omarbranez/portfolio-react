const Header = () => {
    return (
        <div style={{ position: "absolute", top: "0", zIndex:"2" }}>
            <span style={{ fontSize: "8vh" ,webkitTextFillColor: "white", textShadow: "-2px -2px 2px #000, 2px -2px 2px #000, 2px -2px 2px #000, 2px  2px 2px #000,2px 2px 2px #000,2px 2px 2px #000,-2px  2px 2px #000,-2px 2px 2px #000"}}>Omar Branez</span><br />
            <span style={{ fontSize: "4vh" , webkitTextFillColor: "white", textShadow: "-2px -2px 2px #000, 2px -2px 2px #000, 2px -2px 2px #000, 2px  2px 2px #000,2px 2px 2px #000,2px 2px 2px #000,-2px  2px 2px #000,-2px 2px 2px #000"}}>Brooklyn-based Full Stack Engineer</span>
        </div>
    )
}

export default Header
