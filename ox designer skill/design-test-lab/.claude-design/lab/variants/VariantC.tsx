import React from 'react';

export const VariantC = () => {
    return (
        <div className="relative w-full aspect-[9/16] bg-[#020202] rounded-[3rem] overflow-hidden border-[8px] border-zinc-900 shadow-2xl font-mono text-zinc-500 p-12 flex flex-col">
            <div className="flex-1 flex flex-col justify-center">
                <div className="text-[10px] tracking-widest uppercase opacity-40 mb-8">System_Auth: v4.2</div>

                <div className="space-y-12">
                    <div className="space-y-2">
                        <div className="text-white text-2xl font-bold tracking-tighter uppercase">Identifier_</div>
                        <div className="h-[2px] w-full bg-white/10 relative overflow-hidden">
                            <div className="absolute h-full w-1/4 bg-white animate-[move_2s_infinite]" style={{ animationName: 'move-line' }} />
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex justify-between items-center text-xs border-l-2 border-white/10 pl-4 py-2 hover:border-white transition-colors group cursor-pointer">
                            <span>BIOMETRIC_SCAN</span>
                            <span className="text-white opacity-0 group-hover:opacity-100 italic">[READY]</span>
                        </div>
                        <div className="flex justify-between items-center text-xs border-l-2 border-white/10 pl-4 py-2 hover:border-white transition-colors group cursor-pointer">
                            <span>NEURAL_PASSKEY</span>
                            <span className="text-white opacity-0 group-hover:opacity-100 italic">[RESTRICTED]</span>
                        </div>
                        <div className="flex justify-between items-center text-xs border-l-2 border-white/10 pl-4 py-2 hover:border-white transition-colors group cursor-pointer">
                            <span>LEGACY_CONSOLE</span>
                            <span className="text-white opacity-0 group-hover:opacity-100 italic">[OPEN]</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-auto flex justify-between items-end border-t border-white/5 pt-8">
                <div className="text-[10px] uppercase tracking-tighter font-bold">Encrypted_Line</div>
                <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    ))}
                </div>
            </div>

            <style>{`
        @keyframes move-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
        </div>
    );
};
