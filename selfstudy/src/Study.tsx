import React, { useEffect, useState } from 'react'

export default function Study() {
const [data,setData] = useState([])

useEffect(()=>{
    const fetchData = async ()=>{
        try {
            const stream = await fetch('https://jsonplaceholder.typicode.com/users');
            const result = await stream.json();
            setData(result)
        } catch(err) {
            console.log('error')
        } finally {
            console.log('finish')
        }
    }
    fetchData();
},[])

  return (
    <div>Study
        <br></br>
        <p>{data.map((user)=> (
            <p key={user.id}>{user.username}</p>
        ))}</p>
    </div>

  )
}
