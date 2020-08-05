import React from "react";

import "./style.css";
import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";

export default function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title={"These are the available proffys"}>
        <form id="search-teachers">
          <Select
            name="course"
            label="Course"
            options={[
              { value: "English", label: "English" },
              { value: "Spanhish", label: "Spanhish" },
              { value: "Portuguese", label: "Portuguese" },
              { value: "Chinese", label: "Chinese" },
              { value: "Greek", label: "Greek" },
              { value: "Old Hebraic", label: "Old Hebraic" },
              { value: "Arts", label: "Arts" },
              { value: "Spanish", label: "Spanish" },
              { value: "German", label: "German" },
              { value: "French", label: "French" },
              { value: "Chemistry", label: "Chemistry" },
              { value: "Physics", label: "Physics" },
            ]}
          />
          <Select
            name="week_day"
            label="Week day"
            options={[
              { value: "0", label: "Sunday" },
              { value: "1", label: "Monday" },
              { value: "2", label: "Tuesday" },
              { value: "3", label: "Wednesday" },
              { value: "4", label: "Thursday" },
              { value: "5", label: "Friday" },
              { value: "6", label: "Saturday" },
            ]}
          />
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
