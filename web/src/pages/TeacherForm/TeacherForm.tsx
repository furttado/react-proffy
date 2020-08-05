import React, { useState } from "react";
import PageHeader from "../../components/PageHeader";

import "./style.css";
import warningIcon from "../../assets/images/icons/warning.svg";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Select from "../../components/Select";

export default function TeacherForm() {
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  const addNewScheduleItem = () => {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  };

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
          <Input name="cost" label="Cost per hour" type="number" />
          <TextArea name="bio" label="Bio" />
        </fieldset>

        <fieldset>
          <legend>
            Avaiable times
            <button type="button" onClick={addNewScheduleItem}>
              + New time
            </button>
          </legend>
          {scheduleItems.map((scheduleItem) => (
            <div className="schedule-item" key={scheduleItem.week_day}>
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
              <Input name="from" label="From" type="time" />
              <Input name="to" label="To" type="time" />
            </div>
          ))}
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
