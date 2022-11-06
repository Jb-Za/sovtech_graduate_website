import Head from "next/head";
import styles from "../styles/Home.module.css";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { Blerb } from "../components/Blerb.js";

const aboutMeImages = [{ url: "unknown2.png" }];

const universityImages = [{ url: "uwcHall.jpg" }, { url: "uwcLab.png" }];

const HonoursProjectImages = [
  { url: "Circuit.png" },
  { url: "teleportation.png" },
];

const SovTechImages = [{ url: "sovtech2.png" }];

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Joshua Bode | Computer Science Graduate</title>
        <meta
          name="description"
          content="I am a Bsc Computer Science Honours Graduate, looking to enter the software development field."
        />
        <meta
          name="og:title"
          content="Joshua Bode | Computer Science graduate"
        />
        <meta
          name="og:description"
          content="I am a Bsc Computer Science Honours Graduate, looking to enter the software development field."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Joshua Bode</h1>
        <h2>Computer Science Graduate</h2>
        <hr></hr>

        <Blerb
          title={<>About Me</>}
          images={aboutMeImages}
          reverse={true}
          body={
            <>
              My name is Joshua Bode, I am 25 years old and I enjoy coding. My
              main coding skills are in Python, Java, and Lua, and I have some
              experience in frontent with Javascript, XML, and Flutter/Dart
              apps.
              <br />
              <br />
              I'm currently completing my Honours degree in Computer Science and
              am looking to enter the software development field, preferably at
              a company that will guide me toward working on and contributing
              toward fun and exciting projects.
            </>
          }
        />
        <Blerb
          title={
            <>
              My Studies
              <br />
              University of the Westen Cape
            </>
          }
          images={universityImages}
          reverse={false}
          body={
            <>
              Bachelor of Science: Computer Science
              <br />
              January 2017 - November 2021
              <br />
              <br />
              Bachelor of Science (Honours): Computer Science
              <br />
              January 2022 - November 2022
              <br />
              <br />
              To the left you'll see a picture one of the computer labs that I
              made my home daily while working on projects and supervising the
              lab, making sure that everything was working smoothly.
            </>
          }
        />
        <Blerb
          title={
            <>
              My Honours Project
              <br />
              Quantum Teleportation Protocol
            </>
          }
          images={HonoursProjectImages}
          reverse={true}
          body={
            <>
              The project required me to transfer images and text between
              entangled particles, using IBM's quantum cloud devices. It was
              created using Python 3 and IBM's Qiskit The projects demo and full
              documentation can be found{" "}
              <a
                href="https://sites.google.com/myuwc.ac.za/quantum-teleportation-protocol/term-4-project-testing"
                style={{ color: "#e04e2a" }}
              >
                here
              </a>
              .
            </>
          }
        />
        <Blerb
          title={<>Why I want to be a developer at Sovtech</>}
          images={SovTechImages}
          reverse={false}
          body={
            <>
              I believe that the graduate programme would be perfectly suited
              towards me, as it would allow me to enter the software development
              field, while engaging with experienced professionals within the
              field. I believe that the mentorship aspect would allow me to grow
              and hone my skills while being challenged daily with new ideas and
              concepts that will expand my knowledge base and help me to become
              a great developer.
            </>
          }
        />
      </main>
      <hr />
      <footer className={styles.footer}>
        <div className={styles.links}>
          <a target="_blank" rel="noreferrer" href="https://github.com/jb-za">
            <FaGithubSquare />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/joshua-bode-b92348107/"
          >
            <FaLinkedin />
          </a>
        </div>
      </footer>
    </div>
  );
}
