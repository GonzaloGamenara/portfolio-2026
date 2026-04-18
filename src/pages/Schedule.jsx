const Schedule = () => {
  return (
    <main className="flex-1 p-6 md:p-10 flex items-center justify-center animate-slide-up">
      <div className="bg-white border-[3px] border-black shadow-neo p-10 text-center">
        <h1 className="text-4xl font-black mb-4">📅 Agenda</h1>
        <p className="font-medium mb-6">Acá podés integrar un calendario más adelante.</p>
        <button className="bg-neo-yellow border-2 border-black px-6 py-2 font-bold shadow-neo hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all">
          Reservar reunión
        </button>
      </div>
    </main>
  );
};

export default Schedule;