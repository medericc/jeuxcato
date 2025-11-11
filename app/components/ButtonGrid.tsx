'use client'

export default function ButtonGrid() {
  const buttons = [
    {
      title: "La Vie des Saints",
      description: "Découvrez les témoins exemplaires de la foi chrétienne",
      icon: "🙏",
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700",
      url: "https://vie-de-saints.vercel.app/"
    },
    {
      title: "Les Écrits des Docteurs",
      description: "Plongez dans la sagesse des grands théologiens",
      icon: "📚",
      color: "from-purple-600 to-purple-700",
      hoverColor: "hover:from-purple-600 hover:to-purple-700",
      url: "https://www.sourcetheologique.com/"
    },
    {
      title: "Combattre les Hérésies",
      description: "Défendez la vérité de la foi catholique face aux hérétiques",
      icon: "⚔️",
      color: "from-amber-600 to-amber-700",
      hoverColor: "hover:from-amber-600 hover:to-amber-700",
      url: "https://cato-heresie.vercel.app/"
    }
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 pb-12 ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:pb-10 lg:gap-8">
        {buttons.map((button, index) => (
          <div 
            key={index}
            className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            onClick={() => window.open(button.url, '_blank')}
          >
            <div className={`bg-gradient-to-br ${button.color} ${button.hoverColor} rounded-3xl p-8 text-white shadow-xl transition-all duration-300 group-hover:shadow-2xl h-full flex flex-col`}>
              <div className="text-5xl mb-4 text-center">{button.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-center">{button.title}</h3>
              <p className="text-blue-100 text-center flex-grow">{button.description}</p>
              <div className="mt-6 text-center">
                <span className="inline-block bg-white/20 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm transition-all group-hover:bg-white/30">
                  Accéder
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Section d'inspiration supplémentaire */}
      <div className="mt-16 text-center max-w-4xl mx-auto hidden md:block">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            &quot;La vérité vous rendra libres&quot; - Jean 8:32
          </h2>
          <p className="text-slate-600">
            Ces ressources vous aideront à grandir dans la connaissance et l&apos;amour de Dieu
          </p>
        </div>
      </div>
    </div>
  )
}