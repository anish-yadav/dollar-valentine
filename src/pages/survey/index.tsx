import { parseCookies } from "nookies";
import { useRouter } from "next/router";

import "firebase/auth";
import verifyCookie from "../../utils/verifyCookie";
import Survey from "../../components/sections/Survey";
import { NextPageContext, NextApiRequest } from "next";
import { VERIFYCOOKIE } from "../../types";
import { useEffect } from "react";
import Loading from "../../components/custom/Loading";

export async function getServerSideProps(
  context:
    | Pick<NextPageContext, "req">
    | { req: NextApiRequest }
    | { req: any }
    | null
    | undefined
) {
  var propsObject: VERIFYCOOKIE = {
    authenticated: false,
    usermail: "",
    uid: null,
  };
  const cookies = parseCookies(context);
  if (cookies.user) {
    const authentication = await verifyCookie(cookies.user);
    propsObject.authenticated = authentication
      ? authentication.authenticated
      : false;
    propsObject.usermail = authentication ? authentication.usermail : "";
  }

  return {
    props: propsObject,
  };
}

export default function SuveryWrapper(props: VERIFYCOOKIE) {
  const router = useRouter();

  useEffect(() => {
    if (!props.authenticated) 
    router.push({
      pathname: "/signin",
      query: { redirect: "/survey" },
    });
  }, [props]);
  return (
    <div>
      {props.authenticated
        ? <Survey />
        : <Loading />}
    </div>
  );
}
