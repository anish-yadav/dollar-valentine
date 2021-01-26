import Hero from "../components/sections/Hero";
import Layout from "../components/layouts/Layout";
import Head from "next/head"
import { VERIFYCOOKIE } from "../types";
import { NextPageContext, NextApiRequest } from "next";
import { parseCookies } from "nookies";
import verifyCookie from "../utils/verifyCookie";


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

export default function Landing({authenticated}:VERIFYCOOKIE) {
  
  return (
    <Layout loggedin={authenticated}>
      <Head>
        <title>Valentine</title>
      </Head>
      <Hero
        title="Love & Valentine!"
        subtitle="This is the subheader section where you describe the basic benefits of your product This is the subheader section where you describe the basic benefits of your pro"
        ctaText="Give Survery"
        ctaLink="/survey"
      />
    </Layout>
  );
}