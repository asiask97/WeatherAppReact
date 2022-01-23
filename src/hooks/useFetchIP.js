import { useEffect, useState } from "react"

export const useFetchIP = () => {
    
    const [ip, setIP] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch("https://jsonip.com", {
                mode: 'cors'
            })
              const json = await resp.json()
              setIP(json.ip)
        }
        fetchData() 
    },[])

    return ip
}
