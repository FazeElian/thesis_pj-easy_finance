import React from 'react'

// Header component
import Header from '../components/Header'

const BuyAndSaveView = () => {
  return (
    <>
      {/* Header */}
      <Header 
        bgColor="bg-blue-low-opacity" 
        btnColor="bg-blue"
        bderColor="bder-blue-3"
      />
      
      <main className="py-content">
        <h1>Buy and Save View</h1>
      </main>
    </>
  )
}

export default BuyAndSaveView