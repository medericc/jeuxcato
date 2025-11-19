export default function Header() {
  return (
    <header className="text-center md:pt-15  sm:pt-10  pt-10 pb-8 md:pb-15 sm:pb-10 px-4">
      <div className="max-w-4xl mx-auto mt-7 sm:mt-1 ">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-4">
          Ressources <span className="text-blue-700">Catholiques</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
          Jouez avec le christianisme à travers des quizz inspirés,
des défis d’équipe et une ambiance fraternelle.
        </p>
      </div>
    </header>
  )
}