import TaskList from "../components/TaskList";
import React from "react";
import { render } from "@testing-library/react";

describe("complete Task function", () => {
  test("updates completed tasks and adds isComplete attribute, sets to true", () => {
    const tasks = [
      { id: 123, text: "feed dog" },
      { id: 456, text: "feed bird" },
    ];
    expect(TaskList.completeTask(123)).toEqual({ id: 123, text: "feed dog" });
  });
});

// /**
//    * completeTask function updates completed tasks, adds isComplete to object and changes
//    * to true, adds date to completed object
//    * @param {number} _id takes the id of the task that is completed
//    */
//  const completeTask = (_id) => {
//   let updatedTasks = tasks.map((task) => {
//     if (task.id === _id) {
//       task.isComplete = true;
//       task.date = date;
//       console.log("Date type", typeof task.date);
//     }
//     return task;
//   });
//   setTasks(updatedTasks);
// };
