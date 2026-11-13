import { APP_NAME } from "@askwell/shared";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/15 bg-white/5 p-8 backdrop-blur">
        <h1 className="text-3xl font-semibold tracking-tight">{APP_NAME}</h1>
        <p className="mt-3 text-base text-white/65">Application setup is underway.</p>
      </div>
    </main>
  );
}
