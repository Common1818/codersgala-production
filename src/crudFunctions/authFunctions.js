const firebase = require("firebase");
var provider = new firebase.auth.GoogleAuthProvider();
require("firebase/functions");

export const signIn = (email, password, dispatch) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      dispatch({
        type: "LOGIN",
        loginCode: 200,
        errorMessage: null,
      });
    })
    .catch((err) => {
      dispatch({
        type: "LOGIN",
        loginCode: 100,
        errorMessage: "Error Logging In",
      });
    });
};

export const getProfile = async (dispatch) => {
  const uid = firebase.auth().currentUser && firebase.auth().currentUser.uid;
  if (uid) {
    var docRef = firebase.firestore().collection("Users").doc(uid);

    docRef
      .get()
      .then(function (doc) {
        dispatch({
          type: "GET_PROFILE",
          profile: doc.data(),
        });
      })
      .catch(function (error) {
        // console.log("Error getting document:", error);
      });
  }
};

export const signUp = async (newUser, dispatch) => {
  const initials = newUser.firstName[0] + newUser.lastName[0];
  const randomNumber = Math.floor(Math.random() * (90 - 65 + 1) + 65);
  const notSoRandom = randomNumber + newUser.lastName.length;
  const referCode =
    initials +
    newUser.age +
    newUser.firstName[1] +
    newUser.firstName.length +
    newUser.lastName[1] +
    notSoRandom +
    String.fromCharCode(randomNumber);

  // Checking and updating score according to the refercode entered by user
  if (newUser.codeReferred != null) {
    const userArraySnapshot = await firebase
      .firestore()
      .collection("Users")
      .get();

    userArraySnapshot.docs.map(async (doc) => {
      const data = doc.data();
      const points = data.points + 2;

      if (data.referCode === newUser.codeReferred) {
        console.log("match");
        await firebase.firestore().collection("Users").doc(doc.id).update({
          points: points,
        });
      }
    });
  }

  firebase
    .auth()
    .createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then((res) => {
      return firebase.firestore().collection("Users").doc(res.user.uid).set({
        UnlockedTopicId: [],
        hasUpdatedProfile: true,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        initials: initials,
        age: newUser.age,
        points: 0,
        referCode: referCode,
      });
    })
    .then(() => {
      var user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: newUser.firstName + " " + newUser.lastName,
      });

      dispatch({
        type: "SIGN_UP",
        loginCode: 200,
        errorMessage: null,
      });
    })
    .catch((err) => {
      dispatch({
        type: "SIGN_UP",
        loginCode: 200,
        errorMessage: err,
      });
    });
};

export const signOut = (dispatch) => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({
        type: "LOGOUT",
        loginCode: 100,
      });
    })
    .catch((err) => {
      dispatch({
        type: "LOGOUT",
        loginError: "Error Logging In",
      });
    });
};

export const LoginWithGoogle = (dispatch) => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      const currentUser = firebase.auth().currentUser;
      console.log(currentUser);

      var docRef = firebase
        .firestore()
        .collection("Users")
        .doc(currentUser.uid);
      console.log(docRef);
      docRef
        .get()
        .then(function (doc) {
          if (doc.exists) {
            console.log("user already exists, Skipping doc creation");
          } else {
            docRef.set({
              hasUpdatedProfile: false,
              UnlockedTopicId: [],
              points: 0,
            });
            console.log("doc created");
          }
        })
        .then(() => {
          dispatch({
            type: "LOGIN_GOOGLE",
            loginCode: 200,
            errorMessage: null,
          });
        })
        .catch(function (error) {
          console.log("Error getting document:", error);
        });
    })
    .catch(function (error) {
      dispatch({
        type: "LOGIN",
        loginCode: 100,
        errorMessage: "Error Logging In",
      });
    });
};

export const updateProfile = (profile, dispatch) => {
  const initials = profile.firstName[0] + profile.lastName[0];
  const randomNumber = Math.floor(Math.random() * (90 - 65 + 1) + 65);
  const notSoRandom = randomNumber + profile.lastName.length;
  const uid = firebase.auth().currentUser && firebase.auth().currentUser.uid;
  const referCode =
    initials +
    profile.age +
    profile.firstName[1] +
    profile.firstName.length +
    profile.lastName[1] +
    notSoRandom +
    String.fromCharCode(randomNumber);
  firebase
    .firestore()
    .collection("Users")
    .doc(uid)
    .update({
      UnlockedTopicId: [],
      hasUpdatedProfile: true,
      firstName: profile.firstName,
      lastName: profile.lastName,
      initials: initials,
      age: profile.age,
      referCode: referCode,
    })
    .then(() => {
      dispatch({
        type: "PROFILE_UPDATE",
        profileUpdateComplete: true,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const addSubscriber = (state) => {
  firebase
    .firestore()
    .collection("Subscribers")
    .add({
      ...state,
    })
    .then(() => {
      console.log("added");
    })
    .catch((err) => {
      console.log(err);
    });
};

// export const LoginWithGoogle = (dispatch) => {
//   firebase
//     .auth()
//     .signInWithPopup(provider)
//     .then(function (result) {
//       const functions = firebase.functions();
//       const sendEmail = functions.httpsCallable("sendEmail");
//       const data = {
//         email: result.user.email,
//         subject: "Hey There !!!",
//         text: "You are now Logged in to Marketing Acad ",
//       };
//       sendEmail(data)
//         .then((res) => {})
//         .catch((err) => {});

//       dispatch({
//         type: "LOGIN",
//         loginCode: 200,
//         errorMessage: null,
//       });
//     })
//     .catch(function (error) {
//       dispatch({
//         type: "LOGIN",
//         loginCode: 100,
//         errorMessage: "Error Logging In",
//       });
//     });
// };
