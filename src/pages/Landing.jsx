
import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Landing = () => {
  return (
    <div className="min-h-screen bg-[#FCF9FF] text-[#28143F]">
      <Header />

      <section
        id="home"
        className="relative overflow-hidden bg-linear-to-br from-[#F5EAFE] via-[#FFF5F8] to-[#FDF1F5] px-8 py-20"
      >
     
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-purple-200/30 blur-3xl"></div>
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-pink-200/40 blur-3xl"></div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">

          <div>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-200 bg-white/70 px-4 py-2 text-sm font-semibold text-purple-800 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-pink-500"></span>
              A smarter way to live together
            </span>

            <h1 className="max-w-xl text-5xl font-extrabold leading-[1.15] tracking-tight text-[#32164F] md:text-6xl">
              Shared living,
              <span className="block text-[#9B5BCB]">
                perfectly in sync.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-8 text-gray-600">
              From rent payments to roommate expenses and maintenance
              requests, manage your shared space effortlessly — all in
              one place.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/register"
                className="rounded-full bg-[#713A9B] px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-200 transition hover:-translate-y-1 hover:bg-[#5E2D85]"
              >
                Get Started →
              </Link>

              <a
                href="#howitworks"
                className="rounded-full border border-purple-300 bg-white/80 px-8 py-3.5 text-sm font-bold text-purple-900 transition hover:bg-purple-50"
              >
                Explore How It Works
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 border-t border-purple-200/70 pt-7">
              <div>
                <p className="text-2xl font-extrabold text-purple-900">01</p>
                <p className="mt-1 text-sm text-gray-500">One shared space</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-purple-900">02</p>
                <p className="mt-1 text-sm text-gray-500">Simpler payments</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-purple-900">03</p>
                <p className="mt-1 text-sm text-gray-500">Better coordination</p>
              </div>
            </div>
          </div>

       
          <div className="relative mx-auto w-full max-w-xl">
       
            <div className="relative rounded-4xl border border-white/80 bg-white/70 p-5 shadow-2xl shadow-purple-200/60 backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-purple-100 pb-4">
                <div>
                  <p className="text-sm font-bold text-purple-950">
                    Your shared space
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Everything under one roof
                  </p>
                </div>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  ● All in sync
                </span>
              </div>

              <div className="relative mt-5 flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-[#EADCF8] via-[#F9E8F2] to-[#FDE5E8]">
                <div className="absolute bottom-0 h-20 w-full bg-[#D8BCEB]/50"></div>
                
                <div className="relative z-10 w-52 rounded-t-2xl border-4 border-[#8C5BAA] bg-[#FFF9FF] p-4 shadow-xl">
                  <div className="mb-3 flex justify-center">
                    <div className="h-5 w-16 rounded-b-lg bg-[#8C5BAA]"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="h-14 rounded-lg border-2 border-purple-200 bg-[#DCC4F0]">
                      <div className="mx-auto mt-3 h-5 w-5 rounded-sm bg-[#9A6BC0]"></div>
                    </div>
                    <div className="h-14 rounded-lg border-2 border-purple-200 bg-[#DCC4F0]">
                      <div className="mx-auto mt-3 h-5 w-5 rounded-sm bg-[#9A6BC0]"></div>
                    </div>
                    <div className="h-14 rounded-lg border-2 border-purple-200 bg-[#DCC4F0]">
                      <div className="mx-auto mt-3 h-5 w-5 rounded-sm bg-[#9A6BC0]"></div>
                    </div>
                    <div className="h-14 rounded-lg border-2 border-purple-200 bg-[#DCC4F0]">
                      <div className="mx-auto mt-3 h-5 w-5 rounded-sm bg-[#9A6BC0]"></div>
                    </div>
                  </div>
                  <div className="mx-auto mt-3 h-10 w-12 rounded-t-lg bg-[#9B6DB8]"></div>
                </div>

                <div className="absolute bottom-4 left-7 text-3xl">🌿</div>
                <div className="absolute bottom-4 right-7 text-3xl">🪴</div>
                <div className="absolute right-12 top-7 text-3xl">☁️</div>
              </div>

            
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-[#F5EDFB] p-4">
                  <p className="text-xs font-medium text-gray-500">
                    Monthly rent
                  </p>
                  <p className="mt-1 text-xl font-extrabold text-purple-950">
                    ₹8,000
                  </p>
                  <p className="mt-1 text-xs text-green-600">
                    ✓ Payment tracked
                  </p>
                </div>
                <div className="rounded-xl bg-[#FFF0F3] p-4">
                  <p className="text-xs font-medium text-gray-500">
                    Shared expenses
                  </p>
                  <p className="mt-1 text-xl font-extrabold text-purple-950">
                    ₹1,250
                  </p>
                  <p className="mt-1 text-xs text-pink-600">
                    Split with roommates
                  </p>
                </div>
              </div>
            </div>

          
            <div className="absolute -left-8 top-24 hidden rounded-2xl border border-purple-100 bg-white p-4 shadow-xl md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-xl">
                  ✓
                </div>
                <div>
                  <p className="text-sm font-bold text-purple-950">
                    Rent paid!
                  </p>
                  <p className="text-xs text-gray-500">
                    Payment recorded
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-7 bottom-24 hidden rounded-2xl border border-pink-100 bg-white p-4 shadow-xl md:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-100 text-xl">
                  🔔
                </div>
                <div>
                  <p className="text-sm font-bold text-purple-950">
                    New notice
                  </p>
                  <p className="text-xs text-gray-500">
                    From your property manager
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    
      <section id="features" className="px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#A36BC5]">
              Everything in one place
            </span>
            <h2 className="mt-3 text-4xl font-extrabold text-[#32164F]">
              Shared living, made simpler.
            </h2>
            <p className="mt-4 leading-7 text-gray-600">
              Keep your accommodation organised without juggling
              multiple apps, messages and spreadsheets.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            <div className="rounded-3xl border border-purple-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-100 text-2xl">🏠</div>
              <h3 className="mt-5 text-xl font-bold text-purple-950">Accommodation</h3>
              <p className="mt-3 leading-7 text-gray-600">
                Keep property, room and roommate details organised in one place.
              </p>
            </div>

            <div className="rounded-3xl border border-purple-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-pink-100 text-2xl">💳</div>
              <h3 className="mt-5 text-xl font-bold text-purple-950">Rent & Bills</h3>
              <p className="mt-3 leading-7 text-gray-600">
                Track rent, property bills, due dates and payment records with ease.
              </p>
            </div>

            <div className="rounded-3xl border border-purple-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-2xl">🧾</div>
              <h3 className="mt-5 text-xl font-bold text-purple-950">Shared Expenses</h3>
              <p className="mt-3 leading-7 text-gray-600">
                Split everyday expenses with roommates and keep track of everyone's share.
              </p>
            </div>

            <div className="rounded-3xl border border-purple-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-2xl">🛠️</div>
              <h3 className="mt-5 text-xl font-bold text-purple-950">Maintenance Requests</h3>
              <p className="mt-3 leading-7 text-gray-600">
                Raise complaints and follow their progress without chasing updates.
              </p>
            </div>

            <div className="rounded-3xl border border-purple-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-100 text-2xl">📢</div>
              <h3 className="mt-5 text-xl font-bold text-purple-950">Notices & Updates</h3>
              <p className="mt-3 leading-7 text-gray-600">
                Stay informed with important announcements from your manager.
              </p>
            </div>

            <div className="rounded-3xl border border-purple-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-100">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-2xl">🔔</div>
              <h3 className="mt-5 text-xl font-bold text-purple-950">Notifications</h3>
              <p className="mt-3 leading-7 text-gray-600">
                Never miss a due date, expense reminder or important update.
              </p>
            </div>

          </div>
        </div>
      </section>

     
      <section id="about" className="bg-[#F7F0FC] px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#A36BC5]">
              Made for shared spaces
            </span>
            <h2 className="mt-3 text-4xl font-extrabold text-[#32164F]">
              One platform. Two perspectives.
            </h2>
            <p className="mt-4 text-gray-600">
              RoomSync brings residents and property managers together.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-purple-100 bg-white p-9 shadow-sm">
              <div className="text-4xl">🧑‍🤝‍🧑</div>
              <h3 className="mt-5 text-2xl font-bold text-purple-950">For Residents</h3>
              <p className="mt-3 leading-7 text-gray-600">
                Manage your accommodation, keep up with rent and bills,
                split roommate expenses, raise complaints and stay updated.
              </p>
              <Link to="/register" className="mt-6 inline-block font-bold text-purple-700 hover:text-pink-600">
                Get started as a resident →
              </Link>
            </div>

            <div className="rounded-3xl border border-purple-100 bg-white p-9 shadow-sm">
              <div className="text-4xl">🏢</div>
              <h3 className="mt-5 text-2xl font-bold text-purple-950">For Property Managers</h3>
              <p className="mt-3 leading-7 text-gray-600">
                Organise properties, rooms and residents, manage rent and
                bills, respond to complaints and share official notices.
              </p>
              <Link to="/register" className="mt-6 inline-block font-bold text-purple-700 hover:text-pink-600">
                Get started as a manager →
              </Link>
            </div>
          </div>
        </div>
      </section>

     
      <section id="howitworks" className="px-8 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#A36BC5]">
              Simple to get started
            </span>
            <h2 className="mt-3 text-4xl font-extrabold text-[#32164F]">
              Get your space in sync.
            </h2>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100 text-2xl font-extrabold text-purple-800">01</div>
              <h3 className="mt-5 text-xl font-bold text-purple-950">Create or Join</h3>
              <p className="mt-3 leading-7 text-gray-600">
                Managers create a property. Residents join using an invitation code.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-pink-100 text-2xl font-extrabold text-pink-700">02</div>
              <h3 className="mt-5 text-xl font-bold text-purple-950">Manage Together</h3>
              <p className="mt-3 leading-7 text-gray-600">
                Keep track of rent, bills, shared expenses and maintenance requests.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-2xl font-extrabold text-orange-700">03</div>
              <h3 className="mt-5 text-xl font-bold text-purple-950">Stay in Sync</h3>
              <p className="mt-3 leading-7 text-gray-600">
                Receive updates, follow notices and keep everyone on the same page.
              </p>
            </div>
          </div>
        </div>
      </section>

    
      <section className="bg-[#FFF5F7] px-8 py-20">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-3xl font-extrabold text-[#32164F]">
            A better way to manage shared living.
          </h2>
          <p className="mt-4 text-gray-600">
            Wherever people share a space, RoomSync helps keep things organised.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {['PG Accommodation', 'Hostels', 'Shared Apartments', 'Co-living Spaces'].map((item) => (
              <span key={item} className="rounded-full border border-purple-200 bg-white px-6 py-3 text-sm font-semibold text-purple-900 shadow-sm">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

    
      <section className="px-8 py-20">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-4xl bg-linear-to-br from-[#64358C] to-[#A65FAD] px-8 py-16 text-center shadow-xl shadow-purple-200 md:px-16">
          <h2 className="text-3xl font-extrabold text-white md:text-4xl">
            Ready to bring your space together?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-purple-100">
            Make shared living easier with organised payments, clear updates
            and better coordination.
          </p>
          <Link
            to="/register"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3.5 text-sm font-bold text-purple-900 shadow-lg transition hover:-translate-y-1 hover:bg-purple-50"
          >
            Get Started with RoomSync →
          </Link>
        </div>
      </section>


      <Footer />

    </div>
  )
}

export default Landing
