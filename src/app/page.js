"use client";
import { useState, useEffect } from "react";

import Image from "next/image";
import NavBar from "./components/navbar";
import {
  SiPython,
  SiR,
  SiC,
  SiCplusplus,
  SiTensorflow,
  SiPytorch,
  SiNumpy,
  SiScikitlearn,
  SiScipy,
  SiMysql,
  SiJavascript,
  SiGit,
  SiGnubash,
} from "react-icons/si";

import { FaGithub } from "react-icons/fa";

import { FaAtom, FaMicrochip } from "react-icons/fa";
import { PiMathOperationsBold } from "react-icons/pi";

import { FaJava, FaFileExcel } from "react-icons/fa";

export default function Home() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  useEffect(() => {
  if (!selectedCourse) return;

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setSelectedCourse(null);
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [selectedCourse]);
  return (
    <>
      {/* NAVBAR */}
      <NavBar />

      {/* HERO SECTION */}
      <header className="bg-primary text-white py-5 text-center">
        <div className="container">
          <h1 className="display-4">Hi, I'm Vincent Lavelle</h1>
          <p className="lead mt-3">
            UIUC B.S. in Computer Science + Chemistry | Research Aide @ Argonne
          </p>
          <a href="#contact" className="btn btn-light mt-4">
            Contact Me
          </a>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section id="about" className="py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3 text-center mb-3 mb-md-0">
              <Image
                src="/images/profile.jpg"
                alt="Profile Picture"
                width={150}
                height={150}
                className="rounded-circle"
              />
            </div>
            <div className="col-md-9">
              <h2>About Me</h2>
              <p>
                I’m a recent graduate of UIUC, where I studied Computer Science + Chemistry. I’m currently a Research Aide at Argonne National Laboratory, working on machine learning for anticancer drug discovery and precision oncology. Through my research, I’ve gained experience across artificial intelligence, bioinformatics, and high-performance computing, particularly in working with large-scale biological and chemical data. More broadly, I’m interested in AI for Science and the potential for machine learning to help tackle challenging problems across biology, chemistry, and medicine. I’m especially drawn to problems where advances in computation can enable new scientific insights and accelerate discovery.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-5">
        <div className="container">
          <h2 className="mb-4">Experience</h2>

          <div className="mb-4">
            <h5>Research Assistant</h5>
            <p className="text-muted">
              <strong>Argonne National Laboratory | Lemont, IL</strong> (May 2025 – Present)
            </p>
            <ul>
              <li>
                Investigated transfer-learning strategies to adapt drug-response models from large cancer cell-line datasets to scarce patient-derived organoid data
              </li>
              <li>
                Conducted a large-scale study benchmarking diverse machine learning architectures across patient-derived organoid datasets
              </li>
              <li>
                Parallelized deep learning model training across multi-GPU HPC systems and profiled kernel execution to optimize GPU utilization
              </li>
              <li>
                Processed 5.4M+ drug response experiments, 54K+ compounds, and 1K+ multi-omics cancer cell line profiles into an AI-ready dataset
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <h5>Data Engineer</h5>
            <p className="text-muted">
              <strong>Johnson Research Group, Inc. | Chicago, IL</strong> (September 2024 – May 2025)
            </p>
            <ul>
              <li>
                Developed a Python application for automating the generation of tax-increment financing reports
              </li>
              <li>
                Designed a user-friendly interface and a JSON-based configuration system for report customization
              </li>
              <li>
                Collaborated with company leadership to tailor program specifications towards business interests
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-5 bg-light">
        <div className="container">

          <h2 className="mb-3">Projects</h2>

          <p className="text-muted mb-4">
            Here are some of the projects I've worked on, hover over each for a brief description. Follow the GitHub links for the full code and details.
          </p>

          <div className="projects-grid">

            {[
              {
                title: "Large-scale AI-Ready Data for Anticancer Drug Response Prediction",
                image: "/images/uno_result.png",
                github: "https://github.com/vincevelle/CSA-and-PharmacoGx-Integration",
                arxiv: "https://arxiv.org/abs/2608.11444",
                description:
                  "Expanded a drug response prediction benchmark dataset by integrating millions of pharmacogenomic measurements and over 50,000 additional compounds. Trained and evaluated deep learning models on original and expanded datasets, demonstrating improved generalization to drugs unseen during training.",
              },
              {
                title: "ScriptMuse",
                image: "/images/plotpalette.png",
                github: "https://github.com/vincevelle/ScriptMuse",
                description:
                  "Developed ScriptMuse, a full-stack creative writing assistant using React, Python, and FastAPI. Integrated a transformer-based natural language processing model to analyze scripts and visualize their emotional progression through interactive timelines, allowing users to explore emotion scores across individual passages.",
              },
              {
                title: "Heart Disease Classifier",
                image: "/images/baseline_roc_curve.png",
                github: "https://github.com/vincevelle/Heart-Disease-Classifier-Model",
                description:
                  "Developed a machine learning pipeline to predict the presence of heart disease using patient health data, implementing data preprocessing, feature engineering, and hyperparameter optimization with Python, Scikit-learn, and TensorFlow/Keras. For educational purposes only, NOT for medical use.",
              },
            ].map((project) => (
              <div className="project-card" key={project.title}>

                {/* Project Image */}
                <div className="project-image-container">
                  <img
                    src={project.image}
                    alt={`Preview of ${project.title}`}
                    className="project-image"
                  />

                  {/* Description appears on hover */}
                  <div className="project-overlay">
                    <p>{project.description}</p>
                  </div>
                </div>

                {/* Project Information */}
                <div className="project-info">
                  <h5 className="project-title">
                    {project.title}
                  </h5>

                  
                  <div className="project-links">
                    {/* GitHub link */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-github"
                    >
                      <FaGithub size={20} />
                      <span>View on GitHub</span>
                    </a>

                    {/* arXiv link - only appears if the project has a paper */}
                    {project.arxiv && (
                      <a
                        href={project.arxiv}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-github"
                      >
                        <span>View on arXiv ↗</span>
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-5 bg-light">
        <div className="container">

          <h2 className="mb-3">Technical Skills</h2>

          <p className="text-muted mb-4">
            Here are some of the technologies I'm proficient in.
          </p>

          <div className="skills-grid">

            {[
              { name: "Python", Icon: SiPython, color: "#3776AB" },
              { name: "R", Icon: SiR, color: "#276DC3" },
              { name: "C", Icon: SiC, color: "#A8B9CC" },
              { name: "C++", Icon: SiCplusplus, color: "#00599C" },
              { name: "TensorFlow", Icon: SiTensorflow, color: "#FF6F00" },

              { name: "PyTorch", Icon: SiPytorch, color: "#EE4C2C" },
              { name: "NumPy", Icon: SiNumpy, color: "#4DABCF" },
              { name: "Scikit-Learn", Icon: SiScikitlearn, color: "#F7931E" },
              { name: "SciPy", Icon: SiScipy, color: "#8CAAE6" },
              { name: "SQL", Icon: SiMysql, color: "#4479A1" },

              { name: "Java", Icon: FaJava, color: "#ED8B00" },
              { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
              { name: "Excel", Icon: FaFileExcel, color: "#21A366" },
              { name: "Git", Icon: SiGit, color: "#F05032" },
              { name: "Bash", Icon: SiGnubash, color: "#4EAA25" },
            ].map((skill) => (
              <div className="skill-card" key={skill.name}>

                <skill.Icon
                  size={52}
                  color={skill.color}
                  aria-hidden="true"
                />

                <h6 className="mt-3 mb-0 text-white">
                  {skill.name}
                </h6>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* COURSEWORK SECTION */}
      <section id="coursework" className="py-5 bg-light">
        <div className="container">
          <h2 className="mb-3">Coursework</h2>

          <p className="text-muted mb-4">
            Here is some of the coursework I've completed at UIUC. Click on the icons for official course descriptions, taken from the UIUC course explorer:
          </p>

          <div className="coursework-grid">
            {[
              {
                name: "Organic Chemistry",
                code: "CHEM 232",
                Icon: FaAtom,
                color: "#38BDF8",
                description: "Presents structural and mechanistic chemistry with emphasis on applications of this material to closely related areas. For students in agricultural, nutritional and biological sciences, as well as premedical, predental, and preveterinary programs.",
              },
              {
                name: "Quantum Chemistry",
                code: "CHEM 442",
                Icon: FaAtom,
                color: "#38BDF8",
                description: "Lectures and problems focusing on microscopic properties. CHEM 442 and CHEM 444 constitute a year-long study of chemical principles. CHEM 442 focuses on quantum chemistry, atomic and molecular structure, spectroscopy and dynamics. Course Information: 4 undergraduate hours. 4 graduate hours. Credit is not given toward graduation for: Credit is not given for both CHEM 442 and PHYS 485. Prerequisite: CHEM 204 or CHEM 222; MATH 225, MATH 257, or MATH 415, and a minimal knowledge of differential equations, or equivalent; and PHYS 211, PHYS 212, and PHYS 214 or equivalent",
              },
              {
                name: "Statistical Thermodynamics",
                code: "CHEM 444",
                Icon: FaAtom,
                color: "#38BDF8",
                description: "Lecture and problems focusing on microscopic properties. CHEM 442 and CHEM 444 constitute a year-long study of chemical principles. CHEM 444 focuses on thermodynamics, statistical mechanics and kinetics from single molecules to the bulk, in gases and in the condensed phase. 4 undergraduate hours. 4 graduate hours. Credit is not given for CHEM 444 and MSE 401 or PHYS 427. Prerequisite: CHEM 204 or CHEM 222; MATH 225, MATH 257, or MATH 415, and a minimal knowledge of differential equations, or equivalent; and PHYS 211, PHYS 212, and PHYS 214 or equivalent.",
              },
              {
                name: "Data Science for Chemistry & Engineering",
                code: "CHEM 452",
                Icon: FaAtom,
                color: "#38BDF8",
                description: "Introduction to machine learning and deep learning in the context of chemical sciences. Students gain hands-on experience through in-class exercises and homework using real data sets from chemistry, chemical engineering, biomolecular engineering, and material science. Unique processing and featurization techniques relevant to the chemistry sector are taught. Guest lectures by chemical data scientists from industry and academia offer insight into practical applications and potential career paths. The course concludes with a team-based project on cutting-edge machine learning. Same as CHEM 452. 4 undergraduate hours. No graduate credit. Prerequisite: MATH 225, MATH 227, MATH 257, or MATH 415. Restricted to Junior or Senior standing. Knowledge of essential programming constructs (e.g. functions, loops, conditional statements) in the context of a programming language (e.g. C/C++, Fortran, Java) is required. Basic proficiency with the Python programming language is strongly recommended.",
              },
              {
                name: "Differential Equations",
                code: "MATH 285",
                Icon: PiMathOperationsBold,
                color: "#F59E0B",
                description: "Techniques and applications of ordinary differential equations, including Fourier series and boundary value problems, and an introduction to partial differential equations. Intended for engineering majors and others who require a working knowledge of differential equations. Credit is not given for both MATH 285 and any of MATH 284, MATH 286, MATH 441. Prerequisite: MATH 241.",
              },
              {
                name: "Linear Algebra",
                code: "MATH 257",
                Icon: PiMathOperationsBold,
                color: "#F59E0B",
                description: "Introductory course incorporating linear algebra concepts with computational tools, with real world applications to science, engineering and data science. Topics include linear equations, matrix operations, vector spaces, linear transformations, eigenvalues, eigenvectors, inner products and norms, orthogonality, linear regression, equilibrium, linear dynamical systems and the singular value decomposition. Credit is not given for both MATH 257 and any of MATH 125, MATH 225, MATH 227, MATH 415 or ASRM 406. Prerequisite: MATH 220 or MATH 221; CS 101 or equivalent programming experience.",
              },
              {
                name: "Biostatistics",
                code: "STAT 212",
                Icon: PiMathOperationsBold,
                color: "#F59E0B",
                description: "Application of statistical reasoning and statistical methodology to biology. Topics include descriptive statistics, graphical methods, experimental design, probability, statistical inference and regression. In addition, techniques of statistical computing are covered. Credit is not given for both STAT 212 and STAT 200.",
              },
              {
                name: "Algorithms",
                code: "CS 374",
                Icon: FaMicrochip,
                color: "#A78BFA",
                description: "Analysis of algorithms, major paradigms of algorithm design including recursive algorithms, divide-and-conquer algorithms, dynamic programming, greedy algorithms, and graph algorithms. Formal models of computation including finite automata and Turing machines. Limitations of computation arising from fundamental notions of algorithm and from complexity-theoretic constraints. Reductions, undecidability and NP-completeness. Same as ECE 374. Prerequisite: One of CS 173, MATH 213; CS 225.",
              },
              {
                name: "System Programming",
                code: "CS 341",
                Icon: FaMicrochip,
                color: "#A78BFA",
                description: "Basics of system programming, including POSIX processes, process control, inter-process communication, synchronization, signals, simple memory management, file I/O and directories, shell programming, socket network programming, RPC programming in distributed systems, basic security mechanisms, and standard tools for systems programming such as debugging tools. Credit is not given for both CS 341 and either CS 241 or ECE 391. Prerequisite: CS 225 and CS 233.",
              },
              {
                name: "Computer Architecture",
                code: "CS 233",
                Icon: FaMicrochip,
                color: "#A78BFA",
                description: "Fundamentals of computer architecture: digital logic design, working up from the logic gate level to understand the function of a simple computer; machine-level programming to understand implementation of high-level languages; performance models of modern computer architectures to enable performance optimization of software; hardware primitives for parallelism and security. Prerequisite: CS 125 or CS 128; CS 173 or MATH 213; credit or concurrent enrollment in CS 225.",
              },
              {
                name: "Data Structures",
                code: "CS 225",
                Icon: FaMicrochip,
                color: "#A78BFA",
                description: "Data abstractions: elementary data structures (lists, stacks, queues, and trees) and their implementation using an object-oriented programming language. Solutions to a variety of computational problems such as search on graphs and trees. Elementary analysis of algorithms. Credit is not given toward graduation for: CS 277 if credit for CS 225 has been earned. Prerequisite: CS 126 or CS 128 or ECE 220; One of CS 173, CS 413, MATH 213, MATH 314, MATH 347, MATH 412, or MATH 413.",
              },
              {
                name: "Software Design",
                code: "CS 222",
                Icon: FaMicrochip,
                color: "#A78BFA",
                description: "Design and implementation of novel software solutions. Problem identification and definition; idea generation and evaluation; and software implementation, testing, and deployment. Emphasizes software development best practices—including framework selection, code review, documentation, appropriate library usage, project management, continuous integration and testing, and teamwork. Prerequisite: CS 128; credit or concurrent registration in CS 225. Restricted to majors in Computer Science undergraduate curricula only.",
              },
            ].map((course) => (
              <button
                type="button"
                className="coursework-card"
                key={course.code}
                onClick={() => setSelectedCourse({
                  name: course.name,
                  code: course.code,
                  description: course.description,
                })}
                aria-label={`View description for ${course.name}`}
              >
                <course.Icon
                  size={44}
                  color={course.color}
                  aria-hidden="true"
                />

                <h6 className="coursework-name">
                  {course.name}
                </h6>

                <p className="coursework-code">
                  {course.code}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* COURSE DESCRIPTION POPUP */}
      {selectedCourse && (
        <div
          className="course-modal-overlay"
          onClick={() => setSelectedCourse(null)}
        >
          <div
            className="course-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="course-modal-title"
            aria-describedby="course-modal-description"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="course-modal-close"
              onClick={() => setSelectedCourse(null)}
              aria-label="Close course description"
            >
              &times;
            </button>

            <h3 id="course-modal-title">
              {selectedCourse.name}
            </h3>

            <p className="course-modal-code">
              {selectedCourse.code}
            </p>

            <hr />

            <p id="course-modal-description">
              {selectedCourse.description}
            </p>
          </div>
        </div>
      )}

      

      {/* CONTACT SECTION */}
      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="mb-4">Contact</h2>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:vincevelle1@gmail.com">
              vincevelle1@gmail.com
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/vincent-lavelle/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.linkedin.com/in/vincent-lavelle/
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/vincevelle"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/vincevelle
            </a>
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-dark text-white py-4">
        <div className="container text-center">
          <p className="m-0">&copy; Vincent Lavelle. Designed and built by me. </p>
        </div>
      </footer>
    </>
  );
}


///////

// // app/page.js

// import Image from "next/image";
// import NavBar from "./components/navbar";

// export default function Home() {
//   return (
//     <>
//       {/* NAVBAR */}
//       <NavBar />

//       {/* HERO SECTION */}
//       <header className="bg-primary text-white py-5 text-center">
//         <div className="container">
//           <h1 className="display-4">Hi, I'm Vincent Lavelle</h1>
//           <p className="lead mt-3">
//             Computer Science Student @ UIUC | Software Developer | Problem Solver
//           </p>
//           <a href="#contact" className="btn btn-light mt-4">
//             Contact Me
//           </a>
//         </div>
//       </header>

//       {/* ABOUT SECTION */}
//       <section id="about" className="py-5">
//         <div className="container">
//           <div className="row align-items-center">
//             <div className="col-md-3 text-center mb-3 mb-md-0">
//               <Image
//                 src="/images/profile.jpg"
//                 alt="Profile Picture"
//                 width={150}
//                 height={150}
//                 className="rounded-circle"
//               />
//             </div>
//             <div className="col-md-9">
//               <h2>About Me</h2>
//               <p>
//                 I'm <strong>Vincent Lavelle</strong>, a junior at the University of Illinois Urbana-Champaign 
//                 studying Computer Science + Chemistry. I’m passionate about building scalable software 
//                 solutions and working on innovative projects that blend technical expertise and creativity.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* PROJECTS SECTION */}
//       <section id="projects" className="py-5 bg-light">
//         <div className="container">
//           <h2 className="mb-4">Projects</h2>
//           <div className="row">
//             {/* Example Project */}
//             <div className="col-md-6 col-lg-4 mb-4">
//               <div className="card h-100">
//                 <div className="card-body">
//                   <h5 className="card-title">Report Generator</h5>
//                   <p className="card-text">
//                     Report generating desktop application that reads in an Excel file using Pandas and then writes to a template file based off user configurations.
//                   </p>
//                   <p><strong>Tech Stack:</strong> Python, Pandas, OpenPyxl, PyQt</p>
//                 </div>
//                 <div className="card-footer">
//                   {/* <a
//                     href="#contact"
//                     // target="_blank"
//                     // rel="noopener noreferrer"
//                     className="btn btn-primary"
//                   >
//                     Code Available Upon Request
//                   </a> */}
//                 </div>
//               </div>
//             </div>

//             {/* Add more project cards as needed */}
//           </div>
//         </div>
//       </section>

//       {/* EXPERIENCE SECTION */}
//       <section id="experience" className="py-5">
//         <div className="container">
//           <h2 className="mb-4">Experience</h2>

//           <div className="mb-4">
//             <h5>Software Engineer</h5>
//             <p className="text-muted">
//               <strong>Johnson Research Group, Inc. | Chicago, IL</strong> (September 2024 – Present)
//             </p>
//             <ul>
//               <li>
//                 Modernized software architecture with full-stack development, 
//                 enhancing scalability and performance.
//               </li>
//               <li>
//                 Collaborated in a cross-functional team to design and implement 
//                 features, streamlining user workflows.
//               </li>
//             </ul>
//           </div>

//           {/* <div className="mb-4">
//             <h5>Sales Intern</h5>
//             <p className="text-muted">
//               <strong>Collegiate Consulting, LLC | Remote</strong> (May 2023 – December 2023)
//             </p>
//             <ul>
//               <li>Provided college application advisory services to six clients.</li>
//               <li>Conducted outreach and aided in processing ~60 sales leads.</li>
//             </ul>
//           </div> */}
//         </div>
//       </section>

//       {/* SKILLS SECTION */}
//       <section id="skills" className="py-5 bg-light">
//         <div className="container">
//           <h2 className="mb-4">Skills</h2>
//           <div className="row">
//             <div className="col-md-6">
//               <ul>
//                 <li>
//                   <strong>Programming Languages:</strong> Python | C++ | C | Java | JavaScript | HTML | CSS
//                 </li>
//                 <li>
//                   <strong>Tools & Libraries:</strong> Git | Pandas | OpenPyxl |
//                    Microsoft Office Suite | Tableau | React
//                 </li>
//               </ul>
//             </div>
//             <div className="col-md-6">
//               <ul>
//                 <li>
//                   <strong>Foreign Languages:</strong> Hindi/Urdu (Proficient) | French (Intermediate)
//                 </li>
//                 <li>
//                   <strong>Awards/Distinctions:</strong> Illinois State Scholar | 1550 SAT | 
//                    AP Scholar
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CONTACT SECTION */}
//       <section id="contact" className="py-5">
//         <div className="container">
//           <h2 className="mb-4">Contact</h2>
//           <p>
//             <strong>Email:</strong>{" "}
//             <a href="hsule3@illinois.edu">
//               hsule3@illinois.edu
//             </a>
//           </p>
//           <p>
//             <strong>LinkedIn:</strong>{" "}
//             <a
//               href="https://www.linkedin.com/in/vincent-lavelle/"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               https://www.linkedin.com/in/vincent-lavelle/
//             </a>
//           </p>
//           <p>
//             <strong>GitHub:</strong>{" "}
//             <a
//               href="https://github.com/vincevelle"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               https://github.com/vincevelle
//             </a>
//           </p>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="bg-dark text-white py-4">
//         <div className="container text-center">
//           <p className="m-0">&copy; Vincent Lavelle. Designed and built by me. </p>
//         </div>
//       </footer>
//     </>
//   );
// }
