import React from "react";

const Projects = () => {
  return (
    <>
      <section data-aos="fade-up" id="projects" class="mt-5 pt-5">
        <div class="container mt-5 mb-5 pt-3">
          <h1
            style={{color: "#0D6EFD"}}
            class="text-center mt-5 mb-5 pt-5 "
          >
            Projects
          </h1>
          <div class="project">
            <p class="lh-base fs-4" data-aos="fade-up" data-aos-duration="1000">
              In my relatively short career, I've actively contributed to a
              range of projects, emphasizing my expertise in both backend
              development and artificial intelligence (AI). Engaging with
              frameworks like FastAPI and Django, I've crafted robust backend
              solutions, ensuring optimal performance and reliability.
              Simultaneously, I've delved into AI projects, leveraging various
              libraries to implement advanced algorithms and models. Here are
              some of those.
            </p>
            <h3
              style={{color: "#0D6EFD"}}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              1. Digital Twin{" "}
            </h3>
            <p class="lh-base fs-4" data-aos="fade-up" data-aos-duration="1000">
              Led the development of a high-performance FastAPI backend from
              inception, addressing performance challenges experienced with
              Anvil. Integrated Databricks, AWS S3, and AWS EC2 to create a
              robust data processing pipeline using PySpark for efficient
              handling of large datasets. Implemented APIs for training machine
              learning models with PyTorch on Databricks.
            </p>
            <h3 data-aos="fade-up" data-aos-duration="1000">
              <a
                style={{color: "#0D6EFD"}}
                class="text-decoration-none"
                href="https://github.com/riishiiiii/knowyourdata"
              >
                2. Know Your Data
              </a>
            </h3>
            <p class="lh-base fs-4" data-aos="fade-up" data-aos-duration="1000">
              Created a web application using streamlit to get the
              best-performing model on data provided by users. Users can
              visualize data, apply preprocessing on data, and find a perfect
              model for predicting new outputs.
            </p>
            <h3 data-aos="fade-up" data-aos-duration="1000">
              <a
                style={{color: "#0D6EFD"}}
                class="text-decoration-none"
                href="https://github.com/riishiiiii/QNA_langchain"
              >
                3. Q&A Using Langchain and Openai
              </a>
            </h3>
            <p class="lh-base fs-4" data-aos="fade-up" data-aos-duration="1000">
              Developed a compact yet impactful project integrating LangChain,
              OpenAI, and Pinecone to facilitate efficient information retrieval
              from PDF-formatted books. Leveraging the power of LangChain for
              language processing, OpenAI for advanced natural language
              understanding, and Pinecone for robust search capabilities, the
              project enables users to effortlessly extract answers from any
              book in PDF format. This innovative solution streamlines the
              process of accessing relevant information, showcasing the seamless
              integration of cutting-edge technologies to enhance the user
              experience in navigating extensive written content.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};


export default Projects;
