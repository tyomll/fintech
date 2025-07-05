export enum TransactionType {
  Income = "Income",
  Expense = "Expense",
}

export type TransactionCategory = string;

export interface AddTransactionFormData {
  amount: string;
  category: TransactionCategory;
  description: string;
  date: string;
  notes: string;
}
