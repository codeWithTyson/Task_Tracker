import React, { useState } from "react";
import Header from "../layout/Header";
import AddTask from "../tasks/new-task/AddTask";
import Tasks from "../tasks/Tasks";

export const Home = () => {
  const [hideShow, setHideShow] = useState(false);

  return (
    <>
      <Header isVisibile={hideShow} toggleVisibility={setHideShow} />
      {hideShow && <AddTask />}
      <Tasks />
    </>
  );
};
