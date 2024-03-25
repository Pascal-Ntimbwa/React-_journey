import React, { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
  // const [data, setData] = React.useState([])

  // useEffect(()=> {
  //   fetch("https://api.github.com/users/pascal-ntimbwa")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data);
  //     setData(data)
  //   })
  // }, [])

  const data = useLoaderData()

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      <div className='mb-3 items-center'>Github Public Repos: {data.public_repos}</div>
      <img src={data.avatar_url} alt="Avatar" className='rounded-3xl'/>
    </div>
    
  )
}

export default Github


export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/pascal-ntimbwa")

  return response.json()
}

