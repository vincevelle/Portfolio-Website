import Image from "next/image";
import NavBar from "./components/navbar";

export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <NavBar />

      {/* HERO SECTION */}
      <header className="bg-primary text-white py-5 text-center">
        <div className="container">
          <h1 className="display-4">Hi, I'm Vincent Lavelle</h1>
          <p className="lead mt-3">
            Computer Science Student @ UIUC | Software Developer | Problem Solver
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
                I'm <strong>Vincent Lavelle</strong>, a junior at the University of Illinois Urbana-Champaign 
                studying Computer Science + Chemistry. I’m passionate about building scalable software 
                solutions and working on innovative projects that blend technical expertise and creativity.
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
            <h5>Data Engineer</h5>
            <p className="text-muted">
              <strong>Johnson Research Group, Inc. | Chicago, IL</strong> (September 2024 – Present)
            </p>
            <ul>
              <li>
                Automated the generation of property reports by processing large sets of data using Python and Excel
              </li>
              <li>
                Integrated a JSON-based system for customizable cell mappings between inputs and templates
              </li>
              <li>
                Created a user-friendly interface using PyQt, featuring a search bar, checkboxes, and a settings panel
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
       <section id="skills" className="py-5 bg-light">
         <div className="container">
           <h2 className="mb-4">Skills</h2>
           <div className="row">
             <div className="col-md-6">
               <ul>
                 <li>
                   <strong>Programming Languages:</strong> Python | C++ | C | Java | JavaScript
                 </li>
                 <li>
                   <strong>Tools & Libraries:</strong> Git | Pandas |NumPy |
                    Microsoft Office Suite | Scikit-Learn | PyTorch | TensorFlow
                 </li>
               </ul>
             </div>
             <div className="col-md-6">
               <ul>
                 <li>
                   <strong>Foreign Languages:</strong> Hindi/Urdu (Conversational) | French (Conversational)
                 </li>
                 <li>
                   <strong>Awards/Distinctions:</strong> Illinois State Scholar | 1550 SAT | 
                    AP Scholar
                 </li>
               </ul>
             </div>
           </div>
         </div>
       </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-5">
        <div className="container">
          <h2 className="mb-4">Contact</h2>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:hsule3@illinois.edu">
              hsule3@illinois.edu
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