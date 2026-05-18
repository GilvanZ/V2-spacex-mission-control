import { ValueOf } from 'next/dist/shared/lib/constants';
import React from 'react'

interface SearchProps{
  value:string;
  onChange: (value:string)=>void
}

export default function Search({value, onChange}:SearchProps) {
  return (
    <div className=" w-full text-center">
      <input
        placeholder="Search launches..."
        value={value}
        onChange={(e)=> onChange(e.target.value)}
        className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-xl pl-9 pr-4 py-2 text-sm text-white placeholder-white/30 focus:outline-none focus:border-purple-500/50 transition-all duration-300 text-center"
      />
    </div>
  )
}