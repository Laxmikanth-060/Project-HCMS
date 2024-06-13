import React from 'react'

function Footer() {
  return (
    <div className='flex justify-between bg-red-400 px-5 py-3 rounded-sm w-full fixed bottom-0'>
        <div>Developed & maintained by <span className='text-lg text-blue-600 cursor-pointer'>@TeamDev_HCMS</span></div>
        <div>@Copyrights : All Rights reserved for <span className='text-lg text-blue-600 cursor-pointer'>@DevTeam_HCMS</span> since 2024.</div>
    </div>
  )
}

export default Footer