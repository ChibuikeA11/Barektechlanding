import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-24 bg-[#0c0a09] border-t border-stone-900">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="bg-[#1c1917] rounded-[2.5rem] p-12 md:p-20 text-center border border-stone-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-stone-700 via-stone-500 to-stone-700" />
            
            <h2 className="text-3xl sm:text-5xl font-bold text-stone-100 mb-6">
                Ready to see what's next?
            </h2>
            <p className="text-lg text-stone-400 max-w-2xl mx-auto mb-10">
                Explore our full portfolio of ventures or get in touch if you're a founder looking to collaborate with our studio.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-4 bg-stone-100 text-stone-900 rounded-full font-medium hover:bg-white transition-all shadow-xl hover:-translate-y-1">
                    Explore Our Ecosystem
                </button>
                <button className="px-8 py-4 bg-transparent text-stone-300 border border-stone-700 rounded-full font-medium hover:bg-stone-800 transition-all hover:border-stone-500">
                    Contact Studio
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;