import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBLxeGMUm74EFtYPk1-5tn73B0PAOfzmXc",
  authDomain: "goal-coach-a1ed4.firebaseapp.com",
  databaseURL: "https://goal-coach-a1ed4.firebaseio.com",
  projectId: "goal-coach-a1ed4",
  storageBucket: "",
  messagingSenderId: "441359118875"
};

const firebaseApp = firebase.initializeApp(config);

export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
export default firebaseApp;
