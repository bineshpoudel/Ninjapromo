import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Team from '../components/Team'
import MarketingServices from '../components/MarketingServices'
import BrandPromotion from '../components/BrandPromotion'
import CallBook from '../components/CallBook'
import SubscriptionOnBoarding from '../components/SubscriptionOnBoarding'
import Packages from '../components/Packages'
import Benefits from '../components/Benefits'
import MarketingAchievements from '../components/MarketingAchievements'
import Testinomials from '../components/Testinomials'
import SubscriptionTestDetails from '../components/SubscriptionTestDetails'
import DownloadMap from '../components/DownloadMap'
import GlobalOffices from '../components/GlobalOffices'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Benefits />
      <Team />
      <BrandPromotion />
      <MarketingServices />
      <CallBook />
      <SubscriptionOnBoarding />
      <Packages />
      <MarketingAchievements />
      <Testinomials />
      <SubscriptionTestDetails />
      <DownloadMap />
      <GlobalOffices />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
