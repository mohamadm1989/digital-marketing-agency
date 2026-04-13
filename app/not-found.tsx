import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-8xl font-bold text-[#fce34d] mb-4">404</h1>
            <h2 className="text-2xl font-bold text-white mb-4">Page Not Found</h2>
            <p className="text-gray-400 text-sm mb-8 max-w-md">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>
            <Link
                href="/"
                className="bg-[#fce34d] text-black px-8 py-3 text-[12px] font-bold uppercase tracking-widest hover:bg-white transition-colors"
            >
                Back to Home
            </Link>
        </div>
    );
}
