import './Content.css'

export default function Content(props,) {
     const dark={color:"#f7a7c1"}
    const light={color:"#cf3868"}
  return (
    <div className='content'>
        <h3 style={props.theme ? dark : light}>{props.heading}</h3>
        <i>{props.date}</i>
        <p>{props.para}</p>

    </div>
  )
}