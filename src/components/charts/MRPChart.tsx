
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const data = [
  { semana: 'S1', necessidades: 245, estoque: 180, compras: 65 },
  { semana: 'S2', necessidades: 320, estoque: 150, compras: 170 },
  { semana: 'S3', necessidades: 280, estoque: 120, compras: 160 },
  { semana: 'S4', necessidades: 400, estoque: 90, compras: 310 },
  { semana: 'S5', necessidades: 350, estoque: 110, compras: 240 },
];

const MRPChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Planejamento MRP - Necessidades de Materiais</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="semana" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="necessidades" stroke="#ef4444" name="Necessidades" strokeWidth={2} />
            <Line type="monotone" dataKey="estoque" stroke="#3b82f6" name="Estoque Atual" strokeWidth={2} />
            <Line type="monotone" dataKey="compras" stroke="#10b981" name="Compras Planejadas" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default MRPChart;
