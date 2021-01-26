import { NextApiRequest, NextPageContext } from "next";
import {  destroyCookie, parseCookies } from "nookies";
import { useEffect } from "react";
import { VERIFYCOOKIE } from "../../types";

export async function getServerSideProps(
  context:
    | Pick<NextPageContext, "res">
    | { res: NextApiRequest }
    | { res: any }
    | null
    | undefined
) {
  var propsObject: VERIFYCOOKIE= {
    authenticated: true,
    usermail: "",
    uid: null
  };
  destroyCookie(context,"user");
  propsObject.authenticated = false
  return {
    props: propsObject,
  };
}

export default function Logout(props:VERIFYCOOKIE  ) {
    useEffect(() => {
         
    },[])
    return (
        <p>Logging out.....</p>
    )
}