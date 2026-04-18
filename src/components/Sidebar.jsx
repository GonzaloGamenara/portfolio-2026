const Sidebar = () => {
  return (
    <aside className="w-full md:w-64 bg-neo-green border-b-[3px] md:border-b-0 md:border-r-[3px] border-black p-6 flex flex-col">
      <div className="font-bold text-2xl mb-10 flex items-center gap-2">
        <span className="border-2 border-black px-2 py-1 bg-white text-sm">{"</>"}</span>
        GONZA
      </div>
      
      <nav className="flex flex-col gap-4 font-semibold">
        <a href="#" className="hover:underline">🏠 Home</a>
        <a href="#" className="hover:underline">📅 Schedule</a>
        <a href="#" className="bg-black text-white px-4 py-2 rounded-sm">🎓 Portfolio</a>
        <a href="#" className="hover:underline">⚙️ Preferences</a>
      </nav>
    </aside>
  );
};

export default Sidebar;