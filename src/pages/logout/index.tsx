import { NextApiRequest, NextPageContext } from "next";
import { useRouter } from "next/router";
import { destroyCookie } from "nookies";
import { useEffect } from "react";
import Loading from "../../components/custom/Loading";
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

export default function Logout() {
  const router = useRouter();
    useEffect(() => {
      router.push({
        pathname: "/"
      })
    },[])
    return (
       <Loading /> 
    )
}