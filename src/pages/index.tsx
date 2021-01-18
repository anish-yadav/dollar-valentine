import Hero from "../components/sections/Hero";
import Layout from "../components/layouts/Layout";
import Head from "next/head"

export default function Landing() {
  return (
    <Layout>
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