import React from 'react';

export const VariantA = () => {
    return (
        <div className="relative w-full aspect-[9/16] bg-[#050505] rounded-[3rem] overflow-hidden border-[8px] border-zinc-800 shadow-2xl font-sans text-white flex flex-col items-center justify-center p-8">
            {/* Background Glow */}
            <div className="absolute top-[-20%] left-[-20%] w-[100%] h-[100%] bg-purple-600/10 rounded-full blur-[100px]" />

            <div className="relative z-10 w-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl mx-auto mb-6 flex items-center justify-center border border-white/20">
                    <div className="w-6 h-6 rounded-full border-2 border-purple-500" />
                </div>
                <h1 className="text-2xl font-bold tracking-tight mb-2">Welcome Back</h1>
                <p className="text-white/40 text-xs mb-8">Authenticate to enter the neural network.</p>

                <div className="space-y-4">
                    <input
                        type="text"
                        placeholder="Neural Identifier"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-purple-500 transition-colors"
                    />
                    <button className="w-full bg-white text-black py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-purple-100 transition-all">
                        Initialize Access
                    </button>
                </div>

                <div className="mt-8 pt-8 border-t border-white/5 flex justify-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <span className="text-xs opacity-40">BIO</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <span className="text-xs opacity-40">KEY</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
