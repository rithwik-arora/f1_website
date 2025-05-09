


import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <div className="h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/5 w-full max-w-[100vw]">
        <div className="px-6 md:px-8 text-center w-full space-y-6">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">Raftaar Racing</h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-snug">
            A new competitive force in F1 in Schools, combining engineering excellennce with racing passion
            </p>
          </div>
          <div className="pt-6">
            <Link href="/about">
              <Button size="lg" className="text-lg md:text-xl py-6 px-8">
                Meet the team behind the speed
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* What We Do Section - Updated with centered content */}
      <section className="py-16 w-full max-w-[100vw] bg-white">
        <div className="px-6 md:px-8 w-full max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Drives Us</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary/10 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">The Competition</h3>
              <p className="text-lg mx-auto max-w-md">
                Taking on the F1 in Schools challenge - designing, testing and racing miniature F1 cars
              </p>
            </div>
            <div className="bg-secondary/10 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">The Experience</h3>
              <p className="text-lg mx-auto max-w-md">
                Developing real engineering, business and teamwork skills through hands-on racing
              </p>
            </div>
          </div>
            <div><img
  src="team-photo-main.jpg"
  alt="Team event 2"
  className="border-4 border-primary rounded-xl bg-white w-[100%] h-[75%] object-cover transform scale-69"
/>
</div>
        </div>
      </section>

      {/* Current Focus Section*/}
      <section className="py-16 w-full max-w-[100vw] bg-gray-50">
        <div className="px-6 md:px-8 w-full max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Current Journey</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Preparing for our first F1 in Schools competition with dedication and innovation
          </p>
          <Link href="/gallery">
            <Button variant="outline" size="lg" className="text-lg py-6 px-8 border-2">
              See Our Progress
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

