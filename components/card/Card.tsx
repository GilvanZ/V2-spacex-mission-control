import React from 'react'

const img = "https://png.pngtree.com/png-clipart/20250519/original/pngtree-cartoon-rocket-ship-taking-off-against-a-transparent-background-ready-for-png-image_21030409.png"

interface cardProps {
  name?: string
  icon?: string
  launchpad?: string
  imgLarge?: string
  onClick?: () => void
  date?: string
  success?: boolean | null
  flightNumber?: number
  details?: string
  webcast?: string
  wikipedia?: string
  upcoming?: boolean
}

export default function Card({name, icon, launchpad, onClick, date, success, flightNumber, details, webcast, wikipedia, upcoming, imgLarge}: cardProps) {
   
  return (
    <div className='border border-white/20 h-16 rounded-2xl flex flex-row p-1 w-full hover:border-white hover:bg-white/15 transition-all duration-300 bg-white/5 backdrop-blur-md cursor-pointer hover:animate-pulse
    'onClick={onClick}>
      <div className=' gap-1 flex-1 overflow-hidden'>
        {
              icon
                ? <img src={icon} className=" h-full object-cover"/> 
                : <img src='/bg/spacex-logo.png' className=""/>
              }
      </div>
      <div className=' flex-3 flex flex-col'>
        <div className='font-sans text-shadow-black text-shadow-2xs overflow-hidden h-6'>{name}</div>
        <div className= 'text-zinc-600 hover:text-shadow-black hover:text-shadow-2xs hover:text-zinc-400'>{launchpad?.slice(0,9)}...</div>
      </div>
    </div>
  )
}
