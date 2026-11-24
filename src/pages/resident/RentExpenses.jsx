import React, { useState } from "react";
import DashboardLayout from "../../components/DashboardLayout";

import AddExpenseModal from "../../components/AddExpenseModal";

const RentExpenses = () => {
  const [showAddExpense, setShowAddExpense] = useState(false);

  const rentBills = [
    {
      title: "December Monthly Rent",
      description: "Room 102 · December 2026",
      amount: "₹6,500",
      dueDate: "05 Dec 2026",
      status: "Pending",
      icon: "🏠",
    },
    {
      title: "Electricity Bill",
      description: "Property electricity charge",
      amount: "₹450",
      dueDate: "05 Dec 2026",
      status: "Pending",
      icon: "⚡",
    },
    {
      title: "November Monthly Rent",
      description: "Room 102 · November 2026",
      amount: "₹6,500",
      dueDate: "05 Nov 2026",
      status: "Paid",
      icon: "🏠",
    },
  ];

  const sharedExpenses = [
    {
      title: "Grocery Shopping",
      paidBy: "Ananya S",
      date: "23 Nov 2026",
      total: "₹1,200",
      yourShare: "₹400",
      status: "You owe",
    },
    {
      title: "Cleaning Supplies",
      paidBy: "Meera K",
      date: "21 Nov 2026",
      total: "₹600",
      yourShare: "₹200",
      status: "Settled",
    },
    {
      title: "Dinner Order",
      paidBy: "You",
      date: "19 Nov 2026",
      total: "₹900",
      yourShare: "₹300",
      status: "Waiting for others",
    },
  ];

  return (
    <DashboardLayout role="resident">
      <div className="space-y-7 mx-10">
        <div>
          <p className="text-sm font-medium text-[#A477B5]">PAYMENTS</p>
          <h1 className="mt-1 text-2xl font-bold text-[#34243D]">
            Rent & Expenses
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Keep track of your rent, property bills and shared expenses.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl border border-[#F0E7F3] bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Monthly Rent</p>
            <h2 className="mt-3 text-2xl font-bold text-[#34243D]">₹6,500</h2>
            <p className="mt-2 text-xs text-gray-400">Your monthly room rent</p>
          </div>

          <div className="rounded-2xl border border-[#F0E7F3] bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Pending Bills</p>
            <h2 className="mt-3 text-2xl font-bold text-orange-500">₹6,950</h2>
            <p className="mt-2 text-xs text-gray-400">
              Rent and property charges
            </p>
          </div>

          <div className="rounded-2xl border border-[#F0E7F3] bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Your Shared Expenses</p>
            <h2 className="mt-3 text-2xl font-bold text-[#79558A]">₹400</h2>
            <p className="mt-2 text-xs text-gray-400">Your outstanding share</p>
          </div>

          <div className="rounded-2xl border border-[#F0E7F3] bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Total Paid</p>
            <h2 className="mt-3 text-2xl font-bold text-green-600">₹6,500</h2>
            <p className="mt-2 text-xs text-gray-400">
              Payments made this month
            </p>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#F0E7F3] bg-white shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#F0E7F3] p-6">
            <div>
              <h2 className="font-bold text-[#34243D]">
                Rent & Property Bills
              </h2>
              <p className="mt-1 text-xs text-gray-400">
                Bills assigned by your property manager.
              </p>
            </div>

            <span className="rounded-full bg-[#F4EAF7] px-3 py-1 text-xs font-semibold text-[#79558A]">
              Property Payments
            </span>
          </div>

          <div className="divide-y divide-[#F0E7F3]">
            {rentBills.map((bill, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 p-5 transition hover:bg-[#FCF9FD] sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F4EAF7] text-xl">
                    {bill.icon}
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#493951]">
                      {bill.title}
                    </h3>
                    <p className="mt-1 text-xs text-gray-400">
                      {bill.description}
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      Due: {bill.dueDate}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between gap-4 sm:justify-end">
                  <div className="text-right">
                    <h3 className="font-bold text-[#34243D]">{bill.amount}</h3>

                    <span
                      className={`mt-1 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                        bill.status === "Paid"
                          ? "bg-green-50 text-green-600"
                          : "bg-orange-50 text-orange-600"
                      }`}
                    >
                      {bill.status}
                    </span>
                  </div>

                  {bill.status === "Pending" && (
                    <button className="rounded-lg bg-[#79558A] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#624271]">
                      Pay Now
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#F0E7F3] bg-white shadow-sm">
          <div className="flex flex-col gap-4 border-b border-[#F0E7F3] p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-bold text-[#34243D]">
                Roommate Shared Expenses
              </h2>
              <p className="mt-1 text-xs text-gray-400">
                Track expenses shared between you and your roommates.
              </p>
            </div>

            <button
              onClick={() => setShowAddExpense(true)}
              className="rounded-xl bg-[#765184] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#60406F]"
            >
              + Add Expense
            </button>
          </div>

          <div className="divide-y divide-[#F0E7F3]">
            {sharedExpenses.map((expense, index) => (
              <div
                key={index}
                className="flex flex-col gap-4 p-5 transition hover:bg-[#FCF9FD] sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="text-sm font-bold text-[#493951]">
                    {expense.title}
                  </h3>

                  <p className="mt-1 text-xs text-gray-400">
                    Paid by {expense.paidBy} · {expense.date}
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    Total expense: {expense.total}
                  </p>
                </div>

                <div className="flex items-center justify-between gap-5 sm:justify-end">
                  <div className="text-right">
                    <p className="text-xs text-gray-400">Your Share</p>
                    <h3 className="mt-1 font-bold text-[#34243D]">
                      {expense.yourShare}
                    </h3>

                    <span
                      className={`mt-1 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                        expense.status === "Settled"
                          ? "bg-green-50 text-green-600"
                          : expense.status === "You owe"
                            ? "bg-orange-50 text-orange-600"
                            : "bg-blue-50 text-blue-600"
                      }`}
                    >
                      {expense.status}
                    </span>
                  </div>

                  {expense.status === "You owe" && (
                    <button className="rounded-lg border border-[#DCC9E5] px-4 py-2 text-xs font-semibold text-[#79558A] transition hover:bg-[#F8F1FA]">
                      Settle Up
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-[#F0E7F3] bg-[#FAF6FC] p-4">
            <p className="text-xs leading-5 text-gray-500">
              <span className="font-semibold text-[#79558A]">Note:</span>{" "}
              Roommate shared expenses are private to the residents involved.
              They are separate from property rent and bills.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-[#F0E7F3] bg-white p-6 shadow-sm">
          <h2 className="font-bold text-[#34243D]">Payment History</h2>
          <p className="mt-1 text-xs text-gray-400">
            Your recent property payment records.
          </p>

          <div className="mt-5 overflow-x-auto">
            <table className="w-full min-w-137.5 text-left">
              <thead className="bg-[#FAF6FC] text-xs uppercase tracking-wide text-gray-500">
                <tr>
                  <th className="rounded-l-lg px-4 py-3 font-semibold">
                    Payment
                  </th>
                  <th className="px-4 py-3 font-semibold">Date</th>
                  <th className="px-4 py-3 font-semibold">Amount</th>
                  <th className="rounded-r-lg px-4 py-3 font-semibold">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#F0E7F3]">
                <tr>
                  <td className="px-4 py-4 text-sm font-medium text-[#493951]">
                    November Rent
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-500">
                    03 Nov 2026
                  </td>
                  <td className="px-4 py-4 text-sm font-semibold text-[#34243D]">
                    ₹6,500
                  </td>
                  <td className="px-4 py-4">
                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                      Successful
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <AddExpenseModal
        isOpen={showAddExpense}
        onClose={() => setShowAddExpense(false)}
      />
    </DashboardLayout>
  );
};

export default RentExpenses;
