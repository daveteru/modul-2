import { useEffect, useState } from "react";

export default function Gridbg() {
    const [gridsize,setGridsize] = useState({cols:0 , rows:0})
    const tilesize:number = 50
    const cells = Array.from({length:25})

    useEffect(()=>{
        const updategrid = () => {
            const newCol = Math.ceil(window.innerWidth/tilesize)
            const newRow = Math.ceil(window.innerHeight/tilesize)
            setGridsize({cols:newCol , rows:newRow})
            console.table(gridsize)
        }
        updategrid()
        window.addEventListener("resize",updategrid)
    },[])

  return <div className="bg-[#212121] w-screen h-screen">
        <div className="grid">
            <p className="text-white">test</p>
        </div>
    </div>;
}
