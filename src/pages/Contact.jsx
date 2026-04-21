const Contact = () => {
  return (
    <main className="flex-1 p-6 md:p-10 overflow-y-auto animate-slide-up">
      <div className="mb-8 border-b-[3px] border-black pb-4">
        <h1 className="text-4xl font-black tracking-tight">Contacto</h1>
        <p className="font-medium mt-2">
          Hablemos de tu próximo proyecto. Dejame tu mensaje y te escribo.
        </p>
      </div>

      <div className="bg-neo-yellow border-[3px] border-black shadow-neo p-6 md:p-10 max-w-2xl mx-auto">
        {/* Formulario conectado a Formspree */}
        <form
          action="https://formspree.io/f/xzdyroqg"
          method="POST"
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="font-bold text-sm">
              Tu Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="hola@ejemplo.com"
              className="border-[3px] border-black p-3 outline-none focus:bg-white bg-neo-bg shadow-neo-hover transition-colors font-medium"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="font-bold text-sm">
              Mensaje
            </label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              placeholder="Contame sobre esa app, rebranding o e-commerce que tenés en mente..."
              className="border-[3px] border-black p-3 outline-none focus:bg-white bg-neo-bg shadow-neo-hover transition-colors resize-none font-medium"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-black text-white font-black text-xl py-4 border-[3px] border-black shadow-neo hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none hover:bg-gray-800 transition-all mt-4"
          >
            Enviar Mensaje
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contact;
