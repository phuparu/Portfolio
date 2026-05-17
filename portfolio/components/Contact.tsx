export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#2a1f12] text-white px-6 lg:px-16 py-24 text-center"
    >
      <h2 className="text-5xl font-serif mb-8">
        Let's <em className="italic text-[#c9a97e]">Connect</em>
      </h2>

      <p className="text-[#dcc9b3] mb-12 text-lg">
        Open to internships, research collaborations, and full-time
        roles.
      </p>

      <div className="flex flex-col lg:flex-row justify-center gap-10">
        <a href="mailto:phumiphat.140@gmail.com">
          phumiphat.140@gmail.com
        </a>

        <a href="https://github.com/phuparu">
          github.com/phuparu
        </a>

        <p>Bangkok, Thailand</p>
      </div>
    </section>
  );
}