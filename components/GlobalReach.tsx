"use client";

import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import { ArrowRightIcon, PlusIcon, MinusIcon, ReloadIcon } from '@radix-ui/react-icons';
import { Button, IconButton } from '@radix-ui/themes';
import { useTheme } from 'next-themes';
import { Globe } from './magicui/globe';

const locations = [
  { id: 'ny', label: 'New York', sub: 'Global HQ', lat: 40.7128, lng: -74.0060, isHQ: true, highlight: true },
  { id: 'sf', label: 'San Francisco', sub: 'Operational', lat: 37.7749, lng: -122.4194, highlight: true },
  { id: 'ldn', label: 'London', sub: 'Operational', lat: 51.5074, lng: -0.1278, highlight: true },
  { id: 'ber', label: 'Berlin', sub: 'Operational', lat: 52.52, lng: 13.4050, highlight: true },
  { id: 'lag', label: 'Lagos', sub: 'Operational', lat: 6.5244, lng: 3.3792, highlight: true },
  { id: 'nai', label: 'Nairobi', sub: 'Operational', lat: -1.2921, lng: 36.8219, highlight: true },
  { id: 'sin', label: 'Singapore', sub: 'Operational', lat: 1.3521, lng: 103.8198 },
  { id: 'syd', label: 'Sydney', sub: 'Operational', lat: -33.8688, lng: 151.2093 }
];

const MAP_STYLES = {
  dark: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
  light: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json'
};

