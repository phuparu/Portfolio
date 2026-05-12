export default function Awards() {
  return (
    <section className="px-6 lg:px-16 py-24">
      <div className="flex items-center gap-6 mb-16">
        <span className="text-xs tracking-[0.2em]">05</span>

        <h2 className="text-5xl font-serif">
          Awards &{" "}
          <em className="italic text-[#8c6b3a]">Recognition</em>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-[px] bg-[#dcc9b3]">
        <div className="bg-[#faf7f2] p-10">
          <p className="uppercase text-xs tracking-[0.2em] mb-4">
            2025
          </p>

          <h3 className="text-3xl font-serif mb-6">
            Best Student Paper Award & SISA Selected Paper at SISA 2025
          </h3>

          <p className="text-[#5c4530] leading-8">
            Awarded at SISA 2025 for research on Multimodal Graph
            Neural Networks.
          </p>
        </div>

        <div className="bg-[#faf7f2] p-10">
          <p className="uppercase text-xs tracking-[0.2em] mb-4">
            2024
          </p>

          <h3 className="text-3xl font-serif mb-6">
            Best of Idea Award
          </h3>

          <p className="text-[#5c4530] leading-8">
            Won at SAM21 International Program for smart E-library
            system idea.
          </p>
        </div>
      </div>
    </section>
  );
}