import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center container mx-auto">
        <h1 className="text-xl font-bold">Register Karo</h1>
        <nav>
          <ul className="flex gap-4">
            <li><a href="#features" className="text-gray-700 hover:text-blue-500">Features</a></li>
            <li><a href="#pricing" className="text-gray-700 hover:text-blue-500">Pricing</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-blue-500">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center py-20 bg-blue-600 text-white">
        <h2 className="text-4xl font-bold">Register Your Business with Ease</h2>
        <p className="mt-4 text-lg">Fast, Reliable, and Affordable Business Registration Services.</p>
        <button className="mt-6 px-6 py-2 bg-white text-blue-600 font-semibold rounded-lg">Get Started</button>
      </section>

      {/* Features */}
      <section id="features" className="container mx-auto py-16">
        <h3 className="text-2xl font-bold text-center">Our Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold">Easy Registration</h4>
            <p className="text-gray-600">Simple steps to get your business registered hassle-free.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold">24/7 Support</h4>
            <p className="text-gray-600">Get help whenever you need it, round the clock.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold">Affordable Pricing</h4>
            <p className="text-gray-600">Best value packages for your business registration.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-10">
        <p>&copy; 2025 Register Karo. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
