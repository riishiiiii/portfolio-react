import React from "react";
import { ReactComponent as Python } from "../assets/icons/python.svg";
import { ReactComponent as JavaScript } from "../assets/icons/js.svg";
import { ReactComponent as FastApi } from "../assets/icons/fastapi-1.svg";
import { ReactComponent as HTML } from "../assets/icons/html.svg";
import { ReactComponent as CSS } from "../assets/icons/css.svg";
import { ReactComponent as Bash } from "../assets/icons/bash.svg";
import { ReactComponent as Jupyter } from "../assets/icons/jyupyter.svg";
import { ReactComponent as MongoDB } from "../assets/icons/mongodb-icon-2.svg";
import { ReactComponent as PgSql } from "../assets/icons/pgsql.svg";
import { ReactComponent as GIT } from "../assets/icons/git.svg";
import { ReactComponent as TensorFlow } from "../assets/icons/tf.svg";
import { ReactComponent as Pytorch } from "../assets/icons/pytorch.svg";
import { ReactComponent as Django } from "../assets/icons/django.svg";
import { ReactComponent as Vs } from "../assets/icons/vs.svg";

const Skills = () => {
  return (
    <>
      <section
        class="pt-5 mt-5"
        id="skills"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div class="container text-center mx-auto mt-5 pt-5">
          <h1 style={{color: "#0D6EFD"}} id="skills-heading">
            Skills
          </h1>
        </div>

        <div
          class="container mx-auto mt-5 pt-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div class="row ">
            <div class="col-2 text-center">
              <Python class="img-fluid zoomable-image"/>
              <p class="mt-1 overflow-hidden">Python</p>
            </div>
            <div class="col-2 text-center">
              <JavaScript class="img-fluid zoomable-image"/>
              <p class="mt-1 overflow-hidden">JavaScript</p>
            </div>
            <div class="col-2 text-center">
              <FastApi class="img-fluid zoomable-image"/>
              <p class="mt-1 overflow-hidden">FasAPI</p>
            </div>
            <div class="col-2 text-center">
              <HTML class="img-fluid zoomable-image"/>
              <p class="mt-1 overflow-hidden">HTML</p>
            </div>
            <div class="col-2 text-center">
              <CSS class="img-fluid zoomable-image"/>
              <p class="mt-1 overflow-hidden">CSS</p>
            </div>
            <div class="col-2 text-center">
              <Bash class="img-fluid zoomable-image"/>
              <p class="mt-1 overflow-hidden">Bash</p>
            </div>
          </div>
        </div>
        <div class="container mt-5" data-aos="fade-up" data-aos-duration="1000">
          <div class="row">
            <div class="col-2 text-center">
              <Jupyter class="img-fluid zoomable-image"/>
              <p class="mt-1 overflow-hidden">Jupyter</p>
            </div>
            <div class="col-2 text-center">
              <MongoDB/>
              <p class="mt-1 overflow-hidden">MongoDB</p>
            </div>
            <div class="col-2 text-center">
              <PgSql/>
              <p class="mt-1 overflow-hidden">PostgressSQL</p>
            </div>
            <div class="col-2 text-center">
              <GIT class="img-fluid zoomable-image"/>
              <p class="mt-1 overflow-hidden">GIT</p>
            </div>
            <div class="col-2 text-center">
              <TensorFlow class="img-fluid zoomable-image"/>
              <p class="mt-1 overflow-hidden">TensorFlow</p>
            </div>
            <div class="col-2 text-center">
              <Pytorch class="img-fluid zoomable-image"/>
              <p class="mt-1 overflow-hidden">PytTorch</p>
            </div>
          </div>
        </div>
        <div class="container mt-5" data-aos="fade-up" data-aos-duration="1000">
          <div class="row">
            <div class="col-2 text-center">
              <Django class="img-fluid zoomable-image"/>
              <p class="mt-1 overflow-hidden">Django</p>
            </div>
            <div class="col-2 text-center">
              <Vs class="img-fluid zoomable-image"/>
              <p class="mt-1 overflow-hidden">VS Code</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};


export default Skills;