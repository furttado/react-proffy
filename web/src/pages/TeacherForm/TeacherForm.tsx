import React from "react";
import PageHeader from "../../components/PageHeader";

import "./style.css";
import Input from "../../components/Input";
import warningIcon from "../../assets/images/icons/warning.svg";
import TextArea from "../../components/TextArea";

export default function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="How amazing you want to teach."
        description="The first step is to fill out this application form."
      />

      <main>
        <fieldset>
          <legend>Your data</legend>
          <Input name="name" label="Full name" type="text" />
          <Input name="avatar" label="Avatar" type="url" />
          <Input name="whatsapp" label="Whatsapp" type="number" />
        </fieldset>

        <fieldset>
          <legend>About class</legend>
          <Input name="course" label="Course" type="text" />
          <Input name="cost" label="Cost per hour" type="number" />
          <TextArea name="bio" label="Bio" />
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Important warning" />
            Warning! <br />
            Fill in all fields
          </p>
          <button>Apply</button>
        </footer>
      </main>
    </div>
  );
}
