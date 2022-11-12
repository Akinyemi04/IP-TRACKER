
import { useEffect, useState } from "react"
import Map from "./Map"
import arrow from './images/icon-arrow.svg'
const Home = () => {
    const[input,setInput]=useState(null)
    const[array,setArray]=useState(null)
    const checkIpAddress =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi
  const checkDomain =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+/
    useEffect(()=>{
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_2qwLTYvhpJp6z9OprdtdzsOI81Sfk&ipAddress=8.8.8.8`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setArray(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])
    function getEnteredData(){
        fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_2qwLTYvhpJp6z9OprdtdzsOI81Sfk&${
            checkIpAddress.test(input)? `ipAddress=${input}`:checkDomain.test(input)? `domain=${input}`:''
        }`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            setArray(data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

  return (
    <>
        { array &&
    <div className="home">
        
        <main >
            <center>
                <h1>IP Address Tracker</h1>
            </center>
            <center>
                <div className="div">
                    <input type="text" placeholder="Search  for any IP address or domain"
                    value={input}
                    onChange={(e)=>{
                        setInput(e.target.value)
                    }}
                     />
                    <span onClick={getEnteredData}><img src={arrow} alt="" /></span>
                </div>
            </center>
            <aside>
                <section>
                    <h6>IP ADDRESS</h6>
                    <span>{array.ip}</span>
                </section>
                <section>
                    <h6>LOCATION</h6>
                    <span>{array.location.city}, {array.location.region}</span>
                </section>
                <section>
                    <h6>TIME-ZONE</h6>
                    <span> UTC {array.location.timezone}</span>
                </section>
                <section className="last">
                    <h6>ISP</h6>
                    <span>{array.isp}</span>
                </section>
            </aside>
        </main>
        <Map data={array}/>
        
    </div>
    }</>
  )
}

export default Home