import getFirebase from "../firebase/fireabse";
import db from "../firebase/db"

const User = db.collection("User");
const firebase = getFirebase();
async function signIn(email: string, password: string) {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(async (response) => {
      if (response && response.user) {
        return await postUserToken(await response.user.getIdToken());
      }
      return null;
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
interface User {
  email: string;
  contact: string;
  genderLooking: string;
  password: string;
  name:string
}

export async function signUp({ name, email, password, contact, genderLooking }: User) {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(async ({user}) => {
      if(!user) return null;
      const userId = await user.getIdToken()
      await User.doc(userId).set({
        contact,
        genderLooking,
        name
      })
      return await postUserToken(userId);
    }).catch(() => {
      return null;
    });
}
export default signIn;
