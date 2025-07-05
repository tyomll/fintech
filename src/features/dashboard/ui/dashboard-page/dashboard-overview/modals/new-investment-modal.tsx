"use client";
import { useState } from "react";
import Modal from "@/shared/ui/modals/modal";
import {
  InvestmentType,
  RiskLevel,
  NewInvestmentFormData,
} from "@/features/dashboard/lib/types";
import NewInvestmentForm from "@/features/dashboard/ui/dashboard-page/dashboard-overview/modals/new-investment-form";
import NewInvestmentActions from "@/features/dashboard/ui/dashboard-page/dashboard-overview/modals/new-investment-actions";
import { TrendingUp, DollarSign, Target } from "lucide-react";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const investmentTypes = [
  { value: InvestmentType.Stocks, label: "Stocks", icon: TrendingUp },
  { value: InvestmentType.Bonds, label: "Bonds", icon: DollarSign },
  { value: InvestmentType.ETF, label: "ETF", icon: Target },
  { value: InvestmentType.Crypto, label: "Cryptocurrency", icon: TrendingUp },
];

const riskLevels = [
  { value: RiskLevel.Low, label: "Low Risk", color: "text-green-400" },
  { value: RiskLevel.Medium, label: "Medium Risk", color: "text-yellow-400" },
  { value: RiskLevel.High, label: "High Risk", color: "text-red-400" },
];

const initialFormData: NewInvestmentFormData = {
  name: "",
  type: "",
  amount: "",
  targetAmount: "",
  timeframe: "",
  riskLevel: "",
  description: "",
};

const NewInvestmentModal = ({ open, onOpenChange }: Props) => {
  const [formData, setFormData] =
    useState<NewInvestmentFormData>(initialFormData);

  const handleInputChange = (
    field: keyof NewInvestmentFormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenChange(false);
    setFormData(initialFormData);
  };

  const isDisabled =
    !formData.name ||
    !formData.type ||
    !formData.amount ||
    !formData.targetAmount ||
    !formData.timeframe ||
    !formData.riskLevel;

  return (
    <Modal
      open={open}
      onOpenChange={onOpenChange}
      title="Create New Investment Plan"
    >
      <form onSubmit={handleSubmit} className="space-y-6 mt-6">
        <NewInvestmentForm
          formData={formData}
          onInputChange={handleInputChange}
          investmentTypes={investmentTypes}
          riskLevels={riskLevels}
          onSubmit={handleSubmit}
        />
        <NewInvestmentActions
          onCancel={() => onOpenChange(false)}
          disabled={isDisabled}
        />
      </form>
    </Modal>
  );
};

export default NewInvestmentModal;
