import React from "react";
import DashboardLayout from "../../components/DashboardLayout";

const ManagerNotices = () => {
  const notices = [
    {
      title: "December Rent Payment",
      description:
        "Please complete your monthly rent payment before the due date.",
      date: "24 Nov 2026",
      category: "Rent Due",
      audience: "All Residents",
      amount: "₹6,500",
      dueDate: "05 Dec 2026",
      status: "Published",
    },
    {
      title: "Water Tank Cleaning",
      description:
        "The overhead water tank will be cleaned on Sunday. Water supply may be unavailable between 9 AM and 12 PM.",
      date: "22 Nov 2026",
      category: "Maintenance",
      audience: "All Residents",
      amount: "",
      dueDate: "",
      status: "Published",
    },
    {
      title: "Electricity Bill Contribution",
      description: "Please pay your share of the monthly electricity bill.",
      date: "20 Nov 2026",
      category: "Bill / Expense",
      audience: "Room 101",
      amount: "₹500",
      dueDate: "28 Nov 2026",
      status: "Published",
    },
  ];

  return (
    <DashboardLayout role="manager">
      <div className="space-y-7 mx-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-[#A477B5]">
            REMINDERS
          </p>

          <h1 className="mt-2 text-3xl font-extrabold text-[#34243D]">
            Notices & Announcements
          </h1>

          <p className="mt-2 text-sm text-[#897A90]">
            Share payment requests, important updates and announcements with
            residents.
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-[#EDE3F0] bg-white shadow-sm">
          <div className="border-b border-[#F1EAF3] bg-[#FBF8FC] px-6 py-5 sm:px-7">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F0E5F5] text-[#79558A]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.7"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 5v14m7-7H5"
                  />
                </svg>
              </div>

              <div>
                <h2 className="text-lg font-bold text-[#34243D]">
                  Create New Notice
                </h2>
                <p className="mt-1 text-xs text-[#A092A5]">
                  Compose a notice and choose who should receive it.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-7 p-6 sm:p-7">
            <div className="space-y-5">
              <div>
                <h3 className="text-sm font-bold text-[#493951]">
                  Notice Information
                </h3>
                <p className="mt-1 text-xs text-[#A092A5]">
                  Add a title and details for your announcement.
                </p>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#574460]">
                  Notice Title
                </label>

                <input
                  type="text"
                  placeholder="e.g. December Rent Payment"
                  className="w-full rounded-xl border border-[#E9DCEB] bg-[#FDFCFE] px-4 py-3 text-sm text-[#493951] outline-none transition placeholder:text-[#B7AABB] focus:border-[#A477B5] focus:ring-2 focus:ring-[#A477B5]/10"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#574460]">
                  Notice Category
                </label>

                <select className="w-full rounded-xl border border-[#E9DCEB] bg-[#FDFCFE] px-4 py-3 text-sm text-[#574460] outline-none transition focus:border-[#A477B5] focus:ring-2 focus:ring-[#A477B5]/10">
                  <option value="">Select notice category</option>
                  <option>Rent Due</option>
                  <option>Bill / Expense</option>
                  <option>Payment Reminder</option>
                  <option>General Announcement</option>
                  <option>Maintenance</option>
                  <option>Emergency</option>
                  <option>Event</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#574460]">
                  Description
                </label>

                <textarea
                  rows="4"
                  placeholder="Write the details of your notice here..."
                  className="w-full resize-none rounded-xl border border-[#E9DCEB] bg-[#FDFCFE] px-4 py-3 text-sm text-[#493951] outline-none transition placeholder:text-[#B7AABB] focus:border-[#A477B5] focus:ring-2 focus:ring-[#A477B5]/10"
                />
              </div>
            </div>

            <div className="rounded-2xl border border-[#F1DCCB] bg-[#FFFAF5] p-5 sm:p-6">
              <div className="mb-5 flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FBE9D9] text-[#C47D46]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.7"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 2v8m0 0v2m0-2c-1.657 0-3-.895-3-2m3 2c1.657 0 3-.895 3-2"
                    />
                  </svg>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#654735]">
                    Payment Details
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-[#A58470]">
                    Fill these details when announcing rent, bills or other
                    payment dues.
                  </p>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#765640]">
                    Amount (₹)
                  </label>

                  <input
                    type="number"
                    placeholder="Enter amount"
                    className="w-full rounded-xl border border-[#EBDACA] bg-white px-4 py-3 text-sm outline-none transition placeholder:text-[#BCA999] focus:border-[#D69A70] focus:ring-2 focus:ring-[#D69A70]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#765640]">
                    Payment Due Date
                  </label>

                  <input
                    type="date"
                    className="w-full rounded-xl border border-[#EBDACA] bg-white px-4 py-3 text-sm text-[#897A90] outline-none transition focus:border-[#D69A70] focus:ring-2 focus:ring-[#D69A70]/10"
                  />
                </div>
              </div>

              <p className="mt-4 text-xs leading-5 text-[#A58470]">
                For general announcements, payment details are not required.
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <h3 className="text-sm font-bold text-[#493951]">
                  Send Notice To
                </h3>
                <p className="mt-1 text-xs text-[#A092A5]">
                  Choose which residents should receive this notice.
                </p>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#574460]">
                  Select Recipients
                </label>

                <select className="w-full rounded-xl border border-[#E9DCEB] bg-[#FDFCFE] px-4 py-3 text-sm text-[#574460] outline-none transition focus:border-[#A477B5] focus:ring-2 focus:ring-[#A477B5]/10">
                  <option>All Residents</option>
                  <option>Specific Room</option>
                  <option>Specific Resident</option>
                </select>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#574460]">
                    Select Room
                  </label>

                  <select className="w-full rounded-xl border border-[#E9DCEB] bg-[#FDFCFE] px-4 py-3 text-sm text-[#574460] outline-none focus:border-[#A477B5]">
                    <option value="">Choose a room</option>
                    <option>Room 101</option>
                    <option>Room 102</option>
                    <option>Room 103</option>
                    <option>Room 104</option>
                    <option>Room 105</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#574460]">
                    Select Resident
                  </label>

                  <select className="w-full rounded-xl border border-[#E9DCEB] bg-[#FDFCFE] px-4 py-3 text-sm text-[#574460] outline-none focus:border-[#A477B5]">
                    <option value="">Choose a resident</option>
                    <option>Anjali Menon - Room 101</option>
                    <option>Meera S - Room 101</option>
                    <option>Akhila R - Room 102</option>
                    <option>Sneha K - Room 103</option>
                    <option>Nila Thomas - Room 105</option>
                  </select>
                </div>
              </div>

              <div className="rounded-xl border border-[#E9E0ED] bg-[#FAF7FB] p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#906DA0] shadow-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.7"
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM7 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                      />
                    </svg>
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#574460]">
                      Recipient Information
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#97889D]">
                      All Residents sends the notice to everyone. Specific Room
                      sends it to residents of the selected room. Specific
                      Resident sends it to one chosen resident.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col-reverse justify-end gap-3 border-t border-[#F1EAF3] pt-6 sm:flex-row">
              <button
                type="button"
                className="rounded-xl border border-[#E5D9E9] bg-white px-6 py-3 text-sm font-bold text-[#79558A] transition hover:bg-[#FAF6FC]"
              >
                Save as Draft
              </button>

              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#79558A] px-7 py-3 text-sm font-bold text-white shadow-md shadow-[#79558A]/15 transition hover:bg-[#63416F] hover:shadow-lg"
              >
                Publish Notice
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl mx-50 mt-15 border border-[#F0E7F3] bg-white shadow-sm">
          <div className="flex flex-col justify-between gap-4 border-b border-[#F1EAF3] p-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-lg font-bold text-[#34243D]">
                Previous Notices
              </h2>
              <p className="mt-1 text-sm text-[#A092A5]">
                View previously shared notices and payment reminders.
              </p>
            </div>

            <select className="rounded-xl border border-[#E9DCEB] bg-[#FAF7FB] px-4 py-2.5 text-sm text-[#574460] outline-none focus:border-[#A477B5]">
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

          <div className="divide-y divide-[#F3EDF5] ">
            {notices.map((notice, index) => (
              <div
                key={index}
                className="p-5 transition hover:bg-[#FCFAFD] sm:p-6"
              >
                <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
                  <div className="flex gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-xl ${
                        notice.category === "Rent Due"
                          ? "bg-[#FFF0E5] text-[#C47D46]"
                          : notice.category === "Bill / Expense"
                            ? "bg-[#EAF4FA] text-[#5687A5]"
                            : "bg-[#F3EAF7] text-[#79558A]"
                      }`}
                    >
                      {notice.category === "Rent Due"
                        ? "₹"
                        : notice.category === "Bill / Expense"
                          ? "🧾"
                          : notice.category === "Maintenance"
                            ? "🔧"
                            : "📢"}
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-bold text-[#493951]">
                        {notice.title}
                      </h3>

                      <p className="mt-2 max-w-2xl text-sm leading-6 text-[#897A90]">
                        {notice.description}
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-[#A092A5]">
                        <span>{notice.date}</span>
                        <span>•</span>
                        <span>{notice.audience}</span>
                      </div>

                      {notice.amount && (
                        <div className="mt-4 flex flex-wrap gap-3">
                          <span className="rounded-lg bg-[#FFF5EB] px-3 py-2 text-xs font-bold text-[#B87946]">
                            Amount: {notice.amount}
                          </span>

                          <span className="rounded-lg bg-[#F1EBF7] px-3 py-2 text-xs font-bold text-[#79558A]">
                            Due: {notice.dueDate}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex shrink-0 flex-wrap items-center gap-2 lg:justify-end">
                    <span className="rounded-full bg-[#F3EAF7] px-3 py-1.5 text-xs font-bold text-[#79558A]">
                      {notice.category}
                    </span>

                    <span className="rounded-full bg-[#EAF7F0] px-3 py-1.5 text-xs font-bold text-[#4D9871]">
                      {notice.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-[#F1EAF3] px-6 py-4 text-xs text-[#A092A5]">
            Showing 3 sample notices
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ManagerNotices;
