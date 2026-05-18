

export async function GetLaunches(){
    const res = await fetch('https://api.spacexdata.com/v4/launches')
    const data = await res.json()
    return data
}