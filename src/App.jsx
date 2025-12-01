import React from 'react'
import Header from './Component/Header'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import Add from './Component/Add'
import ViewProduct from './Component/ViewProduct'
import Services from './Component/Services'
import EditProduct from './Component/EditProduct'

function App() {
  return <>
  {/* <Header/> */}
{/* <Add/> */}

<BrowserRouter>
  <Header/>



<Routes>

  <Route path="add-product" element={<Add/>}></Route>
  <Route path='view-product' element={<Services><ViewProduct/></Services>}></Route>
  <Route path='edit/:id' element={<EditProduct/>}></Route>
</Routes>

 
</BrowserRouter>

  </>
}

export default App
