// import { useState } from "react";
import Container from "../../components/Container";
import styles from "./application.module.scss";
import ApplicationForm from "./Form";
import MarkdownIt from "markdown-it";
import Head from "next/head";

export default function ApplicationPage({ postPage }) {
  const { description, title, experience } = postPage;
  const md = new MarkdownIt();
  const matter = md.render(description);

  return (
    <>
      {postPage ? (
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
          </Container>{" "}
        </>
      ) : (
        <div>Position not found</div>
      )}
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://2qre6ou61c.execute-api.us-east-1.amazonaws.com/dev/user/position"
  );
  const position = await res.json();

  if (position.response.Items) {
    const paths = position.response.Items.map((post) => ({
      params: { id: post.Id },
    }));
    return { paths, fallback: true };
  } else {
    return { paths: [], fallback: true };
  }
}

export async function getStaticProps({ params: { id } }) {
  let response = await fetch(
    `https://2qre6ou61c.execute-api.us-east-1.amazonaws.com/dev/user/position/${id}`
  );
  const data = await response.json();
  console.log(data.response);
  return {
    props: {
      postPage: data.response,
    },
    revalidate: 1,
  };
}
