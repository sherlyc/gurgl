import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () =>
(
   <div className="error container">
      <h3>Can't find the page you're looking for<br />We're sorry!</h3>
      <p>
      <Link to="/">Back to home</Link><br />
      <Link to="/clothing">Look through our clothes</Link>
      </p>
   </div>
)

export default NotFound