const GlobalReach: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const mapDefaults = useRef({ center: [-10, 22] as [number, number], zoom: 1.3 });
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = !mounted || resolvedTheme === 'dark';

  useEffect(() => {
    if (!mapContainerRef.current || !mounted) return;

    // Clean up previous map
    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
    }

    const style = isDark ? MAP_STYLES.dark : MAP_STYLES.light;

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style,
      center: mapDefaults.current.center,
      zoom: mapDefaults.current.zoom,
      pitch: 0,
      bearing: 0,
      attributionControl: false
    });

    map.scrollZoom.disable();
    map.dragRotate.disable();
    map.touchZoomRotate.disableRotation();

    const markerPrimary = isDark ? '#f5f5f4' : '#1c1917';
    const markerSecondary = isDark ? '#a8a29e' : '#78716c';
    const hqGlow = isDark
      ? '0 0 0 6px rgba(245,245,244,0.12), 0 0 12px rgba(245,245,244,0.45)'
      : '0 0 0 6px rgba(28,25,23,0.1), 0 0 12px rgba(28,25,23,0.25)';
    const nodeGlow = isDark
      ? '0 0 0 4px rgba(120,113,108,0.15)'
      : '0 0 0 4px rgba(120,113,108,0.12)';

    locations.forEach((loc) => {
      const el = document.createElement('div');
      el.style.width = loc.isHQ ? '12px' : '8px';
      el.style.height = loc.isHQ ? '12px' : '8px';
      el.style.borderRadius = '999px';
      el.style.background = loc.isHQ ? markerPrimary : markerSecondary;
      el.style.boxShadow = loc.isHQ ? hqGlow : nodeGlow;
      el.style.cursor = 'pointer';
      if (loc.highlight) el.classList.add('reach-pulse');

      const popup = new maplibregl.Popup({
        closeButton: false,
        closeOnClick: false,
        offset: 18,
        anchor: 'left'
      });

      const fg = isDark ? '#f5f5f4' : '#1c1917';
      const fgMuted = isDark ? '#a8a29e' : '#78716c';
      const fgFaint = isDark ? '#78716c' : '#a8a29e';
      const dividerColor = isDark ? '#292524' : '#e7e5e4';

      const content = document.createElement('div');
      if (loc.isHQ) {
        content.innerHTML = `
          <div style="display:flex; flex-direction:column; gap:6px;">
            <span style="font-size:10px; letter-spacing:0.3em; text-transform:uppercase; color:#60a5fa; font-weight:700;">Global HQ</span>
            <div style="font-size:16px; font-weight:700; color:${fg};">${loc.label}</div>
            <div style="font-size:11px; color:${fgMuted}; line-height:1.4;">
              290 Park Ave, 4th Floor<br />New York, NY 10017
            </div>
            <div style="margin-top:6px; padding-top:8px; border-top:1px solid ${dividerColor}; font-size:11px; color:${fgFaint};">
              +1 (212) 555 3000
            </div>
          </div>`;
      } else {
        content.innerHTML = `
          <div style="display:flex; flex-direction:column; gap:6px;">
            <div style="font-size:13px; font-weight:700; color:${fg};">${loc.label}</div>
            <div style="height:2px; width:24px; background:${dividerColor};"></div>
            <div style="display:flex; align-items:center; gap:6px; font-size:11px; color:${fgMuted};">
              <span style="width:6px; height:6px; border-radius:999px; background:#22c55e;"></span>
              Operational
            </div>
          </div>`;
      }

      popup.setDOMContent(content);

      el.addEventListener('mouseenter', () => { popup.setLngLat([loc.lng, loc.lat]).addTo(map); });
      el.addEventListener('mouseleave', () => popup.remove());
      el.addEventListener('click', () => { popup.setLngLat([loc.lng, loc.lat]).addTo(map); });

      new maplibregl.Marker({ element: el, anchor: 'center' })
        .setLngLat([loc.lng, loc.lat])
        .addTo(map);
    });

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [isDark, mounted]);

  const handleZoomIn = (e: React.MouseEvent) => { e.stopPropagation(); mapRef.current?.zoomIn(); };
  const handleZoomOut = (e: React.MouseEvent) => { e.stopPropagation(); mapRef.current?.zoomOut(); };
  const handleReset = (e: React.MouseEvent) => {
    e.stopPropagation();
    mapRef.current?.easeTo({ center: mapDefaults.current.center, zoom: mapDefaults.current.zoom, duration: 600 });
  };

  const controlClass = "bg-[var(--c-inset)] border border-c-line text-c-fg hover:bg-c-bg-3 backdrop-blur-sm";

  const globeConfig = {
    width: 800, height: 800, onRender: () => {}, devicePixelRatio: 2,
    phi: 0, theta: 0.3, dark: isDark ? 1 : 0, diffuse: 0.4,
    mapSamples: 16000, mapBrightness: isDark ? 1.2 : 6,
    baseColor: isDark ? [0.3, 0.3, 0.3] as [number, number, number] : [0.92, 0.91, 0.9] as [number, number, number],
    markerColor: [0.66, 0.62, 0.58] as [number, number, number],
    glowColor: isDark ? [0.15, 0.14, 0.13] as [number, number, number] : [0.96, 0.96, 0.95] as [number, number, number],
    markers: locations.map(l => ({ location: [l.lat, l.lng] as [number, number], size: l.isHQ ? 0.1 : 0.05 })),
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden border-t border-c-line-3">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header with Globe */}
        <div className="relative mb-20">
          {/* Globe — decorative, right-aligned on desktop */}
          <div className="hidden lg:block absolute -right-16 -top-20 w-[420px] h-[420px] opacity-40 pointer-events-auto">
            <Globe config={globeConfig} className="relative w-full h-full" />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
            <div className="max-w-xl">
              <span className="text-xs font-bold text-c-fg-5 tracking-widest uppercase mb-4 block">Culture</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-c-fg-em mb-6">
                Global Network of <br />
                <span className="text-c-fg-5">Companies.</span>
              </h2>
            </div>
            <div className="max-w-sm lg:mr-[200px]">
              <p className="text-c-fg-4 text-lg leading-relaxed">
                With a global network of experts and partners we are experienced in helping our clients succeed in a global marketplace.
              </p>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="relative w-full aspect-[16/9] md:aspect-[2/1] bg-[var(--c-card)] backdrop-blur-2xl rounded-3xl border border-[var(--c-card-border)] shadow-card-lg overflow-hidden mb-20">
          <div ref={mapContainerRef} className="absolute inset-0" />

          <div className="absolute bottom-6 right-6 z-30 flex flex-col gap-2">
            <IconButton onClick={handleZoomIn} variant="soft" color="gray" className={controlClass} aria-label="Zoom in">
              <PlusIcon width={20} height={20} />
            </IconButton>
            <IconButton onClick={handleZoomOut} variant="soft" color="gray" className={controlClass} aria-label="Zoom out">
              <MinusIcon width={20} height={20} />
            </IconButton>
            <IconButton onClick={handleReset} variant="soft" color="gray" className={controlClass} aria-label="Reset view">
              <ReloadIcon width={20} height={20} />
            </IconButton>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-t border-c-line pt-10">
          <div className="flex gap-12 lg:gap-20">
            <div>
              <h3 className="text-2xl font-bold text-c-fg-em mb-1">25 Nations</h3>
              <p className="text-c-fg-5 text-sm max-w-[200px]">
                With presence in more than 25 nations in United States, Europe and Asia.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-c-fg-em mb-1">+150 Partners</h3>
              <p className="text-c-fg-5 text-sm max-w-[200px]">
                The world has become more interconnected than ever before.
              </p>
            </div>
          </div>

          <Button className="px-8 py-3 rounded-lg bg-[var(--c-card)] backdrop-blur-xl border border-[var(--c-card-border)] text-c-fg-3 font-bold text-sm hover:bg-c-bg-3 hover:text-c-fg-em hover:border-c-fg-6 transition-all duration-300 flex items-center gap-2 group shadow-card">
            VIEW OUR LOCATIONS
            <ArrowRightIcon width={16} height={16} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

      </div>
    </section>
  );
};

export default GlobalReach;
