import React from 'react'
import GetProductList from '../NetwokingCallAPI/GetProductList'

const MainSection4 = () => {
  return (
    <div>
      <h2 className="section_title" style={{ textAlign: "center" }}>
       Product List
      </h2>
      <GetProductList />
    </div>
  )
}

export default MainSection4