'use client';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    return (
        <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-6xl font-bold text-[#fce34d] mb-4">Oops!</h1>
            <h2 className="text-xl font-bold text-white mb-4">Something went wrong</h2>
            <p className="text-gray-400 text-sm mb-8 max-w-md">
                {error.message || 'An unexpected error occurred. Please try again.'}
            </p>
            <button
                onClick={() => reset()}
                className="bg-[#fce34d] text-black px-8 py-3 text-[12px] font-bold uppercase tracking-widest hover:bg-white transition-colors"
            >
                Try Again
            </button>
        </div>
    );
}
