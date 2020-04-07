import React from 'react'
import { fetchUserRequest, fetchUsersSuccess, fetchUsersFailure } from '../Redux-store/actions'
import axios from 'axios'
import store from '../Redux-store/store'
import { connect } from 'react-redux' 
import '../App.css'

function GetUserData(props) {


    const fetchusers = () => {
        console.log('ateast here')
        console.log('getting in')
        store.dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data.map(user => user)
                store.dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                store.dispatch(fetchUsersFailure(error.message))
            })
        store.subscribe(() => console.log(store.getState()))
    }

    return (
        <div className="App-header">
            <button className="button" onClick={fetchusers}>fetch data</button>
            <ul>
                {props.UserName.map(user => <li key={user.id}><strong>Name:</strong> {user.name}, <strong>Email:</strong> {user.email}</li>)}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        UserName: state.users
    }
}

export default connect(mapStateToProps)(GetUserData)

