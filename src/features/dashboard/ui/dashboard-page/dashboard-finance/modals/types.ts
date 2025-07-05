export enum TransactionType {
  Income = "income",
  Expense = "expense",
}

export type TransactionCategory = string;

export interface AddTransactionFormData {
  amount: string;
  category: TransactionCategory;
  description: string;
  date: string;
  notes: string;
}
