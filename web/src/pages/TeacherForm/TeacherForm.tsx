import React from "react";
import PageHeader from "../../components/PageHeader";

import "./style.css";

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

          <div className="input-block">
            <label htmlFor="name">Full name</label>
            <input type="text" id="name" />
          </div>

          <div className="input-block">
            <label htmlFor="avatar">Avatar</label>
            <input type="text" id="avatar" />
          </div>

          <div className="input-block">
            <label htmlFor="whatsapp">Whatsapp</label>
            <input type="text" id="whatsapp" />
          </div>
        </fieldset>
      </main>
    </div>
  );
}
