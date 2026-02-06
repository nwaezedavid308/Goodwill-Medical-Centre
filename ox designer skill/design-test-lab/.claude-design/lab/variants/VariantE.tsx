import React from 'react';

export const VariantE = () => {
    return (
        <div className="relative w-full aspect-[9/16] bg-[#0A001A] rounded-[3rem] overflow-hidden border-[8px] border-zinc-900 shadow-2xl font-sans text-white flex flex-col p-10">
            {/* Moving Background Mesh */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/40 via-transparent to-indigo-900/40" />
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse" />

            <div className="relative z-10 flex flex-col h-full">
                <div className="mt-20 space-y-2">
                    <h1 className="text-5xl font-black tracking-tighter uppercase leading-none italic select-none">Enter<br />Portal</h1>
                    <div className="h-1 w-12 bg-white" />
                </div>

                <div className="mt-auto space-y-8">
                    <div className="space-y-4">
                        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-1 flex border border-white/10">
                            <input type="text" placeholder="Access ID" className="flex-1 bg-transparent px-6 py-4 text-sm focus:outline-none" />
                            <button className="bg-white text-black w-14 h-14 rounded-2xl flex items-center justify-center font-black">
                                →
                            </button>
                        </div>

                        <div className="flex justify-between px-6 text-[10px] font-black uppercase tracking-widest text-white/30">
                            <span>New User?</span>
                            <span className="text-purple-400">Request Pass</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 border border-white/10 p-5 rounded-3xl flex flex-col items-center justify-center gap-2 group cursor-pointer hover:bg-white/10 transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:scale-150 transition-transform" />
                            <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Face ID</span>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-5 rounded-3xl flex flex-col items-center justify-center gap-2 group cursor-pointer hover:bg-white/10 transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:scale-150 transition-transform" />
                            <span className="text-[10px] font-bold uppercase tracking-widest opacity-40">Wallet</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
