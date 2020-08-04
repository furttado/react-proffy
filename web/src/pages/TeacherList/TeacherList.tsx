import React from "react";

import "./style.css";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";

export default function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title={"These are the available proffys"}>
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="course">Course</label>
            <input type="text" id="course" />
          </div>
          <div className="input-block">
            <label htmlFor="week-day">Week day</label>
            <input type="text" id="week-day" />
          </div>
          <div className="input-block">
            <label htmlFor="time">Hour</label>
            <input type="text" id="time" />
          </div>
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
