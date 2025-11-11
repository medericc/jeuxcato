export default function Header() {
  return (
    <header className="text-center md:pt-25  pt-20  md:pb-20 pb-15 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4">
          Ressources <span className="text-blue-700">Catholiques</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
          Approfondissez votre foi à travers les vies des saints, 
          les écrits des docteurs et la défense de la vérité
        </p>
      </div>
    </header>
  )
}