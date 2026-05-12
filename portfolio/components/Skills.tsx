const skills = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "Tailwind", "TypeScript","HTML", "CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "MySQL", "MongoDB"],
  },
  {
    title: "AI & Research",
    items: ["PyTorch", "YOLO", "Graph Neural Networks", "Python"],
  },
  {
    title: "DevOps",
    items: ["Git", "Docker", "GitHub Actions", "Render", "Vercel", "Railway"],
  },
];

export default function Skills() {
  return (
    <section className="bg-[#f5efe3] px-6 lg:px-16 py-24">
      <div className="flex items-center gap-6 mb-16">
        <span className="text-xs tracking-[0.2em]">02</span>

        <h2 className="text-5xl font-serif">
          Skills & <em className="italic text-[#8c6b3a]">Tools</em>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#dcc9b3]">
        {skills.map((skill) => (
          <div key={skill.title} className="bg-[#faf7f2] p-10">
            <h3 className="text-3xl font-serif mb-6">
              {skill.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 bg-[#ecdfd0] text-xs uppercase"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}