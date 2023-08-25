import "./Crew.css";
import crew1 from "../assets/crew/image-douglas-hurley.webp"
import crew2 from "../assets/crew/image-mark-shuttleworth.webp"
import crew3 from "../assets/crew/image-victor-glover.webp"
import crew4 from "../assets/crew/image-anousheh-ansari.webp"
import { useState } from "react";
import data from '../data.json'

const Crew = ()=>{
    const [crewType,setCrewType] = useState("crew-1")
    const [active,setActive] = useState("")

    const crewSelection= (e)=>{
        if (e.target.classList.contains('crew-1')) {
            setCrewType('crew-1')
            setActive('active')
        }
        if (e.target.classList.contains('crew-2')) {
            setCrewType('crew-2')
            setActive('active')

        }
        if (e.target.classList.contains('crew-3')) {
            setCrewType('crew-3')
            setActive('active')

        }
        if (e.target.classList.contains('crew-4')) {
            setCrewType('crew-4')
            setActive('active')

        }
    }
return(
    
    <>
    <section className="crew">
        <div className="container">
        <h1 className="main-title"><b>02</b> Meet your crew</h1>
        <div className="content">
          <div className="info">
            <div className="box">
              <h2 className="role">
                {crewType==='crew-1'?data.crew[0].role:''}
                {crewType==='crew-2'?data.crew[1].role:''}
                {crewType==='crew-3'?data.crew[2].role:''}
                {crewType==='crew-4'?data.crew[3].role:''}
              </h2>
              <p className="name">
              {crewType==='crew-1'?data.crew[0].name:''}
                {crewType==='crew-2'?data.crew[1].name:''}
                {crewType==='crew-3'?data.crew[2].name:''}
                {crewType==='crew-4'?data.crew[3].name:''}
              </p>
              <p className="bio">
              {crewType==='crew-1'?data.crew[0].bio:''}
                {crewType==='crew-2'?data.crew[1].bio:''}
                {crewType==='crew-3'?data.crew[2].bio:''}
                {crewType==='crew-4'?data.crew[3].bio:''}
              </p>
            </div>
            <div className="dots">
              <div onClick={crewSelection} className={`dot crew-1 ${crewType==='crew-1'?active:''}`   } data-num="1"></div>
              <div onClick={crewSelection} className={`dot crew-2 ${crewType==='crew-2'?active:''}`   }></div>
              <div onClick={crewSelection} className={`dot crew-3 ${crewType==='crew-3'?active:''}`   }></div>
              <div onClick={crewSelection} className={`dot crew-4 ${crewType==='crew-4'?active:''}`   }></div>
            </div>
          </div>
          <img className="image" src={
            crewType==="crew-1"?crew1:(crewType==='crew-2'?crew2:(crewType==='crew-3'?crew3:(crewType==='crew-4'?crew4:'')))
          } alt=""/>
       
        </div>
        </div>
    </section>
    </>
)
}

export default Crew;