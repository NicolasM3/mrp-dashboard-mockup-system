
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const data = [
  { name: 'Matéria Prima', value: 45, color: '#3b82f6' },
  { name: 'Componentes', value: 30, color: '#10b981' },
  { name: 'Ferramentas', value: 15, color: '#f59e0b' },
  { name: 'Consumíveis', value: 10, color: '#ef4444' },
];

const PurchaseChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ordens de Compra - Distribuição por Categoria</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default PurchaseChart;
