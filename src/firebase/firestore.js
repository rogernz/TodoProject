import firebase from '@firebase/app';
import '@firebase/firestore';

const config = {
  apiKey: 'AIzaSyBVctIzfUAsFWGaREyKO34sEsclnRgDMB0',
  authDomain: 'yizhangyichi-dev.firebaseapp.com',
  databaseURL: 'https://yizhangyichi-dev.firebaseio.com',
  projectId: 'yizhangyichi-dev',
  storageBucket: 'yizhangyichi-dev.appspot.com',
  messagingSenderId: '994409866375',
};

const app = firebase.initializeApp(config);
const firestore = firebase.firestore(app);

export default firestore;
