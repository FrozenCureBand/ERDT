import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Componentes de "Páginas"
const Home = () => (
  <div className="flex flex-col items-center justify-center h-64 bg-white rounded-xl shadow-md p-10">
    <h2 className="text-4xl font-bold text-slate-800">Bienvenido al Rincón de Totto</h2>
    <p className="mt-4 text-slate-600">Este es mi espacio personal donde comparto mis proyectos y aprendizaje.</p>
  </div>
);

const Proyectos = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
    <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
      <h3 className="font-bold text-xl">Mi Primera SPA</h3>
      <p className="text-gray-600">Proyecto actual: React + TS + Docker.</p>
    </div>
    <div className="bg-white p-6 rounded-lg shadow border-l-4 border-gray-300 italic text-gray-400">
      Próximamente más proyectos...
    </div>
  </div>
);

const SobreMi = () => (
  <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow">
    <h2 className="text-2xl font-bold mb-4 border-b pb-2">Sobre mí</h2>
    <p className="text-slate-700 leading-relaxed">
      ¡Hola! Soy Totto. Estoy construyendo este rincón para documentar mi camino en el desarrollo de software.
    </p>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans">
        {/* Barra de Navegación */}
        <nav className="bg-slate-900 text-white shadow-xl">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <span className="text-2xl font-black tracking-tighter hover:text-blue-400 cursor-pointer transition-colors">
              EL RINCÓN DE TOTTO
            </span>
            <div className="flex gap-8 font-medium">
              <Link to="/" className="hover:text-blue-400 transition">Home</Link>
              <Link to="/proyectos" className="hover:text-blue-400 transition">Proyectos</Link>
              <Link to="/sobre-mi" className="hover:text-blue-400 transition">Sobre mí</Link>
            </div>
          </div>
        </nav>

        {/* Contenido Principal */}
        <main className="container mx-auto px-6 py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/sobre-mi" element={<SobreMi />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;