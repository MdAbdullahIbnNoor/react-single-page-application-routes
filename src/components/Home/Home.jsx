import React from 'react'
import { Outlet, useNavigation,useLocation } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Home = () => {
  const navigation = useNavigation();
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Header></Header>
      {
        navigation.state === 'loading' ?
          <p className='text-center text-7xl font-extrabold text-red-600 p-96'>Loading...</p> :
          <Outlet></Outlet>
      }
      <Footer></Footer>
    </div>
  )
}

export default Home