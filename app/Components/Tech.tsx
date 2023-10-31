'use client'
import React from 'react'
import { Tilt } from 'react-tilt'

export default function Tech() {

  const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }
  


  const tech =[
    {id:1,title:"Html"},
    {id:2,title:"Css"},
    {id:3,title:"JavaScript"},
    {id:4,title:"Tailwind Css"},
    {id:5,title:"React"},
    {id:6,title:"React Router"},
    {id:7,title:"Next Js"},
    {id:8,title:"Node Js"},
    {id:9,title:"Express js"},
    {id:10,title:"Mongo Db"},
  ]
  return (
    <section className=' w-[99vw] h-max bg-white overflow-x-hidden overflow-y-scroll flex flex-col items-center '>
      <h2 className=' my-8 text-4xl text-gray-800 font-semibold underline-offset-8 underline'>Tech Stack</h2>
      <div className=' w-[900px] mx-auto grid grid-cols-3 gap-4 mb-8'>
        {tech.map((item)=>(
          <Tilt  options={defaultOptions} >
        <div key={item.id} className=' bg-teal-600 text-white text-xl rounded-lg h-64 w-48 flex flex-col justify-center items-center '>
            {item.title}
        </div>
        </Tilt>
        ))}
        
      </div>
    </section>
  )
}