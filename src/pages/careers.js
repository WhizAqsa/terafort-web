import HeroLayout from "../components/HeroLayout/HeroLayout.jsx";
import Head from "next/head.js";
import { careersHero } from "../pagesComponents/careers/helper.js";
import { LifeAtTerafort } from "../pagesComponents/aboutus/components/LifeAtTerafort/index.js";
import { Benefits } from "../pagesComponents/careers/components/Benefits.js";
import { Positions } from "../pagesComponents/careers/components/Positions.js";
import axios from "axios";
import { Users, Globe, Award, TrendingUp } from "lucide-react";
import HeroSection from "@/pagesComponents/careers/components/HeroSection.js";

export default function Careers({ positions = [] }) {
  console.log("open positions", positions);
  console.log("positions length:", positions.length);

  return (
    <>
      <Head>
        <title>Terafort | Careers</title>
      </Head>

      <HeroSection />
      <Benefits />

      <LifeAtTerafort />
      <Positions positions={positions} />
    </>
  );
}

export async function getStaticProps() {
  try {
    console.log("Fetching positions from API...");
    const API_URL = process.env.API_URL || "https://2qre6ou61c.execute-api.us-east-1.amazonaws.com/dev/user/position";
    const response = await axios.get(API_URL, {
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json',
      }
    });
    console.log("API Response:", response.data);
    let positions = [];
    if (response.data?.response?.Items) {
      positions = response.data.response.Items;
    } else if (response.data?.Items) {
      positions = response.data.Items;
    } else if (Array.isArray(response.data)) {
      positions = response.data;
    } else if (response.data?.data) {
      positions = response.data.data;
    }
    console.log("Extracted positions:", positions);
    return {
      props: {
        positions: positions || [],
      },
      revalidate: 300,
    };
  } catch (error) {
    console.error("Failed to fetch positions:", error.message);
    console.error("Error details:", error.code || error.response?.status);
    // Use mock data if API fails
    const mockPositions = [
      { id: 1, title: "Software Engineer", description: "Build cool stuff." },
      { id: 2, title: "Designer", description: "Make things beautiful." },
    ];
    return {
      props: {
        positions: mockPositions,
      },
      revalidate: 60,
    };
  }
}
