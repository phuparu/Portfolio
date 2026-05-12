const experiences = [
  {
    year: "2025",
    title: "System Analyst Intern",
    company: "Motif Technology · Thailand",
    description: `Being System Analyst Intern at Motif Technology. Managed system defects for a Fuel
    Inventory Management System, designed technical solutions to meet specific client
    requirements and developed system documentation and functional specifications,`,
  },

  {
    year: "2025",
    title: "Research Intern",
    company: "Kansai University · Japan",
    description:
      `Participated in two-month internship at Kansai University in Osaka, Japan, conducting
        research on Recommendation Systems. Developed a novel Gated Co-Guidance
        architecture for Multimodal Graph Neural Networks (GNNs) to enhance recommendation
        system accuracy. Achieved significant performance gains over the LightGCN baseline
        +80.2% in MAP@5 and +78.6% in NDCG@5 on the Amazon Sports & Outdoors dataset.`,
  },

  {
    year: "2024",
    title: "SAM21 International Program",
    company: "Indonesia",
    description:
      `Participated in SAM21 program at Universitas Negeri Jakarta, Indonesia (July 20-25,
        2024), collaborating with students from Universiti Teknologi Malaysia and Universitas
        Negeri Jakarta. Developed an E-library System prototype combining an application
        with IoT and AI. The system enabled seat reservations, with chairs equipped with
        pressure sensors and AI to show availability, aimed at improving library efficiency
        and user convenience`,
  },

  {
    year: "2024",
    title: "NTCU Summer Camp",
    company: "Taiwan",
    description:
      `Participated in NTCU Summer Language & Culture Camp 2024 in Taiwan for one week
        as an exchange student. This immersive experience enhanced my cultural awareness
        and internationalization perspective. I adapted to new situations, gained appreciation
        for Taiwanese culture, made friends from Indonesia, Japan, and Taiwan, and improved
        my English language skills.`,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#f5efe3] px-6 lg:px-16 py-24"
    >
      <div className="flex items-center gap-6 mb-16">
        <span className="text-xs tracking-[0.2em]">04</span>

        <h2 className="text-5xl font-serif">
          Experience &{" "}
          <em className="italic text-[#8c6b3a]">Beyond</em>
        </h2>
      </div>

      <div className="space-y-12 border-l border-[#dcc9b3] pl-10">
        {experiences.map((exp) => (
          <div key={exp.title}>
            <p className="uppercase text-xs tracking-[0.2em] mb-2">
              {exp.year}
            </p>

            <h3 className="text-3xl font-serif mb-2">
              {exp.title}
            </h3>

            <p className="text-[#8c6b3a] mb-4">
              {exp.company}
            </p>

            <p className="text-[#5c4530] leading-8">
              {exp.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}