import "firebase/auth";
import getFirebaseAdmin from "../firebase/admin";
import { VERIFYCOOKIE } from "../types";

async function verifyCookie(cookie: string): Promise<VERIFYCOOKIE | null> {
  const admin = getFirebaseAdmin();

  if (!admin) return null;

  var usermail: string | undefined = "";
  var bAuth: boolean = false;
  var uid: string | null = null;

  await admin
    .auth()
    .verifySessionCookie(cookie, true)
    .then((decodedClaims) => {
      bAuth = true;
      usermail = decodedClaims.email;
      uid = decodedClaims.uid;
    })
    .catch((e) => {
        console.log(e)
      bAuth = false;
    });

  return {
    authenticated: bAuth,
    usermail: usermail,
    uid: uid,
  };
}

export default verifyCookie;
