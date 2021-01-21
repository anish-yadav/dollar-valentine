import { parseCookies } from "nookies";
import { useRouter } from "next/router";

import "firebase/auth";
import verifyCookie from "../../utils/verifyCookie";
import { NextPageContext, NextApiRequest } from "next";
import { VERIFYCOOKIE } from "../../types";
import { useEffect } from "react";

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

export default function Survey(props: VERIFYCOOKIE) {
  const router = useRouter();

  useEffect(() => {
    if (!props.authenticated)
      router.push({
        pathname: "/signin",
        query: { redirect: "/survey" },
      });
  }, []);
  return (
    <div>
      {props.authenticated
        ? "Welcome user " + props.usermail
        : "You are a guest"}
    </div>
  );
}
