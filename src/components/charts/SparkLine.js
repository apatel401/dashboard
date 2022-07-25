import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

const SparkLine = ({ currentColor, id, type, height, width, data, color }) => {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth="1"
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, width: 2 }}
      type={type}
      xName="x"
      yName="yval"
      dataSource={data}
      tooltipSettings={{
        visible: true,
        // eslint-disable-next-line no-template-curly-in-string
        format: "${x} : data ${yval}",
        trackLineSettings: {
          visible: true,
        },
      }}
      markerSettings={{ visible: ["All"], size: 2.5, fill: currentColor }}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
