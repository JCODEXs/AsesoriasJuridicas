"use client"
import Services from '../../components/homePage/servicesSplited';
import ServiceCarousel from '../../components/heroCarrusel/servicesCarrusel';
import Experience from '../../components/homePage/experience';
import { useState } from 'react';
function EspecialInfo() {
    const [selectedItem,setSelectedItem]=useState(0)
    console.log(selectedItem)
   
  
    return (
<div>
    
    <Experience/>
    <Services setSelectedItem={setSelectedItem}/>
    <ServiceCarousel selectedItem={selectedItem}/>
</div>
)}

export default EspecialInfo