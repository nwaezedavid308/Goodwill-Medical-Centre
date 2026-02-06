import React from 'react';

export const VariantD = () => {
    return (
        <div className="relative w-full aspect-[9/16] bg-[#050010] rounded-[3rem] overflow-hidden border-[8px] border-purple-900/30 shadow-2xl font-sans text-white flex flex-col items-center p-12">
            <div className="flex-1 flex flex-col items-center justify-center space-y-16 w-full">
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-black tracking-tight uppercase italic">Secure<span className="text-purple-500">Pulse</span></h1>
                    <p className="opacity-40 text-xs tracking-widest uppercase">Biometric Encryption Active</p>
                </div>

                {/* Biometric Scan Ring */}
                <div className="relative flex items-center justify-center">
                    <div className="absolute w-64 h-64 rounded-full border border-purple-500/10 animate-[ping_3s_infinite]" />
                    <div className="absolute w-48 h-48 rounded-full border border-purple-500/20 animate-[ping_2s_infinite]" />
                    <div className="z-10 w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 to-indigo-700 shadow-[0_0_50px_rgba(168,85,247,0.5)] flex items-center justify-center border-4 border-white/10 group cursor-pointer active:scale-95 transition-transform">
                        <svg viewBox="0 0 24 24" className="w-12 h-12 fill-white animate-pulse"><path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.66.42-5.58 1.41-.25.13-.56.03-.69-.22-.13-.25-.03-.56.22-.69C7.88 3.51 9.77 3 12.01 3c2.13 0 3.93.47 6.03 1.56.24.12.33.43.21.67-.1.2-.3.31-.5.31h.06zm-1.5 1.74c-.06 0-.11-.01-.17-.03-2.13-.88-4.48-.88-6.61 0-.26.11-.56-.01-.67-.28-.11-.26.01-.56.28-.67 2.4-1 5.04-1 7.44 0 .26.11.39.42.27.67-.11.19-.3.31-.54.31zm.55 1.73c-.05 0-.1-.01-.15-.03-2.22-.92-4.63-.92-6.85 0-.26.11-.56-.01-.67-.27-.11-.26.01-.56.27-.67 2.49-1.04 5.21-1.04 7.7 0 .26.11.38.41.27.67-.11.19-.3.3-.57.3zm-1.6 1.72c-.05 0-.1-.01-.15-.03-1.6-.66-3.33-.66-4.93 0-.16.07-.35.07-.51 0-.16-.07-.24-.22-.18-.38.19-.44.5-.44.69 0 1.83-.76 3.8-.76 5.63 0 .19 0 .5.09.69.44.07.16-.01.35-.18.38-.2.08-.4.02-.56-.15l.06.06zM12 22c-5.52 0-10-4.48-10-10S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8z" /></svg>
                    </div>
                </div>

                <div className="text-center text-sm font-medium tracking-tight animate-bounce">
                    Touch to Begin
                </div>
            </div>

            <div className="w-full space-y-4">
                <button className="w-full bg-white/5 border border-white/10 py-4 rounded-2xl text-xs uppercase font-bold tracking-[0.2em] hover:bg-white/10 transition-colors">
                    Alternative Login
                </button>
            </div>
        </div>
    );
};
