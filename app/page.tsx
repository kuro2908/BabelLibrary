import { MainLayout } from "@/components/main-layout";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section - Full Screen */}
      <section className="hero-section h-screen relative flex items-center justify-center">
        {/* Background Image - Placeholder */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000')",
          }}
        />

        {/* Overlay */}
        <div className="hero-overlay absolute inset-0" />

        {/* Content */}
        <div className="relative z-10 text-center px-8 max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Welcome to BabelLib
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 drop-shadow-lg">
            Discover, read, and share your favorite books in one beautiful place
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-black rounded-full font-semibold text-lg hover:bg-white/90 transition-all hover:scale-105 shadow-2xl">
              Browse Library
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all hover:scale-105 shadow-2xl">
              Upload Book
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-20 px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Books</h2>
          <p className="text-foreground/70 text-lg mb-12">Discover our curated collection</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((book) => (
              <div
                key={book}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] bg-foreground/5 rounded-2xl mb-4 overflow-hidden relative group-hover:shadow-2xl transition-all">
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 to-foreground/5 group-hover:from-foreground/20 group-hover:to-foreground/10 transition-all" />
                  <div className="absolute inset-0 flex items-center justify-center text-6xl opacity-20">
                    📖
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-1 group-hover:text-foreground/80 transition-colors">
                  Book Title {book}
                </h3>
                <p className="text-foreground/60 text-sm">Author Name</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-8 bg-foreground/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-foreground mb-2">10,000+</div>
              <div className="text-foreground/60 text-lg">Books Available</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-foreground mb-2">5,000+</div>
              <div className="text-foreground/60 text-lg">Active Readers</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-foreground mb-2">100+</div>
              <div className="text-foreground/60 text-lg">Authors</div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}


