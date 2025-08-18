import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div>Home</div>
      <button> <Link to="/signin">Sign in</Link></button>
    </>
  )
}

export default Home