import React from "react";

const team = [
  { name: "John Doe", role: "Frontend Developer" },
  { name: "Jane Smith", role: "Backend Developer" },
  { name: "Alex Kumar", role: "UI/UX Designer" },
];

const Team = () => {
  return (
    <section className="relative w-full py-24 bg-[#0B132B] overflow-hidden">

      <div className="max-w-6xl mx-auto px-4 text-center">

        <h2 className="text-4xl font-bold text-white"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Meet Our Team
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          {team.map((member, i) => (
            <div key={i} className="bg-white/[0.05] p-6 rounded-2xl border border-white/[0.08]">
              <div className="w-20 h-20 bg-[#00A86B]/20 rounded-full mx-auto mb-4" />
              <h3 className="text-white font-semibold">{member.name}</h3>
              <p className="text-white/50 text-sm">{member.role}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Team;