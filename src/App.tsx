import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="w-full bg-white border-b border-slate-100 flex justify-center py-4 sticky top-0 z-50">
    <div className="w-full max-w-6xl px-4 flex flex-col md:flex-row justify-between items-center gap-4">
      <Link to="/" className="text-xl font-black text-blue-600 tracking-tighter uppercase">
        El Rincón de Totto
      </Link>
      <div className="flex gap-6 font-bold text-slate-500 text-sm">
        <Link to="/" className="hover:text-blue-600 transition">Inicio</Link>
        <Link to="/proyectos" className="hover:text-blue-600 transition">Proyectos</Link>
        <Link to="/sobre-mi" className="hover:text-blue-600 transition">Sobre mí</Link>
      </div>
    </div>
  </nav>
);

const Home = () => (
  <section className="w-full flex flex-col items-center justify-center py-20 text-center px-4">
    <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6">
      ¡Hola, soy <span className="text-blue-600">Totto</span>!
    </h1>
    <p className="text-lg md:text-xl text-slate-600 max-w-2xl">
      Bienvenido a mi rincón digital. Aquí verás mi evolución como desarrollador.
    </p>
    <div className="mt-10 flex flex-col sm:flex-row gap-4">
      <Link to="/proyectos" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-700 transition">
        Ver Proyectos
      </Link>
      <Link to="/sobre-mi" className="bg-slate-100 text-slate-800 px-8 py-4 rounded-xl font-bold hover:bg-slate-200 transition">
        Sobre mí
      </Link>
    </div>
  </section>
);

const Proyectos = () => (
  <div className="w-full max-w-6xl px-4 py-12">
    <h2 className="text-3xl font-bold mb-10 text-center text-slate-900">Mis Proyectos</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
      {[1, 2, 3].map((i) => (
        <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
            {i}
          </div>
          <h3 className="font-bold text-xl mb-2">Proyecto {i}</h3>
          <p className="text-slate-500 text-sm italic">Próximamente contenido detallado...</p>
        </div>
      ))}
    </div>
  </div>
);

function App() {
  return (
    <Router>
      {/* EL CONTENEDOR MAESTRO: 
        'w-screen' asegura que use todo el ancho del monitor.
        'flex-col items-center' asegura que todo hijo esté centrado.
      */}
      <div className="min-h-screen w-full bg-slate-50 flex flex-col items-center overflow-x-hidden">
        <Navbar />
        <main className="w-full flex flex-col items-center justify-start flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/sobre-mi" element={
              <div className="py-20 text-center text-2xl font-bold">Página en construcción 🚧</div>
            } />
          </Routes>
        </main>
        <footer className="w-full py-8 text-center text-slate-400 border-t border-slate-200 bg-white">
          © {new Date().getFullYear()} El Rincón de Totto
        </footer>
      </div>
    </Router>
  );
}

export default App;