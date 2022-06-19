import { useState } from "react";
import BarChart from "./components/BarChart/BarChart";
import Toggle from "./Toggle/Toggle";

const Languages = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="skills">
      <div className="heading">Skills</div>

      {<BarChart />}
    </div>
  );
};

export default Languages;
