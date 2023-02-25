import Content from './Content'
import './Theme.css'



export default function Theme({theme}) {
    const dark={backgroundColor:"#282c35",color:"white"}
    const light={backgroundColor:"white",color:"black"}
  return (
    <div className='maincontainer' style={theme ? dark : light}>
        <div className="contentcontainer">
        <Content theme={theme} heading="The WET Codbase" date="Sunday 4th, 2020 11min read" para=" Come waste your time with me"/>
        <Content theme={theme} heading="Goodby, Clean Code" date="Friday 22nd, 2019 5min read" para="Let clean code guide you.Then let it go"/>
        <Content theme={theme} heading="My Decade In Review" date="Saturday 11th, 2018 11min read" para="A personal reflection"/>
        <Content theme={theme} heading="What Are The React Team Principles" date="thursday 4th, 2015 11min read"/>
        </div>
    </div>
   
  )
}