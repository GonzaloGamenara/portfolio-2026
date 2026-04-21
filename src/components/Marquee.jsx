const Marquee = () => {
  const skills = [
    "⚡ React",
    "•",
    "🎨 Tailwind",
    "•",
    "📜 JavaScript",
    "•",
    "🚀 Node.js",
    "•",
    "🐍 Python",
    "•",
    "☕ Java",
    "•",
    "⚙️ C++",
    "•",
    "📊 SQL",
    "•",
    "🍃 MongoDB",
    "•",
    "📈 PowerBI",
  ];

  return (
    <div
      className="w-full bg-neo-yellow border-y-[3px] border-black overflow-hidden py-3 my-8 shadow-neo relative rotate-1deg hover:rotate-0 transition-transform animate-scale-up"
      style={{ animationDelay: "2600ms" }}
    >
      {/* Añadimos 'flex' aquí para que el contenedor hijo no necesite anchos fijos */}
      <div className="flex animate-marquee w-max">
        {/* Usamos dos listas idénticas */}
        <div className="flex gap-6 px-3 shrink-0">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="text-xl font-black uppercase whitespace-nowrap"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="flex gap-6 px-3 shrink-0">
          {skills.map((skill, index) => (
            <span
              key={`dup-${index}`}
              className="text-xl font-black uppercase whitespace-nowrap"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
