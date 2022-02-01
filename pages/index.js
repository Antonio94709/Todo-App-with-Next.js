import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState, useEffect } from "react";
import { apitask } from "../data/Apitasks";

export default function Home() {
  /*these states belong to the api routes*/
  const [apitasklist, setApitasklist] = useState([]);
  const [apitaskli, setApiTaskli] = useState("");

  //Use UseEffect Hook to get tasks on first mount
  useEffect(() => {
    console.log("Component has mounted!!!!");
    apiTask();
  }, []);

  /*this deletes infromation stored in the json or database using api routing*/
  const removeApiTask = async (id) => {
    const response = await fetch(`/api/tasks/?taskId=${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    //This holds the response from the delete process in api route
    console.log(data);
    //If success then simply remove item from current state. No need to refetch all tasks from DB.
    if(data.success){
      //Filter current tasks and simply remove the one matching current ID
      setApitasklist(apitasklist.filter((task) => task.id !== id));
    }
  };

  //Old -> see above
  // const removeApiTask = async (tasks) => {
  //   const response = await fetch(`/api/RemoveTasks/${tasks}`, {
  //     method: "DELETE",
  //   });
  //   const data = await response.json();
  //   console.log(data);
  // };


  /*this is an api call to get request*/
  const apiTask = async () => {
    const response = await fetch("/api/tasks"); //CHanged this to new route!!!
    const data = await response.json();
    setApitasklist(data);
  };
  /* this api route adds informtion entered through input to json or a database e.g*/
  const submitTask = async () => {
    const response = await fetch("api/tasks", {
      //CHanged this to new route!!!
      method: "POST",
      body: JSON.stringify({ apitaskli }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = await response.json();
    apiTask();
    console.log(data);
    setApiTaskli("");
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
        {apitasklist.map((task, i) => {
          return (
            <div key={i}>
              <li  className="w-full border-t">
                {task.text}
                <button
                  onClick={() => removeApiTask(task.id)}
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
