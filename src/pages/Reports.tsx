
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import MRPLayout from '@/components/MRPLayout';

const ReportsContent = () => {
  // Sample data for different reports
  const monthlyProductionData = [
    { month: 'Jan', production: 4000, target: 4200 },
    { month: 'Fev', production: 3000, target: 3500 },
    { month: 'Mar', production: 2000, target: 2800 },
    { month: 'Abr', production: 2780, target: 3000 },
    { month: 'Mai', production: 1890, target: 2200 },
    { month: 'Jun', production: 2390, target: 2500 },
  ];

  const defectRateData = [
    { week: 'S1', defects: 2.3 },
    { week: 'S2', defects: 1.8 },
    { week: 'S3', defects: 3.2 },
    { week: 'S4', defects: 2.1 },
    { week: 'S5', defects: 1.5 },
    { week: 'S6', defects: 2.8 },
  ];

  const costDistributionData = [
    { name: 'Materiais', value: 45, color: '#3b82f6' },
    { name: 'Mão de Obra', value: 30, color: '#10b981' },
    { name: 'Overhead', value: 15, color: '#f59e0b' },
    { name: 'Transporte', value: 10, color: '#ef4444' },
  ];

  const efficiencyData = [
    { day: 'Seg', efficiency: 85 },
    { day: 'Ter', efficiency: 92 },
    { day: 'Qua', efficiency: 78 },
    { day: 'Qui', efficiency: 88 },
    { day: 'Sex', efficiency: 95 },
    { day: 'Sáb', efficiency: 82 },
  ];

  const inventoryTurnoverData = [
    { quarter: 'Q1', turnover: 4.2, target: 4.0 },
    { quarter: 'Q2', turnover: 3.8, target: 4.0 },
    { quarter: 'Q3', turnover: 4.5, target: 4.0 },
    { quarter: 'Q4', turnover: 4.1, target: 4.0 },
  ];

  const supplierPerformanceData = [
    { supplier: 'Fornecedor A', onTime: 95, quality: 98 },
    { supplier: 'Fornecedor B', onTime: 87, quality: 92 },
    { supplier: 'Fornecedor C', onTime: 92, quality: 89 },
    { supplier: 'Fornecedor D', onTime: 78, quality: 95 },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Relatórios Gerenciais</h1>
        <p className="text-gray-600">Análise detalhada dos indicadores de produção e qualidade</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Production Report */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Produção Mensal - Real vs Meta</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyProductionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="production" fill="#3b82f6" name="Produção Real" />
                <Bar dataKey="target" fill="#10b981" name="Meta" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Defect Rate Trend */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Taxa de Defeitos Semanal (%)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={defectRateData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="defects" stroke="#ef4444" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Cost Distribution */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Distribuição de Custos</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={costDistributionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {costDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Daily Efficiency */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Eficiência Diária (%)</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={efficiencyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="efficiency" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Inventory Turnover */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Giro de Estoque por Trimestre</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={inventoryTurnoverData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="quarter" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="turnover" fill="#6366f1" name="Giro Real" />
                <Bar dataKey="target" fill="#f59e0b" name="Meta" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Supplier Performance */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Performance dos Fornecedores</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={supplierPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="supplier" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="onTime" fill="#3b82f6" name="Pontualidade %" />
                <Bar dataKey="quality" fill="#10b981" name="Qualidade %" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const Reports = () => {
  return <MRPLayout><ReportsContent /></MRPLayout>;
};

export default Reports;
