import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDNHXAGTSgXPKviXXLX3rLD--MS5KGQDfs",
    authDomain: "sunrise-com.firebaseapp.com",
    projectId: "sunrise-com",
    storageBucket: "sunrise-com.appspot.com",
    messagingSenderId: "580824599310",
    appId: "1:580824599310:web:df8810d230b473f92aa55f"
};



/* const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId,
}; */

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


/// admin@technet.com
// admin@technet.com