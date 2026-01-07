import React from 'react';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-32 bg-[#0c0a09] text-white relative overflow-hidden border-t border-stone-900">
      {/* Decorative Gradients */}
      <div className="absolute top-0 left-1/4 w-1/2 h-full bg-stone-800/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-10 text-stone-100">
              Empowering the next wave <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-400 to-stone-600">
                of digital innovation.
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-stone-400 max-w-3xl mx-auto leading-relaxed">
                We believe that the best way to predict the future is to create it. 
                Barek Technologies isn't just building products; we are building the infrastructure 
                for a smarter, more connected world.
            </p>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-stone-800 pt-12">
            {[
                { label: "Products Launched", value: "12+" },
                { label: "Active Users", value: "2.5M" },
                { label: "Global Markets", value: "30+" },
                { label: "Team Size", value: "45" },
            ].map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center">
                    <span className="text-3xl sm:text-4xl font-bold text-stone-200 mb-2">{stat.value}</span>
                    <span className="text-sm text-stone-500 uppercase tracking-wider font-medium">{stat.label}</span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
