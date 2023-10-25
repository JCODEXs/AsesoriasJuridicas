"use client"
import { useAuth, useUser } from "@clerk/nextjs";
import UserList from "../../../components/contact/contactsList";
import { useEffect, useState } from "react";
// import fetchData from "../../../lib/posts-util";



export default function Admin(users) {
  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const {user}=useUser()
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const userEmail = user?.emailAddresses[0]?.emailAddress;
  const targetEmailAddresses=["juansebastianescobar.vega@gmail.com","dianamarcelamolinamera@gmail.com","asesoriastabares@hotmail.com "]
  let isMatch = false;
  if (userEmail && targetEmailAddresses.includes(userEmail)) {
    isMatch = true;}
 console.log(data)
  useEffect(() => {
    fetch('/api/contact',{ next:{revalidate:300}})
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])

 
  if (isLoading) return <p>Loading...</p>
  if (!data ) return (<div style={{minHeight:"66vh"}}><p>No profile data</p></div>)
 
  // In case the user signs out while on the page.
  if (!isLoaded || !isMatch) {
    return (<div style={{minHeight:"66vh"}}><p>Bienvenido{user.username?user.username:user.id} !Gracias por hacer parte de nuestra comunidad!!  </p></div>)
  }

  
  return (
    <div style={{minHeight:"66vh", marginTop:"1rem"}}>
     <UserList contacts={data}/>
    </div>
  );
}