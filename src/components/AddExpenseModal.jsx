import React from "react";

const AddExpenseModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#21152c]/50 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
        <div className="flex items-start justify-between border-b border-purple-100 bg-[#FAF7FC] px-7 py-5">
          <div>
            <p className="text-sm font-semibold text-[#9B78A8]">
              ROOMMATE EXPENSES
            </p>

            <h2 className="mt-1 text-2xl font-extrabold text-[#493951]">
              Add Shared Expense
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Record an expense and split it with your roommates.
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 text-gray-400 transition hover:bg-purple-100 hover:text-[#493951]"
          >
            <span className="text-2xl leading-none">&times;</span>
          </button>
        </div>

        <div className="space-y-5 px-7 py-6">
          <div>
            <label className="mb-2 block text-sm font-bold text-[#493951]">
              Expense Title
            </label>

            <input
              type="text"
              placeholder="e.g. Grocery Shopping"
              className="w-full rounded-xl border border-purple-100 bg-[#FCFAFD] px-4 py-3 text-sm outline-none transition focus:border-[#A77BB5]"
            />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-bold text-[#493951]">
                Total Amount
              </label>

              <div className="flex items-center rounded-xl border border-purple-100 bg-[#FCFAFD] px-4 focus-within:border-[#A77BB5]">
                <span className="mr-2 font-bold text-[#9B78A8]">₹</span>
                <input
                  type="number"
                  placeholder="0.00"
                  className="w-full bg-transparent py-3 text-sm outline-none"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold text-[#493951]">
                Expense Date
              </label>

              <input
                type="date"
                className="w-full rounded-xl border border-purple-100 bg-[#FCFAFD] px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#A77BB5]"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#493951]">
              Paid By
            </label>

            <select className="w-full rounded-xl border border-purple-100 bg-[#FCFAFD] px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#A77BB5]">
              <option>Select who paid</option>
              <option>You</option>
              <option>Ananya S</option>
              <option>Meera K</option>
              <option>Diya R</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#493951]">
              Split With
            </label>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {["You", "Ananya S", "Meera K", "Diya R"].map((person) => (
                <label
                  key={person}
                  className="flex cursor-pointer items-center gap-2 rounded-xl border border-purple-100 bg-[#FCFAFD] px-3 py-3 text-sm text-[#493951] transition hover:border-[#B48BC0]"
                >
                  <input type="checkbox" className="h-4 w-4 accent-[#88639A]" />
                  {person}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#493951]">
              Split Type
            </label>

            <div className="grid grid-cols-2 gap-3">
              <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-[#B48BC0] bg-[#F7F0FA] px-4 py-3 text-sm font-semibold text-[#684A77]">
                <input
                  type="radio"
                  name="splitType"
                  defaultChecked
                  className="accent-[#88639A]"
                />
                Equal Split
              </label>

              <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-purple-100 bg-[#FCFAFD] px-4 py-3 text-sm font-semibold text-[#684A77]">
                <input
                  type="radio"
                  name="splitType"
                  className="accent-[#88639A]"
                />
                Custom Split
              </label>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#493951]">
              Description{" "}
              <span className="font-normal text-gray-400">(Optional)</span>
            </label>

            <textarea
              rows="3"
              placeholder="Add a short note about this expense..."
              className="w-full resize-none rounded-xl border border-purple-100 bg-[#FCFAFD] px-4 py-3 text-sm outline-none focus:border-[#A77BB5]"
            />
          </div>
        </div>

        <div className="flex flex-col-reverse justify-end gap-3 border-t border-purple-100 bg-[#FAF7FC] px-7 py-5 sm:flex-row">
          <button
            onClick={onClose}
            className="rounded-xl border border-purple-200 px-6 py-3 text-sm font-bold text-[#684A77] transition hover:bg-purple-50"
          >
            Cancel
          </button>

          <button
            type="button"
            className="rounded-xl bg-[#765184] px-7 py-3 text-sm font-bold text-white shadow-md shadow-purple-200 transition hover:bg-[#60406F]"
          >
            Add Expense
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddExpenseModal;
