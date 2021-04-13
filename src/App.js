import React from "react";
import Part1 from "./components/part1/Part1";
import Part2 from "./components/part2/Part2";
import Part3 from "./components/part3/Part3";
import Mainpath from "./components/part4/MainPath";
import Main from "./components/materialUI/Main";
import Overall from "./components/Overall";
import BasicTable from "./components/reacTable/BasicTable";
import SortingTable from "./components/reacTable/SortingTable";
import FilteringTable from "./components/reacTable/FilteringTable";
import PaginationTable from "./components/reacTable/PaginationTable";
import RowSelection from "./components/reacTable/RowSelection";
import ColumnOrder from "./components/reacTable/ColumnOrder";
import StickyTable from "./components/reacTable/StickyTable";
import L_axios from "./components/axiosLearn/Main";
function App() {
  return (
    <div className="App">
      {/* <Part1/> */}
      {/* <Part2/> */}
      {/* <Part3/> */}
      {/* <Mainpath/> */}
      {/* <Main/> */}
      {/* <Overall/> */}
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      {/* <FilteringTable /> */}
      {/* <PaginationTable /> */}
      {/* <RowSelection /> */}
      {/* <ColumnOrder /> */}
      {/* <StickyTable /> */}
      <L_axios />
    </div>
  );
}

export default App;
