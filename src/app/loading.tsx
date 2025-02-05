

"use client"
export default function Loading() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-blue-500">
      {/* Circular Loading Indicator */}
      <div className="relative w-16 h-16 flex items-center justify-center">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-white rounded-full opacity-30"
            style={{
              transform: `rotate(${i * 30}deg) translate(25px)`,
              animation: `fade 1.2s linear infinite`,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>
      
      {/* Loading Text */}
      <h2 className="text-white text-lg font-semibold mt-6">Loading</h2>
      
      {/* Progress Bar */}
      <div className="w-64 h-3 bg-white/50 rounded-full mt-4 overflow-hidden">
        <div className="h-full bg-white rounded-full animate-progress" style={{ width: '50%' }} />
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress {
          animation: progress 2s infinite alternate;
        }
      `}</style>
    </div>
  );
}
