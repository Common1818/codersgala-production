export const Add = (collectionName, state) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection(collectionName)
      .add({
        ...state
      })
      .then(() => {
        console.log("added");
      });
  };
};

export const Update = (collectionName, state) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection(collectionName)
      .doc(state.id)
      .update({
        ...state
      })
      .then(() => {
        console.log("updated");
      });
  };
};

export const Delete = (collectionName, id) => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const state = getState();

    if (collectionName === "Articles") {
      firestore
        .collection(collectionName)
        .doc(id)
        .delete()
        .then(() => {
          console.log("deleted");
        });
    } else if (collectionName === "TopicNames") {
      //getting all the articles
      const snapshot = await firestore.collection("Articles").get();

      snapshot.docs.map(doc => {
        let item = doc.data();
        console.log(item);
        console.log(state);
        if (item.TopicId === id) {
          //deleting all the articles related to that topic id and deleting it.
          firestore
            .collection("Articles")
            .doc(doc.id)
            .delete()
            .then(() => {
              console.log("Related articles deleted")
              
            });
        }
        //deleting that topic card
        firestore
                .collection(collectionName)
                .doc(id)
                .delete()
                .then(() => {
                  console.log("deleted");
                });
      });
    } else if (collectionName === "Specialities") {
      console.log("step 1");
      const ArticlesSnapshot = await firestore.collection("Articles").get();
      console.log(id);

      ArticlesSnapshot.docs.map(doc => {
        let item = doc.data();
        // console.log(item);
        if (item.SpecialityId === id) {
          console.log("step 2");
          firestore
            .collection("Articles")
            .doc(doc.id)
            .delete().then(()=>{
              console.log("articles deleted of this speciality");
            })
      }}) 
       const TopicNamesSnapshot = await firestore
                  .collection("TopicNames")
                  .get();

        TopicNamesSnapshot.docs.map(record => {
          let TopicItem = record.data();
          if (TopicItem.SpecialityId === id) {
            firestore
              .collection("TopicNames")
              .doc(record.id)
              .delete()
              .then(()=>{
                console.log("deleted related topic Names");
              })
          }})   
          firestore
            .collection(collectionName)
            .doc(id)
            .delete()
            .then(() => {
              console.log("deleted");   
            })  
    }
  };
};
