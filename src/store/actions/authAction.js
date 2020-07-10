const firebase = require("firebase");
var provider = new firebase.auth.GoogleAuthProvider();

export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        console.log("logged in successfully");
      })
      .catch(err => {
        console.log("error logging in ");
      });
  };
};

export const signUp = newUser => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    const initials = newUser.firstName[0] + newUser.lastName[0]
    const referCode = initials + newUser.age +newUser.firstName[1] + newUser.lastName[1]
    // Here, write code to check refer code is unique.

    // Checking and updating score according to the refercode entered by user
    if(newUser.codeReferred != null){
      
      const userArraySnapshot = await firebase
                                      .firestore()
                                      .collection('Users')
                                      .get()
      
      userArraySnapshot.docs.map(async doc=>{
       
        const data = doc.data()
        const points = data.points + 2;
       
        if(data.referCode === newUser.codeReferred){
          
          await firestore.collection("Users").doc(doc.id).update({
            points: points
          })
        }
      })
   
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(res => {
        return firestore
          .collection("Users")
          .doc(res.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: initials,
            age: newUser.age,
            points:0,
            referCode: referCode
          });
      })
      .then(() => {
        dispatch({
          type: "SIGNUP-SUCCESS"
        });
      })
      .catch(err => {
        dispatch({
          type: "SIGNUP_ERROR",
          err
        });
      });
  };
};

export const LoginWithGoogle = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log("login success");
      })
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;

        console.log("login error");
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log("logged out successfully");
      })
      .catch(err => {
        console.log(err, "error logging out ");
      });
  };
};
