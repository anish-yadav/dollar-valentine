import * as firebase from "firebase/app"

import "firebase/auth"

import config from "./config"

function getFirebase():typeof firebase.default {
    if(!firebase.default.apps.length) {
        firebase.default.initializeApp(config);
    }

    firebase.default.auth().setPersistence(firebase.default.auth.Auth.Persistence.NONE);

    return firebase.default;
}

export default getFirebase;