import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigationbar from './Navbar'
import store from '../store/store'
import { Provider } from 'react-redux'

const RootLayout = () => {
  return (<>
    <Provider store={store}>
      <Navigationbar />
      <main><Outlet/></main>
    </Provider>
  </>
  )
}

export default RootLayout
