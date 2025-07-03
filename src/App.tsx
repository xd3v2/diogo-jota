import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Heart, Trophy, Users, Calendar, MapPin, Star } from 'lucide-react'

function App() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-2">
                            <Heart className="h-6 w-6 text-liverpool-red" />
                            <span className="text-xl font-semibold text-gray-900">In Memory of Diogo Jota</span>
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <a href="#hero" className="text-gray-600 hover:text-liverpool-red transition-colors">Home</a>
                            <a href="#career" className="text-gray-600 hover:text-liverpool-red transition-colors">Career</a>
                            <a href="#achievements" className="text-gray-600 hover:text-liverpool-red transition-colors">Achievements</a>
                            <a href="#tributes" className="text-gray-600 hover:text-liverpool-red transition-colors">Tributes</a>
                        </nav>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="hero-section bg-gradient-to-b from-liverpool-red to-red-800 text-white py-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <div className="mb-8">
                            <img
                                src="https://catalunyadiari.com/filesedc/uploads/image/post/2025/07/diogo-jota-atletico_1200_800.webp"
                                alt="Diogo Jota"
                                className="w-48 h-48 mx-auto rounded-full border-4 border-white shadow-2xl object-cover"
                            />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            Diogo Jota
                        </h1>
                        <p className="text-xl md:text-2xl mb-2 text-gray-100">
                            4 December 1996 - 3 July 2025
                        </p>
                        <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
                            "He took us to victory" - A beloved Liverpool striker, devoted father, and inspiration to millions
                        </p>
                        <div className="flex justify-center space-x-4 flex-wrap gap-2">
                            <Badge variant="gold" className="text-lg px-4 py-2">Liverpool FC #20</Badge>
                            <Badge variant="gold" className="text-lg px-4 py-2">Portugal International</Badge>
                            <Badge variant="gold" className="text-lg px-4 py-2">Father of Three</Badge>
                        </div>
                    </div>
                </div>
            </section>

            {/* Memorial Quote */}
            <section className="bg-white py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <blockquote className="text-3xl md:text-4xl font-serif italic text-gray-700 mb-6">
                        "What I didn't know when I saw him first is Diogo is an incredible package. From a personality point of view he is an incredible boy, really smart, structured in a nice way."
                    </blockquote>
                    <p className="text-lg text-gray-600">- Jürgen Klopp</p>
                </div>
            </section>

            {/* Career Timeline */}
            <section id="career" className="memorial-section bg-gray-50">
                <div className="memorial-container">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Career Journey</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {/* Paços de Ferreira */}
                        <Card className="memorial-card hover:shadow-xl transition-shadow">
                            <div className="h-40 overflow-hidden">
                                <img
                                    src="https://placehold.co/400x300/2E7D32/ffffff/png?text=Estadio+da+Mata+Real"
                                    alt="Paços de Ferreira Stadium"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <MapPin className="h-5 w-5 text-liverpool-red" />
                                    Paços de Ferreira
                                </CardTitle>
                                <CardDescription>2013-2016 • Where it all began</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="memorial-stat-label">Appearances</span>
                                        <span className="memorial-stat">47</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="memorial-stat-label">Goals</span>
                                        <span className="memorial-stat">18</span>
                                    </div>
                                    <p className="memorial-text text-sm">
                                        Made his professional debut and became the youngest player to score for the club in Primeira Liga.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Wolves */}
                        <Card className="memorial-card hover:shadow-xl transition-shadow">
                            <div className="h-40 overflow-hidden">
                                <img
                                    src="https://placehold.co/400x300/FBA31A/000000/png?text=Wolves+2017-2020"
                                    alt="Diogo Jota at Wolves"
                                    className="w-full h-full object-cover bg-orange-500"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Star className="h-5 w-5 text-liverpool-red" />
                                    Wolverhampton Wanderers
                                </CardTitle>
                                <CardDescription>2017-2020 • The breakthrough</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="memorial-stat-label">Appearances</span>
                                        <span className="memorial-stat">131</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="memorial-stat-label">Goals</span>
                                        <span className="memorial-stat">44</span>
                                    </div>
                                    <p className="memorial-text text-sm">
                                        Helped Wolves achieve promotion to the Premier League and established himself as a top-flight player.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Liverpool */}
                        <Card className="memorial-card hover:shadow-xl transition-shadow border-liverpool-red">
                            <div className="h-40 overflow-hidden">
                                <img
                                    src="https://placehold.co/400x300/C8102E/ffffff/png?text=Liverpool+%23Never+Walk+Alone"
                                    alt="Diogo Jota celebrating for Liverpool"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-liverpool-red">
                                    <Heart className="h-5 w-5" />
                                    Liverpool FC
                                </CardTitle>
                                <CardDescription>2020-2025 • Home at last</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-3">
                                    <div className="flex justify-between">
                                        <span className="memorial-stat-label">Appearances</span>
                                        <span className="memorial-stat">182</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="memorial-stat-label">Goals</span>
                                        <span className="memorial-stat">65</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="memorial-stat-label">Assists</span>
                                        <span className="memorial-stat">22</span>
                                    </div>
                                    <p className="memorial-text text-sm">
                                        Became a fan favorite and crucial player in Liverpool's success, scoring memorable goals and creating unforgettable moments.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Achievements */}
            <section id="achievements" className="memorial-section bg-white">
                <div className="memorial-container">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Achievements & Honors</h2>

                    {/* Trophy celebration image */}
                    <div className="text-center mb-12">
                        <img
                            src="https://placehold.co/800x400/FFD700/000000/png?text=Premier+League+Champions+2024-25"
                            alt="Diogo Jota celebrating with trophies"
                            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg object-cover h-64 md:h-80"
                        />
                        <p className="text-sm text-gray-500 mt-2 italic">Celebrating success with Liverpool FC</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                        {/* Club Honors */}
                        <Card className="memorial-card">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Trophy className="h-6 w-6 text-liverpool-gold" />
                                    Club Honors
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold">Premier League</span>
                                        <Badge variant="gold">2024-25</Badge>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold">FA Cup</span>
                                        <Badge variant="gold">2022</Badge>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold">Carabao Cup</span>
                                        <Badge variant="gold">2022, 2024</Badge>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="font-semibold">UEFA Nations League</span>
                                        <Badge variant="gold">2025</Badge>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* International Career */}
                        <Card className="memorial-card">
                            <div className="h-40 overflow-hidden">
                                <img
                                    src="https://placehold.co/400x300/DC143C/ffffff/png?text=Portugal+Nacional+Team"
                                    alt="Diogo Jota with Portugal national team"
                                    className="w-full h-full object-cover bg-red-600"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Users className="h-6 w-6 text-liverpool-red" />
                                    Portugal National Team
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex justify-between">
                                        <span className="memorial-stat-label">Caps</span>
                                        <span className="memorial-stat">49</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="memorial-stat-label">Goals</span>
                                        <span className="memorial-stat">14</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="memorial-stat-label">Debut</span>
                                        <span className="text-sm">Nov 14, 2019</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="memorial-stat-label">Last Match</span>
                                        <span className="text-sm">June 8, 2025</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Statistics */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="memorial-stat">182</div>
                            <div className="memorial-stat-label">Liverpool Apps</div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="memorial-stat">65</div>
                            <div className="memorial-stat-label">Liverpool Goals</div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="memorial-stat">49</div>
                            <div className="memorial-stat-label">Portugal Caps</div>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="memorial-stat">28</div>
                            <div className="memorial-stat-label">Age</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Personal Life */}
            <section className="memorial-section bg-gray-50">
                <div className="memorial-container">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Personal Life</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <Card className="memorial-card">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src="https://placehold.co/600x400/4CAF50/ffffff/png?text=Family+Celebration+June+2025"
                                    alt="Diogo Jota with family"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Heart className="h-6 w-6 text-liverpool-red" />
                                    Family Man
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <p className="memorial-text">
                                        Diogo married his childhood sweetheart Rute Cardoso on June 22, 2025, describing it as "a day we will never forget."
                                        The couple were blessed with three beautiful children, including their son Dinis.
                                    </p>
                                    <div className="memorial-quote">
                                        "My dream come true" - Rute Cardoso on their wedding day
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="memorial-card">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Calendar className="h-6 w-6 text-liverpool-red" />
                                    Recent Milestones
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="border-l-4 border-liverpool-red pl-4">
                                        <div className="font-semibold">June 22, 2025</div>
                                        <div className="text-sm text-gray-600">Married Rute Cardoso in Porto</div>
                                    </div>
                                    <div className="border-l-4 border-liverpool-red pl-4">
                                        <div className="font-semibold">June 8, 2025</div>
                                        <div className="text-sm text-gray-600">Won UEFA Nations League with Portugal</div>
                                    </div>
                                    <div className="border-l-4 border-liverpool-red pl-4">
                                        <div className="font-semibold">May 25, 2025</div>
                                        <div className="text-sm text-gray-600">Celebrated Premier League title with Liverpool</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Tributes */}
            <section id="tributes" className="memorial-section bg-white">
                <div className="memorial-container">
                    <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Tributes & Remembrances</h2>

                    {/* Tribute image */}
                    <div className="text-center mb-12">
                        <img
                            src="https://placehold.co/500x400/C8102E/ffffff/png?text=With+Manager+Klopp"
                            alt="Diogo Jota with Jürgen Klopp"
                            className="w-full max-w-md mx-auto rounded-lg shadow-lg object-cover h-48 md:h-64"
                        />
                        <p className="text-sm text-gray-500 mt-2 italic">With manager Jürgen Klopp</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <Card className="memorial-card">
                            <CardHeader>
                                <CardTitle>Jürgen Klopp</CardTitle>
                                <CardDescription>Former Liverpool Manager</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="memorial-quote">
                                    "Diogo was on my list for the last 2-3 years. I'm really happy that he's here now. What I didn't know when I saw him first is Diogo is an incredible package. From a personality point of view he is an incredible boy, really smart, structured in a nice way."
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="memorial-card">
                            <CardHeader>
                                <CardTitle>Cristiano Ronaldo</CardTitle>
                                <CardDescription>Portugal Teammate</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="memorial-quote">
                                    "This makes no sense. We will all miss you. Rest in peace, brother."
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="memorial-card">
                            <CardHeader>
                                <CardTitle>Ian Rush</CardTitle>
                                <CardDescription>Liverpool Legend</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="memorial-quote">
                                    "He is most probably the most natural finisher at the club. He reminds me of Kevin Keegan. For someone who is a small man, he is very, very good in the air. He has got a football brain."
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="memorial-card">
                            <CardHeader>
                                <CardTitle>Arne Slot</CardTitle>
                                <CardDescription>Liverpool Manager</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="memorial-quote">
                                    "What to say? What can anyone say at a time like this when the shock and the pain is so incredibly raw? I wish I had the words but I know I do not."
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Final Tribute */}
            <section className="bg-gradient-to-r from-liverpool-red to-red-700 text-white py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold mb-8">You'll Never Walk Alone</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Diogo Jota will forever be remembered not just for his goals and trophies, but for the joy he brought to millions of fans,
                        the love he shared with his family, and the passion he displayed every time he stepped onto the pitch.
                    </p>
                    <div className="space-y-4">
                        <p className="text-lg">
                            "He took us to victory" - and he always will, in our hearts and memories.
                        </p>
                        <p className="text-lg font-semibold">
                            Rest in peace, Diogo. Thank you for everything.
                        </p>
                    </div>
                    <div className="mt-8 flex justify-center">
                        <Heart className="h-12 w-12 text-liverpool-gold" />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-gray-400">
                        This memorial page is created with love and respect for Diogo Jota's memory.
                    </p>
                    <p className="text-gray-400 mt-2">
                        4 December 1996 - 3 July 2025 • Forever in our hearts
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default App 