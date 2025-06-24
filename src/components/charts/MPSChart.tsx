
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const data = [
  { product: 'Produto A', demanda: 120, producao: 100 },
  { product: 'Produto B', demanda: 200, producao: 180 },
  { product: 'Produto C', demanda: 150, producao: 160 },
  { product: 'Produto D', demanda: 80, producao: 75 },
  { product: 'Produto E', demanda: 300, producao: 280 },
];

const MPSChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Plano Mestre de Produção - Demanda vs Produção</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="product" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="demanda" fill="#3b82f6" name="Demanda" />
            <Bar dataKey="producao" fill="#10b981" name="Produção Planejada" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default MPSChart;
