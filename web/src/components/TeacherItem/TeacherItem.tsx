import React from "react";

import "./style.css";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://soucinemaniaco2.files.wordpress.com/2011/07/rickman-as-jpg.jpg"
          alt="image profile"
        />
        <div>
          <strong>Severus Snape</strong>
          <span>Defense against the Dark Arts</span>
        </div>
      </header>
      <p>
        Severus was made a member of the Slug Club presumably because of his{" "}
        <br />
        talent in Potion-making and Horace Slughorn kept a picture of him as a
        student, <br />
        clutching his copy of Advanced Potion-Making.{" "}
      </p>
      <footer>
        <p>
          Price/hour
          <strong>$200.00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp icon" />
          Get in touch
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
