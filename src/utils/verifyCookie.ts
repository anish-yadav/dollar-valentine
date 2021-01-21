import "firebase/auth"
import getFirebaseAdmin from "../firebase/admin"
import { VERIFYCOOKIE } from "../types";




async function verifyCookie(cookie:string):Promise<VERIFYCOOKIE | null> {
    const admin = getFirebaseAdmin();

    if(!admin) return null;

    var usermail:string|undefined = "";
    var bAuth:boolean = false;

    await admin.auth().verifySessionCookie(cookie, true)
                .then((decodedClaims) => {
                    bAuth = true;
                    usermail = decodedClaims.email;
                })
                .catch(() => {
                    bAuth = false;
                });

                return {
                    authenticated : bAuth,
                    usermail: usermail
                }
}

export default verifyCookie;