import React from "react";
import DashboardLayout from "../../components/DashboardLayout";

const Complaints = () => {
  const complaints = [
    {
      id: "CMP001",
      title: "Bathroom tap leakage",
      category: "Plumbing",
      date: "22 Nov 2026",
      status: "Pending",
      description: "Water is continuously leaking from the bathroom tap.",
    },
    {
      id: "CMP002",
      title: "Fan not working",
      category: "Electrical",
      date: "18 Nov 2026",
      status: "In Progress",
      description: "The ceiling fan in the room is not working properly.",
    },
    {
      id: "CMP003",
      title: "Room light replacement",
      category: "Electrical",
      date: "10 Nov 2026",
      status: "Resolved",
      description: "The room light was not functioning.",
    },
  ];

  return (
    <DashboardLayout role="resident">
      <div className="mx-10 space-y-7">
        <div>
          <p className="text-sm font-medium tracking-wide text-[#A477B5]">
            COMPLAINT PORTAL
          </p>
          <h1 className="mt-1 text-2xl font-bold text-[#34243D]">
            Complaints & Maintenance
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Report accommodation issues and keep track of their progress.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="flex flex-col justify-between rounded-2xl bg-linear-to-br from-[#493351] to-[#79558A] p-6 text-white shadow-sm">
            <div>
              <p className="text-sm font-medium text-white/70">
                Your Complaint Overview
              </p>
              <h2 className="mt-4 text-5xl font-bold">05</h2>
              <p className="mt-2 text-sm text-white/75">
                Total maintenance requests submitted
              </p>
            </div>

            <div className="mt-7 border-t border-white/20 pt-4">
              <p className="text-xs leading-5 text-white/75">
                Stay updated on the progress of your reported accommodation
                issues.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-[#F0E7F3] bg-white p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="font-bold text-[#34243D]">Complaint Status</h2>
              <p className="mt-1 text-xs text-gray-400">
                Overview of your submitted requests
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#bf0f0f]"></span>
                    <span className="text-sm font-semibold text-[#493951]">
                      Pending
                    </span>
                  </div>
                  <span className="text-sm font-bold text-[#34243D]">01</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full w-[20%] rounded-full bg-[#bf0f0f]"></div>
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#4c84cd]"></span>
                    <span className="text-sm font-semibold text-[#493951]">
                      In Progress
                    </span>
                  </div>
                  <span className="text-sm font-bold text-[#34243D]">01</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full w-[20%] rounded-full bg-[#4c84cd]"></div>
                </div>
              </div>

              <div>
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#0da152]"></span>
                    <span className="text-sm font-semibold text-[#493951]">
                      Resolved
                    </span>
                  </div>
                  <span className="text-sm font-bold text-[#34243D]">03</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full w-[60%] rounded-full bg-[#0da152]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-hidden mx-60 mt-15 rounded-2xl border border-[#F0E7F3] bg-white shadow-sm">
          <div className="border-b border-[#F0E7F3] bg-[#FCF9FD] px-10 py-7">
            <h2 className="text-lg font-bold text-[#34243D]">
              Submit a Complaint
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              Let your property manager know about an issue that needs
              attention.
            </p>
          </div>

          <div className="p-9 ">
            <form className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#493951]">
                    Complaint Title
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Bathroom tap leakage"
                    className="w-full rounded-xl border border-[#E9DFED] px-4 py-3 text-sm outline-none transition focus:border-[#A477B5]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#493951]">
                    Category
                  </label>
                  <select className="w-full rounded-xl border border-[#E9DFED] bg-white px-4 py-3 text-sm text-gray-500 outline-none focus:border-[#A477B5]">
                    <option value="">Select category</option>
                    <option>Plumbing</option>
                    <option>Electrical</option>
                    <option>Cleaning</option>
                    <option>Furniture</option>
                    <option>Internet</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#493951]">
                    Description
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Describe the issue in detail..."
                    className="w-full resize-none rounded-xl border border-[#E9DFED] px-4 py-3 text-sm outline-none transition focus:border-[#A477B5]"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#493951]">
                    Room Number
                  </label>
                  <input
                    type="text"
                    value="Room 102"
                    readOnly
                    className="w-full rounded-xl border border-[#E9DFED] bg-[#FAF6FC] px-4 py-3 text-sm text-gray-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#493951]">
                  Attach Image{" "}
                  <span className="font-normal text-gray-400">(Optional)</span>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="w-full rounded-xl border border-[#E9DFED] bg-white px-4 py-3 text-sm text-gray-500 file:mr-4 file:rounded-lg file:border-0 file:bg-[#F4EAF7] file:px-4 file:py-2 file:text-xs file:font-semibold file:text-[#79558A]"
                />
              </div>

              <div className="flex justify-end border-t border-[#F0E7F3] pt-5">
                <button
                  type="button"
                  className="rounded-xl bg-[#79558A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#624271]"
                >
                  Submit Complaint
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Complaint History */}
        <div className="overflow-hidden rounded-2xl border border-[#F0E7F3] bg-white shadow-sm">
          <div className="border-b border-[#F0E7F3] px-6 py-5">
            <h2 className="text-lg font-bold text-[#34243D]">My Complaints</h2>
            <p className="mt-1 text-sm text-gray-400">
              View your reported issues and their current status.
            </p>
          </div>

          <div className="divide-y divide-[#F0E7F3]">
            {complaints.map((complaint) => (
              <div
                key={complaint.id}
                className="p-6 transition hover:bg-[#FCF9FD]"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold text-[#493951]">
                        {complaint.title}
                      </h3>

                      <span className="rounded-full bg-[#F4EAF7] px-3 py-1 text-xs font-semibold text-[#79558A]">
                        {complaint.category}
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-gray-500">
                      {complaint.description}
                    </p>

                    <p className="mt-3 text-xs text-gray-400">
                      {complaint.id} <span className="mx-1">·</span> Submitted
                      on {complaint.date}
                    </p>
                  </div>

                  <div className="shrink-0">
                    <span
                      className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${
                        complaint.status === "Pending"
                          ? "bg-red-50 text-red-600"
                          : complaint.status === "In Progress"
                            ? "bg-blue-50 text-blue-600"
                            : "bg-green-50 text-green-600"
                      }`}
                    >
                      {complaint.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Complaints;
