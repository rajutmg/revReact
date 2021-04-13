import React, { useState } from "react";
import axios from "axios";
const Main = () => {
  const [showOutPut, setshowOutPut] = useState();
  // GET request
  const getData = () => {
    // axios({
    //   method: "get",
    //   url: "https://jsonplaceholder.typicode.com/todos",
    //   params: {
    //     _limit: 5,
    //   },
    // })
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) =>
        setshowOutPut(
          <>
            <h3>{res.status}</h3>
            <br />
            <div className="mainCov" style={{ display: "flex" }}>
              <div className="mainChild">
                <h3>Headers</h3>
                <br />
                <pre style={{ height: "70vh", overflowY: "scroll" }}>
                  {JSON.stringify(res.headers, null, 2)}
                </pre>
              </div>
              <div className="mainChild">
                <h3>Data</h3>
                <br />
                <pre style={{ height: "70vh", overflowY: "scroll" }}>
                  {JSON.stringify(res.data, null, 2)}
                </pre>
              </div>
              <div className="mainChild">
                <h3>Config</h3>
                <br />
                <pre style={{ height: "70vh", overflowY: "scroll" }}>
                  {JSON.stringify(res.config, null, 2)}
                </pre>
              </div>
            </div>
          </>
        )
      )
      .catch((err) => console.error(err));
  };
  // POST REQUEST
  const getTodo = () => {
    // axios({
    //   method: "post",
    //   url: "https://jsonplaceholder.typicode.com/todos",
    //   data: {
    //     title: "New Todo",
    //     completed: false,
    //   },
    // })
    axios
      .post("https://jsonplaceholder.typicode.com/todos?_limit=5", {
        title: "New Todo",
        completed: false,
      })
      .then((res) =>
        setshowOutPut(
          <>
            <h3>{res.status}</h3>
            <br />
            <div className="mainCov" style={{ display: "flex" }}>
              <div className="mainChild">
                <h3>Headers</h3>
                <br />
                <pre style={{ height: "70vh", overflowY: "scroll" }}>
                  {JSON.stringify(res.headers, null, 2)}
                </pre>
              </div>
              <div className="mainChild">
                <h3>Data</h3>
                <br />
                <pre style={{ height: "70vh", overflowY: "scroll" }}>
                  {JSON.stringify(res.data, null, 2)}
                </pre>
              </div>
              <div className="mainChild">
                <h3>Config</h3>
                <br />
                <pre style={{ height: "70vh", overflowY: "scroll" }}>
                  {JSON.stringify(res.config, null, 2)}
                </pre>
              </div>
            </div>
          </>
        )
      )
      .catch((err) => console.error(err));
  };
  // PUT/PATCH REQUEST
  const updateTodo = () => {
    // PUT
    // axios
    //   .put("https://jsonplaceholder.typicode.com/todos/1", {
    //     title: "Updated Todo",
    //     completed: true,
    //   })
    // PATCH
    axios
      .patch("https://jsonplaceholder.typicode.com/todos/1", {
        title: "Updated Todo",
        completed: true,
      })
      .then((res) =>
        setshowOutPut(
          <>
            <h3>{res.status}</h3>
            <br />
            <div className="mainCov" style={{ display: "flex" }}>
              <div className="mainChild">
                <h3>Headers</h3>
                <br />
                <pre style={{ height: "70vh", overflowY: "scroll" }}>
                  {JSON.stringify(res.headers, null, 2)}
                </pre>
              </div>
              <div className="mainChild">
                <h3>Data</h3>
                <br />
                <pre style={{ height: "70vh", overflowY: "scroll" }}>
                  {JSON.stringify(res.data, null, 2)}
                </pre>
              </div>
              <div className="mainChild">
                <h3>Config</h3>
                <br />
                <pre style={{ height: "70vh", overflowY: "scroll" }}>
                  {JSON.stringify(res.config, null, 2)}
                </pre>
              </div>
            </div>
          </>
        )
      )
      .catch((err) => console.error(err));
  };
  return (
    <>
      <div
        className="cover"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <button onClick={getData}>get</button>
        <button onClick={getTodo}>Post</button>
        <button onClick={updateTodo}>Put/Patch</button>
        <button onClick={getData}>Delete</button>
      </div>
      <div className="outPut">{showOutPut}</div>
    </>
  );
};

export default Main;
