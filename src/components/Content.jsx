import React, { useState } from "react";
import { Heading, Checkbox, IconButton, Input, Button } from "@chakra-ui/react";
import style from "../style/content.module.css";
import { DeleteIcon } from "@chakra-ui/icons";

const Content = () => {
  const [submitTask, setSubmitTask] = useState("");
  const [optionList, setOptionList] = useState([
    "Create Guest Experience Mobile Check-in",
    "Document current CI/CD process",
    "Perform code review for final Pillow-Talk release",
    "Implement new color palette from design team",
    "Fix image uploading process for guest check-in",
    "Provide on-boarding documentation",
  ]);

  const handleDelete = (index) => {
    const updatedOptionList = optionList.filter((_, i) => i !== index);
    setOptionList(updatedOptionList);
  }

  return (
    <div className={style.box}>
      <div className={style.main}>
        <Heading
          color={"white"}
          as="h1"
          size="xl"
          style={{ textAlign: "center", marginBottom: "20px" }}
        >
          Chores Todo List
        </Heading>
        <div className={style.optionlist}>
          <ul>
            {optionList.map((item, index) => {
              return (
                <li className={style.contoh} key={index}>
                  <Checkbox style={{ borderColor: "green", color: "white" }}>
                    {item}
                  </Checkbox>
                  <IconButton
                    variant={"outline"}
                    colorScheme="red"
                    icon={<DeleteIcon />}
                    onClick = {() => handleDelete(index)}
                  ></IconButton>
                </li>
              );
            })}
          </ul>
        </div>
        <hr style={{ color: "white", marginTop: "20px" }} />
        <Heading
          color={"white"}
          as="h1"
          size="xl"
          style={{
            textAlign: "center",
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          Done 0
        </Heading>
        <Heading
          color={"white"}
          as="h1"
          size="l"
          style={{ textAlign: "start", marginBottom: "5px", marginTop: "20px" }}
        >
          Add Task
        </Heading>
        <Input
          placeholder="Add Task"
          style={{ marginBottom: "20px", color: "white" }}
          onChange={(e) => {
            setSubmitTask(e.target.value);
          }}
          value={submitTask}
        />
        <Button 
          colorScheme="teal"
          onClick={() => {
            const newArray = [...optionList, submitTask]
            setOptionList(newArray)
            setSubmitTask("")
          }}
        > Submit </Button>
      </div>
    </div>
  );
};

export default Content;
