import React from 'react'

// React spinner components
import { Hourglass } from 'react-loader-spinner'

const LoadingView = () => {
  return (
    <main className="content-centered w-100 h-100 flex-column loading">
      <Hourglass
        visible={true}
        height="110"
        width="110"
        ariaLabel="hourglass-loading"
        colors={['#F25260', '#F299A9']}
      />
    </main>
  )
}

export default LoadingView