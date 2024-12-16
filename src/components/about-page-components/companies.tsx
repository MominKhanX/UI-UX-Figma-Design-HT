import Image from 'next/image'
import React from 'react'

const Companies = () => {
  return (
    <div className='bg-[#FAFAFA] mt-10 py-11'>

      <div className="flex flex-col justify-center items-center">
        
        <h2 className="text-[40px] font-bold leading-[50px] text-[#252B42]">Big Companies Are Here</h2>

        <p className="text-[#737373] font-medium text-[14px] text-center leading-[20px] mt-3">Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics </p>

      </div>

      <div className='mt-12 flex justify-center items-center'>
        <Image src={"/companies.png"} alt='companies' width={1054} height={175} />
      </div>

    </div>
  )
}

export default Companies