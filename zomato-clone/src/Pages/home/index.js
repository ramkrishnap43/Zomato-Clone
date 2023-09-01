import React, { useState } from 'react'
import Header from '../../Components/Common/Header';
import TabOptions from '../../Components/Common/tabOptions';
import Footer from '../../Components/Common/Footer';
import Delivery from '../../Components/Delivery';
import DiningOut from '../../Components/DiningOut';
import Nightlife from '../../Components/NightLife';

const HomePage = () => {

    const [activeTab, setActiveTab] = useState("Delivery")

  return (
    <div>
        <Header />
        <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
    {getCorrectScreen(activeTab)}
        <Footer />
    </div>
  )
}
const getCorrectScreen =(tab) => {
    switch(tab){
        case "Delivery":
            return <Delivery />
        case "Dining Out":
            return <DiningOut />
        case "Nightlife":
            return <Nightlife />
        default:
            return <Delivery />
    }
}

export default HomePage;