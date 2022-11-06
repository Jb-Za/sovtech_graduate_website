import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ImageSlider from "./ImageSlider";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import classNames from "classnames";

const aboutMeImages = [{ url: "unknown2.png" }];

const universityImages = [{ url: "uwcHall.jpg" }, { url: "uwcLab.png" }];

const HonoursProjectImages = [
  { url: "circuit.png" },
  { url: "teleportation.png" },
];

const SovTechImages = [{ url: "sovtech2.png" }];

function Blerb({ title, items, images, reverse }) {
  return (
    <div
      className={classNames(
        styles.blerbHolder,
        reverse ? styles.rowReverse : styles.row
      )}
    >
      <ImageSlider slides={images} />

      <div className={styles.textBox}>
        <p className={styles.headings}>{title}</p>
        <hr></hr>
        <p className={styles.paragraphs}>{items}</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Joshua Bode</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Joshua Bode</h1>
        <h2>Computer Science Graduate</h2>
        <hr></hr>

        <Blerb
          title={"About Me"}
          images={aboutMeImages}
          reverse={true}
          items={
            <>
              My name is Joshua Bode, I am 25 years old and I enjoy coding. My
              main coding skills are in Python, Java, and Lua, and I've dabbled
              in areas like frontent with Javascript, XML, and Flutter/Dart
              apps. I'm currently completing my Honours degree in Computer
              Science and am looking to enter the software development field,
              preferably at a company that will guide me toward working on and
              contributing toward fun and exciting projects.
            </>
          }
        />
        <Blerb
          title={"My Studies \n University of the Westen Cape"}
          images={universityImages}
          reverse={false}
          items={
            <>
              Bachelor of Science: Computer Science January 2017 - November 2021
              Bachelor of Science (Honours): Computer Science January 2022 -
              November 2022 To the left you'll see a picture one of the computer
              labs that I made my home daily while working on projects and
              supervising the lab, making sure that everything was working
              smoothly.
            </>
          }
        />
        <Blerb
          title={"My Honours Project \n Quantum Teleportation Protocol"}
          images={HonoursProjectImages}
          reverse={true}
          items={
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
          title={"Why I want to be a developer at Sovtech"}
          images={SovTechImages}
          reverse={false}
          items={
            <>
              I believe that the graduate programme would be perfectly suited
              towards me, as it would allow me to enter the software development
              field, while engaging with experienced professionals within the
              field. I believe that the mentorship aspect would allow me to grow
              and hone my skills while being challenged daily with new ideas and
              skills.
            </>
          }
        />
      </main>

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
