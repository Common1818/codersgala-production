export const unlockTopic =(topicId)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firestore = getFirestore()
        const state = getState()
        const userId = state.firebase.auth.uid

        console.log(userId)
        firestore.collection("Users").doc(userId).get().then(doc=>{
            console.log(doc.data())
            const userData = doc.data()
            const UnlockedTopicId = userData.UnlockedTopicId 
            let points = userData.points
            points = points -  1;
            UnlockedTopicId.push({id: topicId})
            firestore.collection("Users").doc(userId).update({
                UnlockedTopicId: UnlockedTopicId,
                points: points
            })
        })
    }
}