import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import type { EstatisticaDescritiva } from "../../types/api-requests";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

interface PieChartModelProps {
  title: string;
  data: EstatisticaDescritiva[];
}

export function PieChartModel({
  title,
  data,
}: PieChartModelProps) {
  return (
    <div style={{ width: "100%", height: 400 }}>
      <h2>{title}</h2>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="quantidade"
            nameKey="resposta"
            cx="50%"
            cy="50%"
            outerRadius={120}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
