
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const data = [
  { centro: 'CNC-01', capacidade: 160, carga: 140, utilizacao: 87.5 },
  { centro: 'CNC-02', capacidade: 160, carga: 180, utilizacao: 112.5 },
  { centro: 'Solda-01', capacidade: 120, carga: 100, utilizacao: 83.3 },
  { centro: 'Montagem', capacidade: 200, carga: 190, utilizacao: 95 },
  { centro: 'Pintura', capacidade: 80, carga: 95, utilizacao: 118.7 },
];

const CapacityChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Validação de Capacidade - Centros de Trabalho</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="centro" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="capacidade" fill="#6366f1" name="Capacidade Disponível" />
            <Bar dataKey="carga" fill="#f59e0b" name="Carga Planejada" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default CapacityChart;
