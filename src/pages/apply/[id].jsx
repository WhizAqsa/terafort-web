// import { useState } from "react";
import Container from "../../components/Container";
import styles from "./application.module.scss";
import ApplicationForm from "./Form";
import MarkdownIt from "markdown-it";
import Head from "next/head";

export default function ApplicationPage({ postPage }) {
  if (!postPage) {
    return <div>Position not found</div>;
  }
  const { description = "No description available.", title = "No title", experience = "N/A" } = postPage;
  const md = new MarkdownIt();
  const matter = md.render(description);
  return (
    <>
      <Head>
        <title>Terafort | Apply</title>
      </Head>
      <Container>
        <div className={styles.applicationPage}>
          <div className={styles.heading}>
            <h1>{title}</h1>
            <p>{description}</p>
            <p style={{ paddingTop: "12px" }}>
              {"("}
              {experience} {" Years Experience)"}
            </p>
          </div>
          <ApplicationForm data={title} />
        </div>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  try {
    const res = await fetch(
      process.env.API_URL || "https://2qre6ou61c.execute-api.us-east-1.amazonaws.com/dev/user/position"
    );
    const position = await res.json();
    let items = [];
    if (position.response && position.response.Items) {
      items = position.response.Items;
    } else if (position.Items) {
      items = position.Items;
    } else if (Array.isArray(position)) {
      items = position;
    }
    const paths = items.map((post) => ({
      params: { id: post.Id || post.id || String(post.id) },
    }));
    return { paths, fallback: true };
  } catch (error) {
    console.error("Error fetching static paths:", error);
    // Use mock paths if API fails
    const mockPaths = [
      { params: { id: "1" } },
      { params: { id: "2" } },
    ];
    return { paths: mockPaths, fallback: true };
  }
}

export async function getStaticProps({ params: { id } }) {
  try {
    let response = await fetch(
      `${process.env.API_URL || "https://2qre6ou61c.execute-api.us-east-1.amazonaws.com/dev/user/position"}/${id}`
    );
    const data = await response.json();
    let postPage = data.response || data || null;
    // Defensive fallback
    if (!postPage || typeof postPage !== 'object') {
      postPage = {
        title: "Software Engineer",
        description: "Build cool stuff.",
        experience: "2",
      };
    }
    return {
      props: {
        postPage,
      },
      revalidate: 1,
    };
  } catch (error) {
    console.error("Error fetching static props:", error);
    // Use mock data if API fails
    return {
      props: {
        postPage: {
          title: "Software Engineer",
          description: "Build cool stuff.",
          experience: "2",
        },
      },
      revalidate: 1,
    };
  }
}
