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
    <div className="w-full bg-neo-yellow border-y-[3px] border-black overflow-hidden py-2.5 sm:py-3 my-6 sm:my-8 shadow-neo relative md:rotate-1 md:hover:rotate-0 transition-transform duration-300">
      <div className="flex animate-marquee w-max select-none">
        <div className="flex gap-4 sm:gap-6 px-2 sm:px-3 shrink-0">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="text-base sm:text-xl font-black uppercase whitespace-nowrap"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex gap-4 sm:gap-6 px-2 sm:px-3 shrink-0">
          {skills.map((skill, index) => (
            <span
              key={`dup-${index}`}
              className="text-base sm:text-xl font-black uppercase whitespace-nowrap"
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
