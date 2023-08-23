import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Global Research Orchestrator</title>
        <meta property="og:title" content="Global Research Orchestrator" />
      </Helmet>
    </div>
  )
}

export default Home
