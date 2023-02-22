import React, {useEffect,useState} from 'react'
import axios from 'axios'
import ApiCard from './ApiCard'
import GithubApiCard from './GithubApiCard'


const Api = () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const url2 = "https://api.github.com/users"
    const url3 = "https://api.dailysmarty.com/posts"
    const [allUsers, setallUsers] = useState([])

    useEffect(() => {
        getData()
    
    }, [])
    
    const getData =  () => {
        axios.get(url2).then((response) => {
            console.log(response.data)
            setallUsers(response.data)
        })

    }
  return (
    <>
    {allUsers.length===0 ? 
    <div className="flex items-center justify-center space-x-2">
    <div
      className="inline-block h-52 w-52 my-56 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
      role="status">
      <span
    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
    </div>
  </div>
    :
     allUsers.map((data) => (
        <div key={data.id} className='flex items-center justify-center'> 
        <div className="flex justify-center">
            {/* <h1>{user.login}</h1>
            <img src={user.avatar_url} alt="" /> */}
            {/* <h1>{posts.title}</h1> */}
            {/* <ApiCard name={data}/> */}
            <GithubApiCard name={data}/>
  
</div>
        </div>
    ))}
    </>
  )
}

export default Api