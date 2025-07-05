"use client";

import type React from "react";

import { useState } from "react";
import Modal from "@/shared/ui/modals/modal";
import AddTransactionTabs from "@/features/dashboard/ui/dashboard-page/dashboard-finance/modals/add-transaction-tabs";
import AddTransactionForm from "@/features/dashboard/ui/dashboard-page/dashboard-finance/modals/add-transaction-form";
import AddTransactionSummary from "@/features/dashboard/ui/dashboard-page/dashboard-finance/modals/add-transaction-summary";
import AddTransactionActions from "@/features/dashboard/ui/dashboard-page/dashboard-finance/modals/add-transaction-actions";
import {
  TransactionType,
  AddTransactionFormData,
} from "@/features/dashboard/ui/dashboard-page/dashboard-finance/modals/types";
import { useCreateTransaction } from "@/features/dashboard/model/api/queries/use-create-transaction";
import { CreateTransactionInput } from "@/features/dashboard/lib/types";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const incomeCategories = [
  "Salary",
  "Freelance",
  "Investment Returns",
  "Business Income",
  "Rental Income",
  "Other Income",
];

const expenseCategories = [
  "Housing",
  "Food & Dining",
  "Transportation",
  "Shopping",
  "Entertainment",
  "Bills & Utilities",
  "Healthcare",
  "Education",
  "Travel",
  "Other Expenses",
];

const AddTransactionModal = ({ open, onOpenChange }: Props) => {
  const [activeTab, setActiveTab] = useState<TransactionType>(
    TransactionType.Expense
  );
  const [formData, setFormData] = useState<AddTransactionFormData>({
    amount: "",
    category: "",
    description: "",
    date: new Date().toISOString().split("T")[0],
    notes: "",
  });

  const { mutate: createTransaction, isPending } = useCreateTransaction();

  const handleTabChange = (tab: TransactionType) => setActiveTab(tab);

  const handleInputChange = (
    field: keyof AddTransactionFormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const data: CreateTransactionInput = {
      type: activeTab,
      amount: Number(formData.amount),
      category: formData.category,
      description: formData.description,
      date: formData.date,
      notes: formData.notes,
      currency: "USD",
    };
    createTransaction(data, {
      onSuccess: () => {
        onOpenChange(false);
        setFormData({
          amount: "",
          category: "",
          description: "",
          date: new Date().toISOString().split("T")[0],
          notes: "",
        });
      },
    });
  };

  const categories =
    activeTab === TransactionType.Income ? incomeCategories : expenseCategories;

  return (
    <Modal open={open} onOpenChange={onOpenChange} title="Add New Transaction">
      <div className="mt-6">
        <AddTransactionTabs
          activeTab={activeTab}
          onTabChange={handleTabChange}
        />
        <form onSubmit={handleSubmit} className="space-y-6">
          <AddTransactionForm
            formData={formData}
            onInputChange={handleInputChange}
            categories={categories}
            activeTab={activeTab}
            onSubmit={handleSubmit}
          />
          <AddTransactionSummary formData={formData} activeTab={activeTab} />
          <AddTransactionActions
            onCancel={() => onOpenChange(false)}
            activeTab={activeTab}
            disabled={
              isPending ||
              !formData.amount ||
              !formData.category ||
              !formData.description ||
              !formData.date
            }
          />
        </form>
      </div>
    </Modal>
  );
};

export default AddTransactionModal;
