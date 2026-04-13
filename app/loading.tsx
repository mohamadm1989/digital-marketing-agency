export default function Loading() {
    return (
        <div className="min-h-screen bg-[#050505] flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-[#fce34d] border-t-transparent rounded-full animate-spin"></div>
                <p className="text-white text-sm font-bold tracking-widest uppercase">Loading...</p>
            </div>
        </div>
    );
}
