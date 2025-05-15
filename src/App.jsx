import React from 'react'
import Admin from './AdminComponents/Admin.jsx'

import './App.css'
import Hero from './Hero.jsx'
import Wchoose from './Wchoose.jsx'
import StepSection from './StepsSS.jsx'
import Navbar from './Navbar.jsx'
import MainCardHero from './MainCardHero.jsx'
import ContentMainCard from './ContentMainCard.jsx'
import InstaMain from './InstaMain.jsx'
import FacebookMain from './FacebookMain.jsx'
import StatisticMain from './StatisticMain.jsx'
import Dashboard from './AdminComponents/Admin.jsx'
function App() {
 

  return (
    <>
    <Navbar />
    <Hero/>
    <Wchoose />
    <StepSection />
<ContentMainCard />
    <MainCardHero />
<InstaMain />
<FacebookMain />
<StatisticMain />
      <Dashboard />
    </>
  )
}

export default App
