import React from 'react'
import TopContent from '../components/general/TopContent'
import Cards from '../components/general/Cards'

const Products = () => {
  return (
    <div className="-mt-[100px]">
{/* <TopContent height={`[500px]`}/> */}
<TopContent height={`[500px]`} mainHeading={"product"} bottomHeading={"programs"} />
<Cards heading={"products"}/>
    </div>
  )
}

export default Products