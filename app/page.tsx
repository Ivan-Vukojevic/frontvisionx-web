export default function Page() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-[#1a1a1a] px-6">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#2c2c2c] dark:text-[#e5e5e3] mb-4">
          FRONTVISIONX
        </h1>
        <p className="text-lg md:text-xl text-[#3a3a38] dark:text-[#d1d2d0] mb-6">
          Uskoro lansiramo našu novu web-stranicu i mobilnu aplikaciju.
        </p>
        <a
          href="mailto:frontvisionx@gmail.com"
          className="inline-block rounded-full px-6 py-3 bg-[#7a9279] text-white hover:opacity-90 transition"
        >
          frontvisionx@gmail.com
        </a>
      </section>
    </main>
  );
}
