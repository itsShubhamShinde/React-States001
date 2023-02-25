import './Header.css'
export default function Header({theme,setDarktheme}) {
    const dark={backgroundColor:"#282c35",color:"white"}
    const light={backgroundColor:"white",color:"black "}
    const buttondark={backgroundColor:"#f7a7c1",color:"black"}
    const buttonlight={backgroundColor:"#cf3868",color:"white"}
  return (
    <div className="header" style={theme?dark:light}>
        <div className="headingcontainer">
        <h1>Overreacted</h1>
    <button style={theme?buttondark:buttonlight} onClick={() => {
     setDarktheme(!theme)
  }}>Toggle</button>
        </div>

    </div>
  )
}