import React from 'react'
import ListOfCategories from './components/ListOfCategories'
import {GlobalStyle} from './GlobalStyles'
import ListOfPhotoCards from './components/ListOfPhotoCards'
import Logo from './components/Logo'

const App = () => {
  return(
    <>
      <GlobalStyle/>
      <Logo/>
      <ListOfCategories/>
      <ListOfPhotoCards/>
    </>
  )
}

export default App
