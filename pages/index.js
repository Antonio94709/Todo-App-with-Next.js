import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { apitask } from "../data/Apitasks";

export default function Home() {
  /*these states belong to the example*/
  const [apitasklist, setApitasklist] = useState([]);
  const [apitaskli, setApiTaskli] = useState();

  const [tasks, setTasks] = useState(["Code", "Eat ", "Buy bread"]);
  const [Item, setItem] = useState("");

  function removeItem(taskName) {
    setTasks(
      tasks.filter((task) => {
        return task != taskName;
      })
    );
  }
  /*this delets infromation staored in the json or database using api routing*/
  const removeApiTask = async (apitaskid) => {
    const response = await fetch(`/api/aptasks/${apitaskid}`, {
      method: `DELETE`,
    });
    const data = await response.json();
    console.log(data);
    fetchApitasks();
  };

  /*this is an api call exapmle to test is it works(get request)*/
  const apiTask = async () => {
    const response = await fetch("/api/atasks");
    const data = await response.json();
    setApitasklist(data);
  };
  /* this adds informtion inputed through input to json or a database e.g*/
  const submitTask = async () => {
    const response = await fetch("api/atasks", {
      method: "POST",
      body: JSON.stringify({ apitaskli }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    apiTask();
    console.log(data);
  };

  const AddItem = async () => {
    const response = await fetch("/api/atasks");
    const data = await response.json();
    if (Item != "" && !tasks.includes(Item)) {
      let temp = tasks;
      temp.push(Item);
      setTasks(temp);
      setItem("");
    }
  };

  return (
    <div className="w-3/4 mx-auto text-center">
      <h2 className="text-4xl p-4">Todo app with next.js</h2>
      <input
        placeholder="Add task"
        value={apitaskli}
        className="p-4 text-gray-500 mr-2 rounded text-center color-black"
        onChange={(e) => {
          setApiTaskli(e.target.value);
        }}
      ></input>
      <button onClick={submitTask} className=" rounded bg-black white-text p-4">
        {" "}
        Add tasks
      </button>
      <ul className="m-4">
        {apitasklist.map((task) => {
          return (
            <div>
              <li key={task.index} className="w-full border-t">
                {task.text}
                <button
                  onClick={() => {
                    removeApiTask(task);
                  }}
                  className="bg-black ml-7  white-text p-4 rounded"
                >
                  Remove item
                </button>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
