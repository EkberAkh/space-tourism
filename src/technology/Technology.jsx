import "./Technology.css"
import React, { useState } from 'react'
import data from '../data.json'

import rocket1 from '../assets/technology/image-launch-vehicle-portrait.jpg'
import rocket2 from '../assets/technology/image-spaceport-portrait.jpg'
import rocket3 from '../assets/technology/image-space-capsule-portrait.jpg'

export const Technology = () => {
    const [rocketType,setRocketType]= useState('num-1')
    const [numSelected,setNumSelected]= useState('num-1')
    const rocketSelection = (e)=>{
        if(e.target.classList.contains('num-1')){
            setRocketType('num-1')
            setNumSelected('num-1')
        }
        if(e.target.classList.contains('num-2')){
            setRocketType('num-2')
            setNumSelected('num-2')

        }
        if(e.target.classList.contains('num-3')){
            setRocketType('num-3')
            setNumSelected('num-3')

        }
    }
  return (
    <section className="technology">
      <div className="container">
        <h1 className="main-title"><b>03</b> Space launch 101</h1>
        <div className="content">
          <div className="enumirate">
            <div onClick={rocketSelection} className={`num num-1 ${numSelected==='num-1'?'active':''}`}>1</div>
            <div onClick={rocketSelection} className={`num num-2 ${numSelected==='num-2'?'active':''}`}>2</div>
            <div onClick={rocketSelection} className={`num num-3 ${numSelected==='num-3'?'active':''}`}>3</div>
          </div>
          <div className="text">
            <h2>The terminology...</h2>
            <p className="name">{rocketType==='num-1'?data.technology[0].name:''}
            {rocketType==='num-2'?data.technology[1].name:''}
            {rocketType==='num-3'?data.technology[2].name:''}
            </p>
            <p className="description">
            {rocketType==='num-1'?data.technology[0].description:''}
            {rocketType==='num-2'?data.technology[1].description:''}
            {rocketType==='num-3'?data.technology[2].description:''}
            </p>
          </div>
          <img src={rocketType==='num-1'?rocket1:(rocketType==='num-2'?rocket2:(rocketType==='num-3'?rocket3:''))} alt="" className="image"/>
          {/* <img src={rocketType==='num-2'?rocket2:null} alt="" className="image d-none"/>
          <img src={rocketType==='num-3'?rocket3:null} alt="" className="image d-none"/> */}
          
        </div>
      </div>
    </section>
  )
}

export default Technology;