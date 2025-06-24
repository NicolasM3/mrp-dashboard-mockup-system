
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const data = [
  { mes: 'Jan', planejado: 180, executado: 175 },
  { mes: 'Fev', planejado: 200, executado: 195 },
  { mes: 'Mar', planejado: 220, executado: 210 },
  { mes: 'Abr', planejado: 250, executado: 240 },
  { mes: 'Mai', planejado: 280, executado: 275 },
  { mes: 'Jun', planejado: 300, executado: 290 },
];

const ProductionChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ordens de Fabricação - Planejado vs Executado</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="mes" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="planejado" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
            <Area type="monotone" dataKey="executado" stackId="2" stroke="#10b981" fill="#10b981" fillOpacity={0.8} />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ProductionChart;
