"use client"
import { useAuth } from "@clerk/nextjs";
import UserList from "../../../components/contact/contactsList";
import { useEffect, useState } from "react";
// import fetchData from "../../../lib/posts-util";



export default function Admin(users) {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch('/api/contact')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
 
  if (isLoading) return <p>Loading...</p>
  if (!data ) return (<div style={{minHeight:"66vh"}}><p>No profile data</p></div>)
 
  // In case the user signs out while on the page.
  if (!isLoaded || !userId) {
    return null;
  }

  
  return (
    <div style={{minHeight:"66vh", marginTop:"1rem"}}>
     <UserList users={data}/>
    </div>
  );
}