import * as React from "react";

import { ITagData } from "../../types/data-types";

import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from "recharts";

interface IProps {
  tags: ITagData[];
}

export const SkillsChart: React.SFC<IProps> = ({ tags }) => {
  return (
    <BarChart
      width={600}
      height={300}
      data={tags}
      margin={{ top: 5, right: 30, left: -35, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="count" fill="#8884d8" />
    </BarChart>
  );
};
