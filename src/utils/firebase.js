import { firebase } from '@firebase/app';
import '@firebase/firestore';
import '@firebase/storage';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBwDcxZhzI-iB_ReoPnr1HDHhtd3WRqHQg',
  authDomain: 'price-check-app-id.firebaseapp.com',
  databaseURL: 'https://price-check-app-id.firebaseio.com',
  projectId: 'price-check-app-id',
  storageBucket: 'price-check-app-id.appspot.com',
  messagingSenderId: '614260692846',
});

const db = firebaseApp.firestore();
export const storage = firebaseApp.storage();

const settings = { timestampsInSnapshots: true };
db.settings(settings);

export default db;
