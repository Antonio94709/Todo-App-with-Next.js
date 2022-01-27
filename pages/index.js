import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState(["Buy bread", "Code", "Chill"]);
  const [Item, setItem] = useState("");

  function removeItem(taskName) {
    setTasks(
      tasks.filter((task) => {
        return task != taskName;
      })
    );
  }

  function AddItem() {
    if (Item != "" && !tasks.includes(Item)) {
      let temp = tasks;
      temp.push(Item);
      setTasks(temp);
      setItem("");
    }
  }

  return (
    <div className="w-3/4 mx-auto text-center">
      <h2 className="text-4xl p-4">Todo app with next.js</h2>
      <input
        placeholder="Add task"
        value={Item}
        className="p-4 text-gray-500 mr-2 rounded text-center color-black"
        onChange={(e) => {
          setItem(e.target.value);
        }}
      ></input>
      <button onClick={AddItem} className=" rounded bg-black white-text p-4">
        {" "}
        Add tasks
      </button>
      <ul className="m-4">
        {tasks.map((task) => {
          return (
            <div>
              <li key={task.index} className="w-full border-t">
                {task}
                <button
                  onClick={() => {
                    removeItem(task);
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
