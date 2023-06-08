import React from 'react'
import { CardData } from '../assets/Data/CardArray'
const Cards = () => {
  return (
    <div className='h-screen'>
<div>
    {
        CardData.map((data,index)=>{
           return <div key={index}>
{data.heading}
            </div>

        })
    }
</div>
    </div>
  )
}

export default Cards