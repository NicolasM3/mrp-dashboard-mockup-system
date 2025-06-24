
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const data = [
  { item: 'Parafuso M6', atual: 450, minimo: 200, maximo: 800, status: 'OK' },
  { item: 'Chapa Aço', atual: 80, minimo: 100, maximo: 500, status: 'Crítico' },
  { item: 'Tinta Branca', atual: 25, minimo: 50, maximo: 200, status: 'Baixo' },
  { item: 'Motor 220V', atual: 35, minimo: 20, maximo: 100, status: 'OK' },
  { item: 'Rolamento', atual: 180, minimo: 50, maximo: 300, status: 'OK' },
];

const StockChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Consulta de Estoque - Níveis Atuais</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="item" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="minimo" fill="#ef4444" name="Estoque Mínimo" />
            <Bar dataKey="atual" fill="#3b82f6" name="Estoque Atual" />
            <Bar dataKey="maximo" fill="#10b981" name="Estoque Máximo" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default StockChart;
