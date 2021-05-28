import { StrictMode } from "react";
import ReactDOM from "react-dom";

import GroupedBar from "./Graphs_Components/Two_Mock_Datasets_Outputs/Viz_Task_1";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <GroupedBar />
  </StrictMode>,
  rootElement
);
