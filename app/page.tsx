'use client'
import Card from "@/components/card/Card";
import InfoCard from "@/components/card/InfoCard";
import Search from "@/components/search/Search";
import {GetLaunches} from "@/lib/GetLaunches"
import { useEffect, useState } from "react";

export default function Home() {
  //cards and information UseState 
  const[launches, setLaunches]=useState([])
  useEffect(()=>{
    GetLaunches().then(data=>setLaunches(data))
  },[])

  const [cardInfo, setCardInfo]=useState(null)

    //Seach useState
  const[search, setSearch] = useState('')
  console.log(search)
  const searchResult = launches.filter(i=>i.name.toLowerCase().includes(search.toLowerCase()));

  return (
      <section className="flex flex-col sm:h-screen gap-1 h-screen overflow-hidden">
        <div className="flex items-center justify-between px-6 h-24 sm:h-32 border-b border-zinc-800/50 backdrop-blur-md bg-black/20">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-black text-xl tracking-tight" style={{ fontFamily: "Syne, sans-serif" }}>
              Z<span className="text-[#7c6fff]">.</span>
            </span>
            <span className="text-white/40 text-sm">SpaceX Launches</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-3">
            <a href="https://github.com/seu-user" target="_blank" className="text-white/40 hover:text-white transition-colors text-sm">GitHub</a>
            <a href="https://linkedin.com/in/seu-user" target="_blank" className="text-white/40 hover:text-white transition-colors text-sm">LinkedIn</a>
            <a href="/portfolio" className="text-xs border border-[#7c6fff]/50 text-[#7c6fff] px-3 py-1 rounded-full hover:bg-[#7c6fff]/10 transition-all">
              Portfólio →
            </a>
          </div>

        </div>
        <div className="flex flex-col sm:flex-row sm:h-full gap-1 overflow-hidden h-screen ">
          {/* Left div*/}
          <div className=" w-full sm:w-32 h-40 sm:h-full flex-col gap-1 p-1 text-center flex-1 border border-white/20 overflow-hidden rounded-2xl bg-[url(/bg/bg.jpg)]">
            <div className="items-center w-full h-8 sm:h-16 border-b-1 border-white/20 rounded-2xl p-3">
                <Search
                  value={search}
                  onChange={setSearch}
                />
            </div>


            {/* div cards left*/}
            {/*Search first, and then all another cards */}
            <div className="overflow-y-auto h-full gap-1 pb-16  border-white/10 rounded-2x">
            {search.length > 1
            ? searchResult.map(i=>
              <div className="p-1">
                  <Card 
                    name={i.name}
                    icon={i.links.patch.small}
                    launchpad={i.launchpad}
                    imgLarge={i.links.patch.large}
                    onClick={() => setCardInfo(i)}
                    date={i.date_utc}
                    success={i.success}
                    flightNumber={i.flight_number}
                    details={i.details}
                    webcast={i.links.webcast}
                    wikipedia={i.links.wikipedia}
                    upcoming={i.upcoming}
                    key={i}
                  />
                </div>
            )
            ://Cards
              // Skeleton Loading first
              launches.length === 0
              ? Array.from({length:10}).map((_,i)=>(
                <div key={i} className="p-1">
                  <div className="border border-white/10 h-16 rounded-2xl flex gap-2 p-2 bg-white/5 animate-pulse">
                    <div className="h-full aspect-square rounded-xl bg-white/10" />
                    <div className="flex flex-col gap-2 justify-center flex-1">
                      <div className="h-3 bg-white/10 rounded-full w-3/4" />
                      <div className="h-2 bg-white/10 rounded-full w-1/2" />
                    </div>
                  </div>
                </div>
              ))
              //Sowing cards
              : launches.map(i => 
                <div className="p-1">
                  <Card 
                    name={i.name}
                    icon={i.links.patch.small}
                    launchpad={i.launchpad}
                    imgLarge={i.links.patch.large}
                    onClick={() => setCardInfo(i)}
                    date={i.date_utc}
                    success={i.success}
                    flightNumber={i.flight_number}
                    details={i.details}
                    webcast={i.links.webcast}
                    wikipedia={i.links.wikipedia}
                    upcoming={i.upcoming}
                    key={i}
                  />
                </div>
              )
            }
            </div>
          </div>

          
          {/*Rigth div */}
          <div className=" flex flex-1 sm:h-full md:flex-1/4 text-center lg:flex-3 relative items-center justify-center rounded-2xl overflow-hidden overflow-y-auto">
          <div className="animate-pulse">
            {cardInfo?null:<InfoCard value="Choose a mission"/>}
            
          </div>
              {
              cardInfo?.links?.patch?.large 
                ? 
                  <img src={cardInfo.links.patch.large} className="absolute inset-0 w-full h-full object-cover"/>
                :<img src='/bg/spacex-logo.png' 
                className="absolute inset-0 w-full h-full object-cover"/> 
                
              }
              <div className="absolute inset-0 bg-black/80 rounded-2xl p-2">
              {/*All cards information*/}
              {cardInfo ?
                <div className="gap-2 p-4 flex flex-col">
                  
                  {/* Nome da missão */}
                  <div className="flex justify-center text-5xl">
                    <InfoCard label="Mission" value={cardInfo.name} />
                  </div>

                  <div className="flex gap-2">
                    <InfoCard label="Date" value={new Date(cardInfo.date_utc).toLocaleDateString('en-GB')} />
                    <InfoCard label="Status" value={cardInfo.success ? "✅ Success" : cardInfo.upcoming ? "⏳ Upcoming" : "❌ Failed"} />
                  </div>

                  <div className="flex gap-2">
                    <InfoCard label="Flight" value={`#${cardInfo.flight_number}`} />
                    <InfoCard label="Launchpad" value={cardInfo.launchpad} />
                  </div>

                  <InfoCard label="Details" value={cardInfo.details ?? "No details available"} />

                  <div className="flex gap-2">
                    {cardInfo.webcast && <InfoCard label="▶ Watch" value={cardInfo.webcast} />}
                    {cardInfo.wikipedia && <InfoCard label="📖 Wikipedia" value={cardInfo.wikipedia} />}
                  </div>

                </div>
                : null
              }
                
              </div>
          </div>
        </div>
      </section>
  );
}
