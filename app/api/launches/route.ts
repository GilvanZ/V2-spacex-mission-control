

export async function GET() {
    const res = await fetch("https://api.spacexdata.com/v4/launches")
    const data = await res.json()
    console.log(data)
    return Response.json(data)
    
}