import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Plus, Minus, RefreshCw } from 'lucide-react';

const locations = [
  { id: 'ny', label: 'New York', sub: 'Global HQ', top: '32%', left: '28%', isHQ: true },
  { id: 'sf', label: 'San Francisco', top: '35%', left: '15%' },
  { id: 'ldn', label: 'London', top: '26%', left: '48%' },
  { id: 'ber', label: 'Berlin', top: '28%', left: '51%' },
  { id: 'sin', label: 'Singapore', top: '55%', left: '78%' },
  { id: 'syd', label: 'Sydney', top: '75%', left: '88%' },
];

const GlobalReach: React.FC = () => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = -e.deltaY * 0.001;
      const newScale = Math.min(Math.max(1, scale + delta), 4);
      
      setScale(newScale);
      
      // Reset position if zoomed out to initial state
      if (newScale <= 1.05) {
        setScale(1);
        setPosition({ x: 0, y: 0 });
      }
    };

    container.addEventListener('wheel', onWheel, { passive: false });
    return () => container.removeEventListener('wheel', onWheel);
  }, [scale]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleZoomIn = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(Math.min(scale + 0.5, 4));
  };

  const handleZoomOut = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newScale = Math.max(1, scale - 0.5);
    setScale(newScale);
    if (newScale <= 1.05) setPosition({x:0, y:0});
  };

  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    setScale(1);
    setPosition({x:0, y:0});
  };

  return (
    <section className="py-24 bg-[#0c0a09] relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          <div className="max-w-xl">
            <span className="text-xs font-bold text-stone-500 tracking-widest uppercase mb-4 block">
              Culture
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
              Global Network of <br />
              <span className="text-stone-500">Companies.</span>
            </h2>
          </div>
          <div className="max-w-sm">
             <p className="text-stone-400 text-lg leading-relaxed">
               With a global network of experts and partners we are experienced in helping our clients succeed in a global marketplace.
             </p>
          </div>
        </div>

        {/* Map Container - Interactive */}
        <div 
            ref={containerRef}
            className={`relative w-full aspect-[16/9] md:aspect-[2/1] bg-[#0c0a09] rounded-3xl border border-white/5 shadow-2xl overflow-hidden mb-20 group ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
        >
            {/* Background Gradient - Static */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#141210] to-[#0c0a09] pointer-events-none z-0" />
            
            {/* Controls */}
            <div className="absolute bottom-6 right-6 z-30 flex flex-col gap-2">
                <button 
                  onClick={handleZoomIn} 
                  className="p-2 bg-stone-900/90 border border-stone-800 rounded-lg text-white hover:bg-stone-800 backdrop-blur-sm transition-colors"
                  aria-label="Zoom in"
                >
                    <Plus size={20}/>
                </button>
                <button 
                  onClick={handleZoomOut} 
                  className="p-2 bg-stone-900/90 border border-stone-800 rounded-lg text-white hover:bg-stone-800 backdrop-blur-sm transition-colors"
                  aria-label="Zoom out"
                >
                    <Minus size={20}/>
                </button>
                <button 
                   onClick={handleReset} 
                   className="p-2 bg-stone-900/90 border border-stone-800 rounded-lg text-white hover:bg-stone-800 backdrop-blur-sm transition-colors"
                   aria-label="Reset view"
                >
                    <RefreshCw size={20}/>
                </button>
            </div>

            {/* Transformable Content */}
            <div 
                className="w-full h-full relative transition-transform duration-100 ease-out origin-center will-change-transform"
                style={{ transform: `translate(${position.x}px, ${position.y}px) scale(${scale})` }}
            >
                {/* SVG Map */}
                <div className="absolute inset-0 flex items-center justify-center p-4 md:p-12 z-10 pointer-events-none">
                    <svg viewBox="0 0 1000 450" className="w-full h-full opacity-30">
                        <defs>
                            <pattern id="dots" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                                <circle cx="2" cy="2" r="1.5" className="fill-stone-500" />
                            </pattern>
                            <mask id="world-mask">
                                 <path fill="white" d="M152,86 C152,86 168,76 179,83 C184,85 198,82 198,82 C198,82 215,90 226,79 C228,77 245,69 253,74 C255,75 275,76 275,76 C275,76 295,89 292,106 C290,111 280,125 280,125 C280,125 258,126 250,137 C245,145 229,159 233,171 C234,175 240,183 246,183 C251,183 252,192 250,199 C249,204 250,214 246,219 C244,222 238,230 238,230 L234,258 L241,273 L245,291 C245,291 245,306 248,310 C250,314 252,328 248,333 C245,337 245,348 247,354 C247,354 260,361 260,361 L268,347 L276,346 C276,346 291,332 291,332 L297,322 L292,308 L314,302 C314,302 331,291 331,291 L368,264 L391,253 L408,247 L418,248 C418,248 426,227 426,227 C426,227 444,217 444,217 L442,199 L416,196 L403,197 L375,190 L363,184 L360,165 L328,155 L314,124 L295,116 L297,104 L318,89 L321,80 L353,71 L360,61 C360,61 386,59 386,59 L436,54 L447,56 L476,71 L496,70 L514,64 L524,78 L524,87 L529,102 L524,115 L539,121 L543,132 L537,143 L525,148 L521,159 L542,162 L550,174 L556,197 L575,213 L587,236 L581,253 L581,273 L588,293 L612,308 L623,322 L620,344 L635,357 L649,343 L654,324 L662,310 L658,296 L671,283 L662,267 L675,255 L674,233 L662,217 L670,207 L687,208 L697,204 L708,187 L695,173 L672,168 L666,155 L654,151 L642,143 L631,146 L621,137 L628,126 L619,114 L604,116 L600,107 L603,96 L613,90 L617,73 L632,71 L645,71 L657,63 L670,64 L673,73 L686,75 L699,62 L718,62 L730,73 L748,68 L762,71 L777,65 L787,66 L798,71 L815,66 L828,74 L844,71 L855,80 L863,83 L873,77 L887,83 L895,94 L891,108 L897,117 L892,126 L880,131 L875,145 L863,149 L857,162 L841,164 L828,162 L822,181 L831,190 L830,202 L841,213 L849,228 L857,243 L857,258 L865,268 L862,284 L852,291 L856,310 L848,321 L844,332 L836,336 L841,349 L846,366 L837,366 L819,348 L809,342 L795,339 L783,346 L778,337 L770,332 L756,332 L749,321 L753,307 L764,297 L779,292 L794,290 L798,277 L790,266 L781,268 L772,279 L762,281 L747,279 L747,262 L756,252 L767,248 L767,234 L751,237 L738,248 L725,252 L712,242 L706,252 L691,248 L687,264 L693,277 L703,281 L699,297 L690,307 L691,327 L677,333 L662,327 L668,311 Z M775,372 C775,372 805,364 805,364 L814,374 L806,389 L790,387 L775,372 Z" />
                            </mask>
                        </defs>
                        <rect x="0" y="0" width="100%" height="100%" fill="url(#dots)" mask="url(#world-mask)" />
                    </svg>
                </div>

                {/* Hotspots */}
                <div className="absolute inset-0 z-20">
                    {locations.map((loc) => (
                        <div key={loc.id} className="absolute group/pin" style={{ top: loc.top, left: loc.left }}>
                            <div 
                              className="relative flex items-center justify-center cursor-pointer -translate-x-1/2 -translate-y-1/2"
                              style={{ transform: `scale(${1/scale})` }} // Inverse scale to keep pin size constant
                            >
                                {/* Dot */}
                                <div className={`w-2 h-2 ${loc.isHQ ? 'bg-white w-3 h-3 shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'bg-stone-400 group-hover/pin:bg-white'} rounded-full z-10 transition-all duration-300`} />
                                
                                {/* Pulse for HQ */}
                                {loc.isHQ && <div className="absolute w-8 h-8 bg-white/20 rounded-full animate-ping pointer-events-none" />}
                                
                                {/* Hover Halo */}
                                <div className={`absolute ${loc.isHQ ? 'w-12 h-12' : 'w-8 h-8'} ${loc.isHQ ? 'bg-white/5' : 'bg-stone-400/20'} rounded-full opacity-0 group-hover/pin:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                                
                                {/* Tooltip / Card */}
                                <div className={`absolute left-5 top-1/2 -translate-y-1/2 ${loc.isHQ ? 'w-64' : 'w-auto min-w-[120px]'} bg-[#0c0a09]/90 backdrop-blur-xl border border-stone-800 ${loc.isHQ ? 'p-5' : 'px-4 py-3'} rounded-xl shadow-2xl opacity-0 scale-95 group-hover/pin:opacity-100 group-hover/pin:scale-100 transition-all duration-300 origin-left z-50 pointer-events-none`}>
                                    {loc.isHQ ? (
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Global HQ</span>
                                            <h4 className="text-white font-bold text-lg">{loc.label}</h4>
                                            <p className="text-stone-400 text-xs mt-2">
                                                290 Park Ave, 4th Floor<br />
                                                New York, NY 10017
                                            </p>
                                            <div className="mt-3 pt-3 border-t border-stone-800 flex justify-between items-center">
                                                <span className="text-stone-500 text-xs">+1 (212) 555 3000</span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div>
                                            <h4 className="text-white font-bold text-sm mb-1">{loc.label}</h4>
                                            <div className="h-0.5 w-6 bg-stone-700 mb-2"></div>
                                            <div className="text-[10px] text-stone-400 flex items-center gap-1">
                                                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                                                Operational
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Footer Stats */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-t border-stone-800 pt-10">
           <div className="flex gap-12 lg:gap-20">
               <div>
                   <h3 className="text-2xl font-bold text-white mb-1">25 Nations</h3>
                   <p className="text-stone-500 text-sm max-w-[200px]">
                       With presence in more than 25 nations in United States, Europe and Asia.
                   </p>
               </div>
                <div>
                   <h3 className="text-2xl font-bold text-white mb-1">+150 Partners</h3>
                   <p className="text-stone-500 text-sm max-w-[200px]">
                       The world has become more interconnected than ever before.
                   </p>
               </div>
           </div>
           
           <button className="px-8 py-3 rounded-lg bg-[#141210] border border-stone-800 text-stone-300 font-bold text-sm hover:bg-stone-800 hover:text-white hover:border-stone-600 transition-all duration-300 flex items-center gap-2 group shadow-lg">
               VIEW OUR LOCATIONS
               <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
           </button>
        </div>

      </div>
    </section>
  );
};

export default GlobalReach;