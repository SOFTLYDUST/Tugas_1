'use client';
import React from "react";

export default function HasilPraktikum() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-100 via-rose-50/70 to-slate-100 p-6">

      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(249,168,212,0.35),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_100%,rgba(148,163,184,0.25),transparent_45%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 shadow-[inset_0_0_120px_rgba(15,23,42,0.06)]"
        aria-hidden
      />

      <div className="relative z-10 w-full max-w-md rounded-2xl border-2 border-white/80 bg-white/95 p-8 text-center shadow-[0_25px_50px_-12px_rgba(15,23,42,0.18),0_12px_24px_-8px_rgba(244,114,182,0.15)] ring-1 ring-slate-900/5 backdrop-blur-sm">

        <h1 className="text-2xl font-bold mb-2 border-slate-900/50 borderc" style={{ color: '#f9a8d4' }}>
          Nama: Yulinafaesa Sinaga
        </h1>

        <p className="text-gray-500 mb-4">
          Praktikum Bootstrap & Tailwind
        </p>

        <div className="relative inline-block">
          <span className="absolute -inset-x-2 inset-y-0 bg-pink-200 rounded-md -z-10"></span>
  <button className="btn btn-primary border-none bg-transparent">
    <h2 className="text-l" style={{ color: 'black' }}>NIM: 253140707111134</h2>
  </button>
</div>

      </div>

    </div>
  );
}
