import React from "react";
import { Link } from "react-router-dom";
import DashboardLayout from "../../components/DashboardLayout";

const Notices = () => {
  const notices = [
    {
      id: 1,
      title: "December Rent Payment",
      description:
        "Your December monthly rent payment is due on 5 December. Please complete your payment before the due date.",
      category: "Rent Due",
      date: "24 Nov 2026",
      time: "10:30 AM",
      icon: "🏠",
      amount: "₹6,500",
      dueDate: "05 Dec 2026",
    },
    {
      id: 2,
      title: "Electricity Bill Contribution",
      description:
        "Your share of the property electricity bill has been announced. Please check your pending payments.",
      category: "Bill / Expense",
      date: "23 Nov 2026",
      time: "03:15 PM",
      icon: "⚡",
      amount: "₹450",
      dueDate: "05 Dec 2026",
    },
    {
      id: 3,
      title: "Water Tank Cleaning",
      description:
        "The overhead water tank will be cleaned on Sunday. Water supply may be unavailable between 9 AM and 12 PM. Kindly store enough water in advance.",
      category: "Maintenance",
      date: "22 Nov 2026",
      time: "02:15 PM",
      icon: "🔧",
    },
    {
      id: 4,
      title: "Common Area Guidelines",
      description:
        "Please keep the common areas clean and avoid leaving personal belongings in shared spaces. Let us maintain a comfortable environment for everyone.",
      category: "General Announcement",
      date: "20 Nov 2026",
      time: "11:00 AM",
      icon: "📢",
    },
    {
      id: 5,
      title: "Internet Maintenance",
      description:
        "Wi-Fi service may experience temporary interruptions on Friday between 1 PM and 2 PM due to scheduled network maintenance.",
      category: "Maintenance",
      date: "18 Nov 2026",
      time: "09:45 AM",
      icon: "📶",
    },
  ];

  const sharedExpenseUpdates = [
    {
      id: 1,
      title: "Grocery Shopping",
      addedBy: "Ananya S",
      date: "23 Nov 2026",
      total: "₹1,200",
      yourShare: "₹400",
      status: "Payment Due",
    },
    {
      id: 2,
      title: "Cleaning Supplies",
      addedBy: "Meera K",
      date: "21 Nov 2026",
      total: "₹600",
      yourShare: "₹200",
      status: "Settled",
    },
  ];

  return (
    <DashboardLayout role="resident">
      <div className="mx-10 space-y-7">
        <div>
          <p className="text-sm font-medium tracking-wide text-[#A477B5]">
            RESIDENT PORTAL
          </p>
          <h1 className="mt-1 text-2xl font-bold text-[#34243D]">
            Notices & Announcements
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Stay informed about property updates and shared expenses.
          </p>
        </div>

        <div className="flex flex-col gap-4 rounded-2xl border border-[#E8D8EF] bg-linear-to-r from-[#F8EFFB] to-[#FDF8FC] p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm">
              <span>🧾</span>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wide text-[#A477B5]">
                Shared Living Updates
              </p>
              <h2 className="mt-1 font-bold text-[#493951]">
                Roommate expenses appear here too
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-500">
                When a roommate adds an expense involving you, you'll see your
                share and payment status here.
              </p>
            </div>
          </div>

          <Link
            to="/resident/expenses"
            className="shrink-0 rounded-xl bg-[#79558A] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#624271]"
          >
            View Expenses
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#F0E7F3] bg-white shadow-sm">
          <div className="flex flex-col gap-4 border-b border-[#F0E7F3] p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-[#34243D]">Property Notices</h2>
                <span className="rounded-full bg-[#F4EAF7] px-2.5 py-1 text-xs font-semibold text-[#79558A]">
                  05 Updates
                </span>
              </div>
              <p className="mt-1 text-xs text-gray-400">
                Official announcements from your property manager.
              </p>
            </div>

            <select className="rounded-xl border border-[#E9DFED] bg-white px-4 py-2.5 text-sm text-gray-600 outline-none focus:border-[#A477B5]">
              <option>All Categories</option>
              <option>Rent Due</option>
              <option>Bill / Expense</option>
              <option>Payment Reminder</option>
              <option>General Announcement</option>
              <option>Maintenance</option>
              <option>Emergency</option>
              <option>Event</option>
            </select>
          </div>

          <div className="divide-y divide-[#F0E7F3]">
            {notices.map((notice) => (
              <div
                key={notice.id}
                className="p-6 transition hover:bg-[#FCF9FD]"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#F4EAF7] text-xl">
                    {notice.icon}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold text-[#493951]">
                        {notice.title}
                      </h3>

                      <span className="rounded-full bg-[#F4EAF7] px-3 py-1 text-xs font-semibold text-[#79558A]">
                        {notice.category}
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {notice.description}
                    </p>

                    {notice.amount && (
                      <div className="mt-4 flex flex-wrap gap-6 rounded-xl bg-[#FAF6FC] p-4">
                        <div>
                          <p className="text-xs text-gray-400">Amount Due</p>
                          <p className="mt-1 font-bold text-[#493951]">
                            {notice.amount}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs text-gray-400">
                            Payment Due Date
                          </p>
                          <p className="mt-1 font-semibold text-[#493951]">
                            {notice.dueDate}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-gray-400">
                      <span>{notice.date}</span>
                      <span>•</span>
                      <span>{notice.time}</span>
                      <span>•</span>
                      <span className="font-medium text-[#79558A]">
                        Property Manager
                      </span>
                    </div>

                    {notice.amount && (
                      <div className="mt-4">
                        <Link
                          to="/resident/expenses"
                          className="text-xs font-bold text-[#79558A] transition hover:text-[#493351]"
                        >
                          View Payment Details →
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-[#F0E7F3] bg-[#FCF9FD] p-4 text-center">
            <p className="text-xs text-gray-400">
              You're viewing announcements shared with you by your property
              manager.
            </p>
          </div>
        </div>

        {/* Roommate Shared Expense Updates */}
        <div className="overflow-hidden rounded-2xl border border-[#F0E7F3] bg-white shadow-sm">
          <div className="flex flex-col gap-3 border-b border-[#F0E7F3] p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-[#34243D]">
                  Shared Expense Updates
                </h2>
                <span className="rounded-full bg-[#FFF3E8] px-2.5 py-1 text-xs font-semibold text-[#C47A35]">
                  02 Updates
                </span>
              </div>
              <p className="mt-1 text-xs text-gray-400">
                Expenses added by your roommates that involve your share.
              </p>
            </div>

            <Link
              to="/resident/expenses"
              className="text-sm font-semibold text-[#79558A] hover:text-[#493351]"
            >
              Go to Rent & Expenses →
            </Link>
          </div>

          <div className="divide-y divide-[#F0E7F3]">
            {sharedExpenseUpdates.map((expense) => (
              <div
                key={expense.id}
                className="flex flex-col gap-4 p-6 transition hover:bg-[#FCF9FD] sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F4EAF7] text-lg">
                    🛒
                  </div>

                  <div>
                    <h3 className="font-bold text-[#493951]">
                      {expense.title}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Added by{" "}
                      <span className="font-semibold text-[#493951]">
                        {expense.addedBy}
                      </span>
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      {expense.date} · Total expense {expense.total}
                    </p>
                  </div>
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
                          : "bg-orange-50 text-orange-600"
                      }`}
                    >
                      {expense.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-[#F0E7F3] bg-[#FAF6FC] p-4">
            <p className="text-xs leading-5 text-gray-500">
              <span className="font-semibold text-[#79558A]">Note:</span>{" "}
              Roommate expenses are separate from official property rent and
              bills. Only expenses involving you are shown here.
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Notices;
