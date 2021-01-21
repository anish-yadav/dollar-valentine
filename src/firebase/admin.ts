import admin, { ServiceAccount } from "firebase-admin"

import serviceAccount from "./serviceAccount.json"

function getFirebaseAdmin() {
    if(!admin.apps.length ) {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount as ServiceAccount),
            databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
        });

    }
    return admin;
}

export default getFirebaseAdmin;