import { Heading, Checkbox, IconButton, Input, Button } from "@chakra-ui/react";
import style from "../style/content.module.css";
import { optionList } from "../data/optionlist";
import { DeleteIcon } from "@chakra-ui/icons";

const Content = () => {
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
          style={{ textAlign: "center", marginBottom: "20px", marginTop: "20px"}}
        >
          Done 0
        </Heading>
        <Heading
          color={"white"}
          as="h1"
          size="l"
          style={{ textAlign: "start", marginBottom: "5px", marginTop: "20px"}}
        >
          Add Task
        </Heading>
        <Input placeholder='Add Task' style={{marginBottom: "20px", color: "white"}} />
        <Button colorScheme='teal'> Submit </Button>
      </div>
    </div>
  );
};

export default Content;
