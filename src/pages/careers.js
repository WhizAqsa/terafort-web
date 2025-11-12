
import HeroLayout from "../components/HeroLayout/HeroLayout.jsx";
import Head from "next/head.js";
import { careersHero } from "../pagesComponents/careers/helper.js";
import { LifeAtTerafort } from "../pagesComponents/aboutus/components/LifeAtTerafort/index.js";
import { WhyJoin } from "../pagesComponents/careers/components/WhyJoin.js";
import { Benefits } from "../pagesComponents/careers/components/Benefits.js";
import { Positions } from "../pagesComponents/careers/components/Positions.js";
import { Process } from "../pagesComponents/careers/components/Process.js";
import axios from "axios";

export default function Careers({ positions = [] }) {
  // console.log(positions);
  return (
    <>
      <Head>
        <title>Terafort | Careers</title>
      </Head>
      <HeroLayout
        text={careersHero.heroLayout.text}
        linkText={careersHero.heroLayout.linkText}
        linkRef={careersHero.heroLayout.linkRef}
        heading={careersHero.heroLayout.heading}
      />
      <WhyJoin />
      <Benefits />
      <Process />
      <LifeAtTerafort />
      <Positions positions={positions} />
    </>
  );
}

export async function getStaticProps() {
  try {
    const response = await axios.get(
      "https://2qre6ou61c.execute-api.us-east-1.amazonaws.com/dev/user/position",
      {
        timeout: 10000, // 10 second timeout
      }
    );

    console.log(response.data.response.Items);

    return {
      props: {
        positions: response.data.response.Items ? response.data.response.Items : [],
      },
      revalidate: 60, // Revalidate every minute
    };
  } catch (error) {
    console.error("Failed to fetch positions:", error.message);

    // Return empty positions array if API fails
    return {
      props: {
        positions: [],
      },
      revalidate: 60,
    };
  }
}