import React, { useState } from 'react';
import { 
  Package, 
  Settings, 
  ShoppingCart, 
  Factory, 
  BarChart3, 
  CheckCircle,
  AlertTriangle,
  TrendingUp,
  Users,
  Calendar,
  ArrowLeft
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import MPSChart from './charts/MPSChart';
import MRPChart from './charts/MRPChart';
import CapacityChart from './charts/CapacityChart';
import PurchaseChart from './charts/PurchaseChart';
import ProductionChart from './charts/ProductionChart';
import StockChart from './charts/StockChart';

const MRPDashboard = () => {
  const { toast } = useToast();
  const [activeModule, setActiveModule] = useState<string | null>(null);

  const handleModuleClick = (moduleName: string) => {
    toast({
      title: `Acessando ${moduleName}`,
      description: `Carregando dados do módulo ${moduleName}...`,
    });
    
    console.log(`Navigating to ${moduleName} module`);
    setActiveModule(moduleName);
  };

  const handleBackToDashboard = () => {
    setActiveModule(null);
  };

  const renderChart = () => {
    switch (activeModule) {
      case "Plano Mestre de Produção (MPS)":
        return <MPSChart />;
      case "Planejamento das Necessidades (MRP)":
        return <MRPChart />;
      case "Validar Capacidade (RCCP/CRP)":
        return <CapacityChart />;
      case "Gerar Ordens de Compra":
        return <PurchaseChart />;
      case "Gerar Ordens de Fabricação":
        return <ProductionChart />;
      case "Consultar Estoque":
        return <StockChart />;
      default:
        return null;
    }
  };

  // If a module is active, show the chart view
  if (activeModule) {
    return (
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="mb-6">
          <Button 
            onClick={handleBackToDashboard}
            variant="outline"
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar ao Dashboard
          </Button>
          <h1 className="text-3xl font-bold text-gray-800">{activeModule}</h1>
        </div>
        {renderChart()}
      </div>
    );
  }

  const mainFunctions = [
    {
      title: "Plano Mestre de Produção (MPS)",
      description: "Cadastro e manutenção da demanda dos produtos acabados",
      icon: Calendar,
      color: "bg-blue-500 hover:bg-blue-600",
      textColor: "text-blue-700",
      bgColor: "bg-blue-50",
      action: () => handleModuleClick("Plano Mestre de Produção (MPS)")
    },
    {
      title: "Planejamento das Necessidades (MRP)",
      description: "Explosão de materiais baseada no MPS e estrutura de produto",
      icon: Settings,
      color: "bg-green-500 hover:bg-green-600",
      textColor: "text-green-700",
      bgColor: "bg-green-50",
      action: () => handleModuleClick("Planejamento das Necessidades (MRP)")
    },
    {
      title: "Validar Capacidade (RCCP/CRP)",
      description: "Validação de capacidade de recursos para o planejamento",
      icon: CheckCircle,
      color: "bg-purple-500 hover:bg-purple-600",
      textColor: "text-purple-700",
      bgColor: "bg-purple-50",
      action: () => handleModuleClick("Validar Capacidade (RCCP/CRP)")
    },
    {
      title: "Gerar Ordens de Compra",
      description: "Relatórios com ordens de compra de materiais externos",
      icon: ShoppingCart,
      color: "bg-orange-500 hover:bg-orange-600",
      textColor: "text-orange-700",
      bgColor: "bg-orange-50",
      action: () => handleModuleClick("Gerar Ordens de Compra")
    },
    {
      title: "Gerar Ordens de Fabricação",
      description: "Relatórios com ordens de produção para itens internos",
      icon: Factory,
      color: "bg-red-500 hover:bg-red-600",
      textColor: "text-red-700",
      bgColor: "bg-red-50",
      action: () => handleModuleClick("Gerar Ordens de Fabricação")
    },
    {
      title: "Consultar Estoque",
      description: "Consulta aos níveis de estoque atualizados dos itens",
      icon: Package,
      color: "bg-teal-500 hover:bg-teal-600",
      textColor: "text-teal-700",
      bgColor: "bg-teal-50",
      action: () => handleModuleClick("Consultar Estoque")
    }
  ];

  const kpiData = [
    {
      title: "Ordens Pendentes",
      value: "47",
      icon: AlertTriangle,
      color: "text-orange-600",
      bgColor: "bg-orange-100"
    },
    {
      title: "Itens em Estoque Crítico",
      value: "12",
      icon: Package,
      color: "text-red-600",
      bgColor: "bg-red-100"
    },
    {
      title: "Eficiência de Produção",
      value: "94%",
      icon: TrendingUp,
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      title: "Usuários Ativos",
      value: "23",
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header KPIs */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Indicadores Principais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpiData.map((kpi, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{kpi.title}</p>
                    <p className="text-3xl font-bold text-gray-900">{kpi.value}</p>
                  </div>
                  <div className={`p-3 rounded-full ${kpi.bgColor}`}>
                    <kpi.icon className={`h-6 w-6 ${kpi.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Main Functions */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Funcionalidades Principais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mainFunctions.map((func, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className={`${func.bgColor} pb-4`}>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    <func.icon className={`h-6 w-6 ${func.textColor}`} />
                  </div>
                  <CardTitle className={`text-lg ${func.textColor}`}>
                    {func.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {func.description}
                </p>
                <Button 
                  onClick={func.action}
                  className={`w-full ${func.color} text-white font-medium py-2 px-4 rounded-lg transition-colors`}
                >
                  Acessar Módulo
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Atividades Recentes</h2>
        <Card className="shadow-lg">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium text-gray-900">MRP executado com sucesso</p>
                  <p className="text-sm text-gray-600">há 2 horas - 245 itens processados</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-green-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <div>
                  <p className="font-medium text-gray-900">Validação de capacidade aprovada</p>
                  <p className="text-sm text-gray-600">há 4 horas - Centro de trabalho CNC-01</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-orange-50 rounded-lg">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                <div>
                  <p className="font-medium text-gray-900">Alerta de estoque crítico</p>
                  <p className="text-sm text-gray-600">há 6 horas - Parafuso M6 x 20mm</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MRPDashboard;
