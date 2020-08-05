import React from "react";
import PageHeader from "../../components/PageHeader";

import "./style.css";
import Input from "../../components/Input";

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
      </main>
    </div>
  );
}
