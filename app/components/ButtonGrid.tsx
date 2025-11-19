'use client'

export default function ButtonGrid() {
  const buttons = [
    {
      title: "L'Apostat'",
      description: "Jeu d’enquête chrétien où vous démasquez l’imposteur",
      icon: "🕵️‍♀️",
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-600 hover:to-blue-700",
      url: "https://lapostat.vercel.app/"
    },
    {
      title: "Juste Un",
      description: "Jeu d’équipe chrétien où un mot caché doit être retrouvé",
      icon: "💬",
      color: "from-purple-600 to-purple-700",
      hoverColor: "hover:from-purple-600 hover:to-purple-700",
      url: "https://justeun.vercel.app/"
    },
    {
      title: "Trivia Biblique",
      description: "Quiz biblique complet pour tester et partager votre foi",
      icon: "📖",
      color: "from-amber-600 to-amber-700",
      hoverColor: "hover:from-amber-600 hover:to-amber-700",
      url: "https://jeu-trivia-biblique.vercel.app/"
    },
     {
      title: "Jeux Play Store",
      description: "Jeux de société et quiz sur le christianisme",
      icon: "🎲",
      color: "from-pink-600 to-pink-700",
      hoverColor: "hover:from-pink-600 hover:to-pink-700",
      url: "https://play.google.com/store/apps/developer?id=medericcc&hl=fr"
    }
  ]

  return (
    <div className="w-full mx-auto px-4 sm:px-3 lg:px-4 pb-8">
      {/* Grille principale avec moins d'espacement */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 mt-pt-5 md:pb-20">
        {buttons.map((button, index) => (
          <div 
            key={index}
            className="group cursor-pointer transform transition-all duration-300 hover:scale-[1.02]"
            onClick={() => window.open(button.url, '_blank')}
          >
            <div className={`bg-gradient-to-br ${button.color} ${button.hoverColor} rounded-2xl p-4 sm:p-5 lg:p-6 text-white shadow-lg transition-all duration-300 group-hover:shadow-xl h-full flex flex-col min-h-[200px] sm:min-h-[220px] lg:min-h-[240px]`}>
              {/* Icône plus grande et mieux centrée */}
              <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4 text-center">{button.icon}</div>
              
              {/* Titre plus compact */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-center leading-snug">
                {button.title}
              </h3>
              
              {/* Description plus serrée */}
              <p className="text-white/90 text-center flex-grow text-xs sm:text-sm lg:text-base leading-tight sm:leading-relaxed px-1">
                {button.description}
              </p>
              
              {/* Bouton Accéder plus proche */}
              <div className="mt-3 sm:mt-4 lg:mt-5 text-center">
                <span className="inline-block bg-white/25 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold backdrop-blur-sm transition-all group-hover:bg-white/35 group-hover:scale-105">
                  Accéder
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Section inspiration plus compacte */}
      <div className="mt-8 sm:mt-10 lg:mt-12 text-center w-full max-w-5xl mx-auto  sm:block hidden">
        <div className="bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-7 shadow-md">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-2 sm:mb-3">
            &quot;La vérité vous rendra libres&quot; - Jean 8:32
          </h2>
          <p className="text-slate-700 text-sm sm:text-base lg:text-lg">
            Ces ressources vous aideront à grandir dans la connaissance et l&apos;amour de Dieu
          </p>
        </div>
      </div>
    </div>
  )
}