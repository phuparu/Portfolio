export default function About() {
  return (
    <section id="about" className="px-6 lg:px-16 py-24">
      <div className="flex items-center gap-6 mb-16">
        <span className="text-xs tracking-[0.2em]">01</span>

        <h2 className="text-5xl font-serif">
          About <em className="italic text-[#8c6b3a]">me</em>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-20">
        <div className="space-y-8 text-[#5c4530] leading-9 text-lg">
          <p>
            I'm a final-year Applied Computer Science student at King
            Mongkut’s University of Technology Thonburi (KMUTT) with
            interests in full-stack development, AI systems, recommendation
            systems, and IoT technologies.
          </p>

          <p>
            I have experience developing web and mobile applications,
            conducting academic research, and collaborating with
            international teams through programs in Japan, Taiwan, and
            Indonesia.
          </p>

          <p>
            My recent research focused on Multimodal Graph Neural Networks
            for recommendation systems, earning the Best Student Paper
            Award at SISA 2025.
          </p>
        </div>

        <div className="space-y-8">
          <div className="border-t border-[#dcc9b3] pt-6">
            <p className="uppercase text-xs tracking-[0.2em] mb-2">
              Education
            </p>

            <h3 className="text-xl font-semibold">
              King Mongkut's University of Technology Thonburi
            </h3>

            <p className="text-[#8c7560] mb-1">
              B.Sc. Applied Computer Science · 2022 - Present
            </p>

            <h3 className="text-xl font-semibold">
              Suankularb Wittayalai School
            </h3>

            <p className="text-[#8c7560]">
              Gifted-Maths · 2016 - 2022
            </p>
          </div>

          <div className="border-t border-[#dcc9b3] pt-6">
            <p className="uppercase text-xs tracking-[0.2em] mb-2">
              Location
            </p>

            <h3 className="text-xl font-semibold">
              Bangkok, Thailand
            </h3>

            <p className="text-[#8c7560]">
              Open to international opportunities
            </p>
          </div>

          <div className="border-t border-[#dcc9b3] pt-6">
            <p className="uppercase text-xs tracking-[0.2em] mb-2">
              Languages
            </p>

            <h3 className="text-xl font-semibold">
              Thai · English
            </h3>

            <p className="text-[#8c7560]">
              TOEIC 885 / 990
            </p>
          </div>

          <div className="border-t border-[#dcc9b3] pt-6">
            <p className="uppercase text-xs tracking-[0.2em] mb-2">
              Portfolio
            </p>

            <a
              href="https://github.com/phuparu"
              target="_blank"
              className="text-[#8c6b3a] hover:underline"
            >
              github.com/phuparu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}