import React, { useState } from "react";
import axios from "axios";
import { PostAdd } from "@material-ui/icons";
const Main = () => {
  const [showOutPut, setshowOutPut] = useState();
  axios.defaults.headers.common["X-Auth-Token"] =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
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
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5", {
        timeout: 5000,
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
  // DELETE REQUEST
  const removeTodo = () => {
    axios
      .delete("https://jsonplaceholder.typicode.com/todos/1")
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
  // SIMULANEOUS DATA
  const getSIMData = () => {
    axios
      .all([
        axios.get("https://jsonplaceholder.typicode.com/posts"),
        axios.get("https://jsonplaceholder.typicode.com/todos"),
      ])
      // .then((res) => {
      //   console.log(res[0]);
      //   console.log(res[1]);
      //   setshowOutPut(
      //     <>
      //       <h3>{res[1].status}</h3>
      //       <br />
      //       <div className="mainCov" style={{ display: "flex" }}>
      //         <div className="mainChild">
      //           <h3>Headers</h3>
      //           <br />
      //           <pre style={{ height: "70vh", overflowY: "scroll" }}>
      //             {JSON.stringify(res[1].headers, null, 2)}
      //           </pre>
      //         </div>
      //         <div className="mainChild">
      //           <h3>Data</h3>
      //           <br />
      //           <pre style={{ height: "70vh", overflowY: "scroll" }}>
      //             {JSON.stringify(res[1].data, null, 2)}
      //           </pre>
      //         </div>
      //         <div className="mainChild">
      //           <h3>Config</h3>
      //           <br />
      //           <pre style={{ height: "70vh", overflowY: "scroll" }}>
      //             {JSON.stringify(res[1].config, null, 2)}
      //           </pre>
      //         </div>
      //       </div>
      //     </>
      //   );
      // })
      .then(
        axios.spread((posts, todos) =>
          setshowOutPut(
            <>
              <h3>{posts.status}</h3>
              <br />
              <div className="mainCov" style={{ display: "flex" }}>
                <div className="mainChild">
                  <h3>Headers</h3>
                  <br />
                  <pre style={{ height: "70vh", overflowY: "scroll" }}>
                    {JSON.stringify(posts.headers, null, 2)}
                  </pre>
                </div>
                <div className="mainChild">
                  <h3>Data</h3>
                  <br />
                  <pre style={{ height: "70vh", overflowY: "scroll" }}>
                    {JSON.stringify(posts.data, null, 2)}
                  </pre>
                </div>
                <div className="mainChild">
                  <h3>Config</h3>
                  <br />
                  <pre style={{ height: "70vh", overflowY: "scroll" }}>
                    {JSON.stringify(posts.config, null, 2)}
                  </pre>
                </div>
              </div>
            </>
          )
        )
      )
      .catch((err) => console.error(err));
  };
  // Interceptors
  axios.interceptors.request.use((config) => {
    console.log(
      `${config.method.toUpperCase()} request sent to ${
        config.url
      } at ${new Date().getTime()}`
    );
    return config;
  });

  // CUSTOME HEADERS
  const customHeaders = () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "sometoken",
      },
    };
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: "New Todo",
        completed: false,
      })
      .then(
        (res) =>
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
          ),
        config
      )
      .catch((err) => console.error(err));
  };

  // ERROR HANDELING
  const erroHandeling = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todoss")
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
      .catch((err) => {
        if (err.response) {
          // Server responded with a status other than 200 range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
          if (err.response.status === 404) {
            alert("Error: Page Not Found");
          } else if (err.request) {
            // Request was made but no response
            console.error(err.request);
          } else {
            console.error(err.message);
          }
        }
      });
  };
  // CANCEL TOKEN
  const cancelToken = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/todoss", {
        // cancelToken: source.token,
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
      .catch((err) => {
        if (err.response) {
          // Server responded with a status other than 200 range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
          if (err.response.status === 404) {
            alert("Error: Page Not Found");
          } else if (err.request) {
            // Request was made but no response
            console.error(err.request);
          } else {
            console.error(err.message);
          }
        }
      });
  };
  // AXIOS INSTANCE
  const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  });
  axiosInstance.get("/todos").then((res) =>
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
  );
  return (
    <>
      <div
        className="cover"
        style={{ display: "flex", justifyContent: "space-evenly" }}
      >
        <button onClick={getData}>get</button>
        <button onClick={getTodo}>Post</button>
        <button onClick={updateTodo}>Put/Patch</button>
        <button onClick={removeTodo}>Delete</button>
        <button onClick={getSIMData}>Sim Data</button>
        <button onClick={customHeaders}>Custom Headers</button>
        <button onClick={erroHandeling}>Error Handeling</button>
        <button onClick={cancelToken}>Cancel Token</button>
      </div>
      <div className="outPut">{showOutPut}</div>
    </>
  );
};

export default Main;
