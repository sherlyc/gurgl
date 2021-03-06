import React from 'react'
import moment from 'moment'
import {connect} from 'react-redux'
import Favourites from './subcomponents/Favourites_Account'

const Account = (props) => {
  const {address, createdOn, email, name, phone, username} = props.user

  return (
   <div className="container account">
      <h2>Your account details</h2>

     <div className="row">
       <div className="offset-by-three three columns">
         <h5>Username</h5>
         <p>{username}</p>
       </div>
       <div className="six columns">
         <h5>Name</h5>
         <p>{name}</p>
       </div>
     </div>

     <div className="row">
       <div className="offset-by-three three columns">
         <h5>Join date</h5>
         <p>{moment(`${createdOn} +0000`, 'YYYY-MM-DD kk:mm:ss ZZ').local().format('Do MMM YYYY') }</p>
       </div>
       <div className="six columns">
         <h5>Email</h5>
         <p>{email}</p>
       </div>
     </div>

     <div className="row">
       <div className="offset-by-three three columns">
         <h5>Phone</h5>
         <p>{phone}</p>
       </div>
       <div className="three columns">
         <h5>Address</h5>
         <p>{address}</p>
       </div>
     </div>

     <Favourites />

   </div>
  )
}

const mapStateToProps = (state) => {
  return {user: state.auth.user}
}

export default connect(mapStateToProps)(Account)
