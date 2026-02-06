import React from 'react';

export const VariantB = () => {
    return (
        <div className="relative w-full aspect-[9/16] bg-black rounded-[3rem] overflow-hidden border-[8px] border-zinc-800 shadow-2xl font-sans text-white">
            {/* Top Graphic Section */}
            <div className="h-2/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 to-black" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-purple-500/20 rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/5 rounded-full animate-[spin_30s_linear_reverse_infinite]" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-black italic tracking-tighter text-purple-500 drop-shadow-[0_0_20px_rgba(168,85,247,0.5)]">NEURA</span>
                </div>
            </div>

            {/* Login Content */}
            <div className="p-10 space-y-8">
                <div className="space-y-2">
                    <h1 className="text-3xl font-light">Sign In</h1>
                    <p className="text-white/30 text-sm">Synchronize your session across nodes.</p>
                </div>

                <div className="space-y-4">
                    <div className="group">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-purple-400 mb-2 block opacity-60 group-focus-within:opacity-100 transition-opacity">Node Identity</label>
                        <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 text-lg focus:outline-none focus:border-purple-500 transition-colors" placeholder="user@neura.io" />
                    </div>

                    <button className="w-full bg-purple-600 text-white py-5 rounded-3xl font-bold tracking-[0.1em] shadow-[0_20px_40px_rgba(168,85,247,0.2)] hover:bg-purple-500 transition-all active:scale-95">
                        ESTABLISH LINK
                    </button>
                </div>

                <div className="text-center text-xs text-white/20">
                    New to Neura? <span className="text-purple-400 font-bold hover:underline cursor-pointer">Register Node</span>
                </div>
            </div>
        </div>
    );
};
