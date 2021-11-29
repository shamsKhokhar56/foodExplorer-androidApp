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

const reauthenticate = (currentPass) => {
    var user = firebase.auth().currentUser;
    var cred = firebase.auth.EmailAuthProvider.credential(
        user.email, currentPass);
    return user.reauthenticateWithCredential(cred);
}


const changePassword = (currentPass, newPass, newPass2) => {
    if (!currentPass || !newPass || !newPass2) {
        Alert.alert("Error", "Please enter all fields to update password")
        return
    }
    if (newPass === newPass2 && newPass != '' && newPass2 != '' && currentPass) {
        reauthenticate(currentPass).then(() => {
            var user = firebase.auth().currentUser;
            user.updatePassword(newPass).then(() => {
                Alert.alert('Password Updated', 'Passowrd has been updated succesfully');
            }).catch((error) => { Alert.alert('Error!', error.message); });
        }).catch((error) => { Alert.alert('Error!', error.message); });
    }
}

const deleteAccount = () => {
    const user = firebase.auth().currentUser
    const uid = firebase.auth().currentUser.uid
    try {
        firebase.firestore().collection('User').doc(uid).delete()
            .then(() => {
                user.delete()
                Alert.alert('Account Deleted', 'User account has been deleted')
                logout()
            })
    } catch (error) {
        (error) => { Alert.alert('Error!', error.message) }
    }
}



const logout = () => {
    return firebase.auth().signOut();
}
const Auth = {
    signUp,
    signIn,
    logout,
    changePassword,
    deleteAccount
}

export default Auth;