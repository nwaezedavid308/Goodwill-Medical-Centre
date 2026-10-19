import { useDialog } from '../hooks/useDialog';
import React, { useEffect } from 'react';
import { X, Play, Video, Building2 } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialVideo?: 'aerial' | 'inside';
}

const VIDEOS = [
  {
    id: 'aerial',
    title: 'Goodwill Medical Centre - Aerial & Exterior Tour',
    description: 'An overview of the hospital complex, grounds, and facility architecture in Umuchigbo, Enugu East.',
    src: '/videos/GMC_VIEW.mp4',
    icon: Building2,
  },
  {
    id: 'inside',
    title: 'Internal Facility & Clinic Walkthrough',
    description: 'A look inside the consulting rooms, laboratory, pharmacy, maternity units, and patient wards.',
    src: '/videos/GMC_VIEW_INSIDE.mp4',
    icon: Video,
  },
];

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, initialVideo = 'aerial' }) => {
  const [activeVideoId, setActiveVideoId] = React.useState<'aerial' | 'inside'>(initialVideo);

  useEffect(() => {
    setActiveVideoId(initialVideo);
  }, [initialVideo]);

  const dialogRef = useDialog(isOpen, onClose);

  if (!isOpen) return null;

  const currentVideo = VIDEOS.find((v) => v.id === activeVideoId) || VIDEOS[0];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in"
      ref={dialogRef}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div
        className="relative w-full max-w-4xl bg-slate-900 border border-purple-500/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/60">
          <div className="flex items-center gap-3">
            <span className="p-2 bg-purple-600/20 text-purple-400 rounded-xl">
              <Play className="w-5 h-5 fill-current" />
            </span>
            <div>
              <h3 id="video-modal-title" className="text-white font-sans font-bold text-lg leading-tight">
                {currentVideo.title}
              </h3>
              <p className="text-slate-400 text-xs">Official Goodwill Medical Centre Tour</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-full transition-colors"
            aria-label="Close video player"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          <video
            key={currentVideo.src}
            controls
            preload="metadata"
            className="w-full h-full object-contain"
            playsInline
          >
            <source src={currentVideo.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Video Switcher Tabs & Description */}
        <div className="p-6 bg-slate-950/90 space-y-4">
          <p className="text-slate-300 text-sm leading-relaxed">{currentVideo.description}</p>
          <div className="flex flex-wrap gap-3">
            {VIDEOS.map((vid) => {
              const Icon = vid.icon;
              const isActive = vid.id === activeVideoId;
              return (
                <button
                  key={vid.id}
                  onClick={() => setActiveVideoId(vid.id as 'aerial' | 'inside')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{vid.id === 'aerial' ? 'Exterior & Grounds' : 'Interior Clinics & Wards'}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
