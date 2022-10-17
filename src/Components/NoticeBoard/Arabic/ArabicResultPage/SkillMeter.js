import React, { useCallback, useState } from "react";
import { Pie, PieChart, Sector } from "recharts";
import { faBookOpen, faCircleCheck, faMicrophone, faPenRuler } from '@fortawesome/free-solid-svg-icons';



const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {        
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    value
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);

  const mark = 3.6 * value;  
  
  return (
    <g>
      <text x={cx} y={cy} dy={0} className="text-xl" textAnchor="middle" fill={fill}>
        {value}%
      </text>
      <text x={cx} y={cy} dy={12} className="text-xs" textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={-(90 - (360 - mark) / 2)}
        endAngle={mark - (90 - (360 - mark) / 2)}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 8}
        fill={fill}
      />
    </g>
  );
};

const SkillMeter = ({sData, color}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (e, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );
  
  const myData = [{name : sData.name , value: sData.value}];
  return (
    <PieChart className="mx-auto" width={100} height={100}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={myData}        
        innerRadius={30}
        outerRadius={40}
        fill={color}
        dataKey="value"
        onMouseEnter={onPieEnter}
      />
    </PieChart>
  );
};

export default SkillMeter;
