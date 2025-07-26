import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ChickenNewsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-orange-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-orange-800 mb-1">📰 🐣 THE CHICKEN EMPIRE GAZETTE</h1>
            <p className="text-base text-orange-600 font-medium">Latest News from the Coop and Beyond!</p>
            <Badge variant="outline" className="mt-2 text-orange-700 border-orange-300">
              Issue #07 | {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </Badge>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-bold text-orange-800">📰 LATEST NEWS</h2>
          </div>

          <div className="flex flex-col gap-8">
            <Card className="bg-white/70 border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-orange-800 mb-4">
                  We've hatched. The farm is open. Let's build an empire.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <img
                    src="/images/chicken-empire-hero.png"
                    alt="Chicken Empire - Farmer running towards chickens on a coop"
                    className="w-full h-[330px] object-cover rounded-lg"
                  />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We're excited to officially announce the launch of Chicken Empire 1.0 — the very first public version
                  of the game is now live!
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  After months of development, testing, and watching chickens run in circles, the core gameplay loop is
                  ready for everyone to enjoy. Now it's your turn to step into the boots of a farmer and grow your very
                  own chicken-powered empire.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-orange-800 mb-4">
                  Chicken Empire 1.0 — The First Official Release Is Here!
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <img
                    src="/images/chicken-empire-1-0.png"
                    alt="Chicken Empire 1.0 - Farmer with chickens and farm buildings"
                    className="w-full h-[330px] object-cover rounded-lg"
                  />
                </div>
                <p className="text-gray-700 leading-relaxed font-medium mb-4">
                  We've hatched. The farm is open. Time to build your empire.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We're excited to announce that Chicken Empire 1.0 is now live!
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  This is the first full, stable release of the game — polished, optimized, and ready for
                  chicken-powered fun.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  After months of development, testing, and hundreds of eggs laid, we're finally launching the game for
                  everyone. Now it's your turn to step into the role of a farmer and grow your own legendary Chicken
                  Empire.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/70 border-orange-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl text-orange-800 mb-4">Chicken Empire 1.1 — Almost Here</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <img
                    src="/images/chicken-empire-1-1.png"
                    alt="Chicken Empire 1.1 - Farmer planning and drawing blueprints with chicken watching"
                    className="w-full h-[330px] object-cover rounded-lg"
                  />
                </div>
                <p className="text-gray-700 leading-relaxed font-medium mb-4">
                  Big ideas. Parallel development. A new chapter begins.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  While we were building version 1.0, we already had more ideas than we could fit into the initial
                  release. That's why, even before launch, we started working on version 1.1 in parallel with the core
                  game.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">Version 1.0 laid the foundation.</p>
                <p className="text-gray-700 leading-relaxed">Version 1.1 takes the first big step beyond it.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-bold text-orange-800">🗺️ DEVELOPMENT ROADMAP</h2>
          </div>

          <div className="space-y-6">
            {/* Current Version */}
            <div className="relative">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-green-500 rounded-full flex-shrink-0"></div>
                <Card className="bg-white/70 border-green-200 flex-1">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-green-700">Version 1.0 - Foundation</CardTitle>
                      <Badge className="bg-green-100 text-green-700 border-green-300">LIVE NOW</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      ✅ Core gameplay loop
                      <br />✅ Basic chicken types (Normal, Golden, Rainbow)
                      <br />✅ Essential buildings (Feed Tower, Windmill, Greenhouse)
                      <br />✅ Egg collection and selling system
                      <br />✅ Upgrade mechanics
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Next Version */}
            <div className="relative">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-blue-500 rounded-full flex-shrink-0"></div>
                <Card className="bg-white/70 border-blue-200 flex-1">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-blue-700">Version 1.1 - Expansion</CardTitle>
                      <Badge className="bg-blue-100 text-blue-700 border-blue-300">COMING SOON</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">
                      🔄 Egg Vault building (offline protection)
                      <br />🐔 New Legendary chicken types
                      <br />🎨 Chicken cosmetics system
                      <br />⚡ Speed and efficiency improvements
                      <br />🎪 Seasonal events and challenges
                    </p>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-blue-800 font-medium">Expected Release: Early August 2025</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Future Version */}
            <div className="relative">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-purple-500 rounded-full flex-shrink-0"></div>
                <Card className="bg-white/70 border-purple-200 flex-1">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg text-purple-700">Version 1.2 - Space Age</CardTitle>
                      <Badge className="bg-purple-100 text-purple-700 border-purple-300">IN DEVELOPMENT</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-3">
                      🛸 Space Chickens expansion
                      <br />🌌 New cosmic environments
                      <br />🚀 Advanced building types
                      <br />👥 Multiplayer features
                      <br />🏆 Competitive leaderboards
                    </p>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="text-purple-800 font-medium">Expected Release: Fall 2025</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Connecting Line */}
            <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-300 via-blue-300 to-purple-300"></div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-sm border-t border-orange-200 mt-16">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-orange-600 font-medium">🐔 Stay clucked in for more updates from The Chicken Empire! 🐔</p>
          <p className="text-sm text-orange-500 mt-2">© 2025 The Chicken Empire Gazette. All eggs reserved.</p>
        </div>
      </footer>
    </div>
  )
}
