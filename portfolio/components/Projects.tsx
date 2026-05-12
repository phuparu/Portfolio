const projects = [
  {
    title: "mindCRA",
    role: "Front-End Developer",
    period: "Mar 2024 - Sep 2026",
    description:
      "Web application integrated with LINE Official Account for mental health assessments using DASS-21 forms. Users can receive recommendations, complete assessments, and book counseling appointments.",
    tech: ["REACT", "Node.js", "LINE OA", "MySQL"],
  },

  {
    title: "Indemand",
    role: "Front-End Developer",
    period: "May 2024 - Jun 2024",
    description:
      "Tutoring management platform where students can book sessions, view courses, and track hours while tutors and admins manage schedules and export CSV reports.",
    tech: ["REACT", "Tailwind", "Node.js", "MySQL"],
  },

  {
    title: "Koomwan",
    role: "Business Analyst · Front-End",
    period: "Aug 2024 - May 2025",
    description:
      "Mobile application for diabetes management with AI health analysis, medication tracking, articles, and doctor Q&A forum built using React Native and Node.js.",
    tech: ["React Native", "Expo", "Node.js"],
  },

  {
    title: "Robotic Arm",
    role: "IoT & Computer Vision",
    period: "Sep 2024 - Dec 2024",
    description:
      "3D-printed robotic arm integrated with a trash-detection IoT car using Raspberry Pi, servos, and YOLOv11n object detection model.",
    tech: ["Python", "YOLOv11", "Raspberry Pi", "IoT"],
  },

  {
    title: "GNN Recommendation",
    role: "Research",
    period: "Jun 2025 - Jul 2025",
    description:
      "Developed Gated Co-Guidance architecture for Multimodal Graph Neural Networks improving recommendation system performance over LightGCN baseline.",
    tech: ["PyTorch", "Graph Neural Networks", "Python"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 lg:px-16 py-24">
      <div className="flex items-center gap-6 mb-16">
        <span className="text-xs tracking-[0.2em]">03</span>

        <h2 className="text-5xl font-serif">
          Selected <em className="italic text-[#8c6b3a]">Work</em>
        </h2>
      </div>

      <div className="space-y-[1px] bg-[#dcc9b3]">
        {projects.map((project) => (
          <div
            key={project.title}
            className="grid lg:grid-cols-3 bg-[#faf7f2]"
          >
            <div className="bg-[#f5efe3] p-10 border-r border-[#dcc9b3]">
              <p className="uppercase text-xs tracking-[0.2em] mb-4">
                {project.period}
              </p>

              <h3 className="text-4xl font-serif mb-4">
                {project.title}
              </h3>

              <p className="uppercase text-xs tracking-[0.2em]">
                {project.role}
              </p>
            </div>

            <div className="lg:col-span-2 p-10">
              <p className="text-[#5c4530] leading-8 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 bg-[#ecdfd0] text-xs uppercase"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}