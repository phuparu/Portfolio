export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2 items-center px-6 lg:px-16 pt-32 pb-20 gap-16"
    >
      <div>
        <div className="uppercase tracking-[0.2em] text-xs text-[#8c6b3a] mb-6">
          Applied Computer Science · KMUTT
        </div>

        <h1 className="text-6xl lg:text-8xl font-serif leading-none text-[#2a1f12] mb-8">
          Phumiphat <br />
          <em className="italic text-[#8c6b3a]">Santitha-</em>
          <br />
          wornying
        </h1>

        <p className="max-w-xl text-[#5c4530] text-lg leading-8 mb-10">
          Software engineer & researcher building intelligent systems —
          from web apps and mobile platforms to AI-powered recommendation
          systems and IoT robotics.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-8 py-4 bg-[#2a1f12] text-white uppercase tracking-[0.15em] text-xs hover:bg-[#8c6b3a] transition"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="uppercase tracking-[0.15em] text-xs flex items-center gap-2"
          >
            Get in Touch →
          </a>
        </div>
      </div>

      <div className="flex justify-start lg:justify-end">
        <div className="bg-[#f5efe3] border border-[#dcc9b3] p-10 w-full max-w-md">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h2 className="text-5xl font-serif">3.53</h2>
              <p className="uppercase text-xs tracking-[0.15em] mt-2">
                GPA
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-serif">885</h2>
              <p className="uppercase text-xs tracking-[0.15em] mt-2">
                TOEIC
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-serif">6+</h2>
              <p className="uppercase text-xs tracking-[0.15em] mt-2">
                Projects
              </p>
            </div>

            <div>
              <h2 className="text-5xl font-serif">3</h2>
              <p className="uppercase text-xs tracking-[0.15em] mt-2">
                Awards
              </p>
            </div>
          </div>

          <hr className="my-8 border-[#dcc9b3]" />

          <p className="uppercase text-xs tracking-[0.15em] mb-4">
            Core Stack
          </p>

          <div className="flex flex-wrap gap-2">
            {[
              "React Native",
              "Next.js",
              "TypeScript",
              "Node.js",
              "Python",
              "SQL",
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1 bg-[#ecdfd0] text-xs uppercase tracking-wide"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}