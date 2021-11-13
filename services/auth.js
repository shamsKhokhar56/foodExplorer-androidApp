import React from 'react';
import { Alert } from 'react-native';
import firebase from '../Firebase/fire';

const createUserInDb = (uid, userName, email) => {
    return firebase.firestore().collection('User').doc(uid).set(
        {
            UserID: uid,
            UserName: userName,
            Email: email,
            bmi: ''
        }
    )
}


const signUp = (userName, email, password) => {
    if (!userName || !email || !password) {
        Alert.alert('Error', 'Please enter all fields');
    }
    return (
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(cred => {
                const { uid } = cred.user;

                firebase.auth().currentUser.updateProfile({
                    displayName: userName
                })
                return uid
            })
            .then(uid => createUserInDb(uid, userName, email))
            .catch(err => Alert.alert(err.code, err.message))
    )
}

const signIn = (email, password) => {
    if (!email || !password) {
        Alert.alert('Error', 'Please enter all fields');
    }
    return (
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => { })
            .catch(err => Alert.alert(err.code, err.message))
    )
}



const logout = () => {
    return firebase.auth().signOut();
}
const Auth = {
    signUp,
    signIn,
    logout,
}

export default Auth;