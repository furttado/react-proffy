import React from "react";

import "./style.css";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";

export default function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title={"These are the available proffys"}>
        <form id="search-teachers">
          <Input name="course" label="Course" />
          <Input name="week_day" label="Week day" />
          <Input type="time" name="time" label="Time" />
        </form>
      </PageHeader>
      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}
