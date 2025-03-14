import React, { useState } from "react";

const ToDo = () => {
  const [data, setData] = useState([]);
  const [task, setTask] = useState("");

  const [newOne, setNewOne] = useState("");
  const [check, setCheck] = useState(false);

  const clickHandle = () => {
    setData([...data, task]);
  };
  const addHandle = (ev) => {
    setTask(ev.target.value);
  };
  const deleteHandle = (ev) => {
    setData(data.filter((item) => item !== ev));
  };
  const updateInputHandle = (ev) => {
    setNewOne(ev.target.value);
  };
  const updateHandle = () => {
    setCheck(true);
  };

  return (
    <div
      style={{
        height: "966px",
        boxSizing: "border-box",
        backgroundColor: "rgb(131, 75, 244)",
        margin: "0px",
        placeItems: "center",
        padding: "100px",
      }}
    >
      <div id="ToDo_Box"
        style={{
          width: "400px",
          backgroundColor: "rgb(27, 24, 67)",
          margin: "0px",
          color: "white",
          padding: "10px",
          textAlign: "center",
         height:"fit-content"
        }}
      >
        <h1>ToDo list</h1>
        <div>
          <input
            type="text"
            id="task"
            name="task"
            placeholder="What is the task today"
            style={{
              width: "280px",
              height: "37px",
              border: "none",
              color: "black",
              outline: "none",
            }}
            onChange={(ev) => {
              addHandle(ev);
            }}
          />
          <button
            style={{
              width: "80px",
              height: "40px",
              backgroundColor: "rgb(131, 75, 244)",
              border: "none",
              color: "white",
            }}
            id="add_btn"
            onClick={clickHandle}
          >
            Add
          </button>
        </div>
        {data.map((value, index) => (
          <div>
            <div
              style={{
                display: "flex",
                placeItems: "center",
                justifyContent: "space-evenly",
               
              }}
            >
              <h3 style={{ width: "300px" }} key={index}>
                {value}
              </h3>
              <div style={{ display: "flex" }}>
                <button
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    marginRight: "5px",
                    backgroundColor: "rgb(131, 75, 244)",
                    border: "none",
                    color: "white",
                  }}
                  onClick={updateHandle}
                >
                  <i className="fa-solid fa-pencil"></i>
                </button>
                <button
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "rgb(131, 75, 244)",
                    border: "none",
                    color: "white",
                  }}
                  onClick={() => {
                    deleteHandle(value);
                  }}
                >
                  <i class="fa-solid fa-eraser"></i>
                </button>
              </div>
            </div>
            {check && (
              <div>
                <input
                  type="text"
                  style={{
                    width: "280px",
                    height: "27px",
                    border: "none",
                    color: "black",
                    outline: "none",
                  }}
                  onChange={(ev) => {
                    updateInputHandle(ev);
                  }}
                />
                <button
                  style={{
                    width: "80px",
                    height: "40px",
                    backgroundColor: "rgb(131, 75, 244)",
                    border: "none",
                    color: "white",
                  }}
                  onClick={() => {
                    setData((prevData) =>
                      prevData.map((item) => (item === value ? newOne : item))
                    );
                    setCheck(false);
                  }}
                >
                  update
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDo;
