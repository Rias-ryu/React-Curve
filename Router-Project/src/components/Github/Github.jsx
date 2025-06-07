import React, { useEffect } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {
    
    const data = useLoaderData()
    console.log(data);
    

  return (
   <div className="p-6 max-w-md mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-md space-y-4">
  <h1 className="text-2xl font-bold text-center text-gray-800 dark:text-white">GitHub</h1>
  <div className="text-gray-700 dark:text-gray-300">
    <div className="mb-2">
      <span className="font-semibold">Name:</span> {data.name}
    </div>
    <div className="mb-2">
      <span className="font-semibold">Bio:</span> {data.bio}
    </div>
    <div className="mb-2">
      <span className="font-semibold">Repos:</span> {data.public_repos}
    </div>
    <div className="flex items-center gap-3 mt-4">
      <span className="font-semibold">Avatar:</span>
      <img
        src={data.avatar_url}
        alt="Avatar"
        className="w-16 h-16 rounded-full border-2 border-gray-300 dark:border-gray-600"
      />
    </div>
  </div>
</div>

  )
}

export default Github


export const infoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Rias-ryu')
    return response.json()
}

