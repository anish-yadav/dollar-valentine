import getFirebase from "../firebase/fireabse";
import db from "../firebase/db";
import { SIGIN_RESPONSE, USER } from "../types";

const User = db.collection("User");
const firebase = getFirebase();
async function signIn(
  email: string,
  password: string
): Promise<SIGIN_RESPONSE> {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(async (response) => {
      if (response && response.user) {
        const data = await postUserToken(await response.user.getIdToken());
        console.log("Logged in ", data);
        const user = await User.doc(response.user.uid).get();
        await response.user.sendEmailVerification();
        return {
          user: user.data() as USER,
        };
      }
      return {
        error: { code: "auth/unknown", message: "Unknown error occured" },
      };
    })
    .catch((error) => {
      return { error };
    });
}

async function postUserToken(token: string) {
  var path = "/api/auth";
  var url = process.env.NEXT_PUBLIC_BASE_API_URL + path;
  var data = { token: token };
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

interface PersonalDetails {
  name:string;
  contact:string;
  genderLooking: string;
  uid:string
}

export async function signUp({
  name,
  contact,
  genderLooking,
  uid
}:PersonalDetails  ): Promise<SIGIN_RESPONSE> {
  console.log("UID IN ",uid,name)
    const res = await User.doc(uid).set({
      name,
      contact,
      genderLooking,
      uid
    })
    console.log("after setting res = ",res);
    return {
      user: {
        name,
        contact,
        genderLooking,
        uid
      }
    }
}

export async function signUpWithEP(
  email: string,
  password: string
): Promise<{ uid?: string; error?: string }> {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(async ({ user }) => {
      if(!user) return { error : "Unknown error" }
      await postUserToken(await user.getIdToken());
      return {
        uid: user.uid,
      };
    })
    .catch((error) => {
      console.log(error.toString())
      return { error };
    });
}
export default signIn;
