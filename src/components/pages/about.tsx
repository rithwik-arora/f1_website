import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen pt-20 overflow-x-hidden">
      <div className="w-full max-w-[100vw] px-6 md:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">About Raftaar</h1>

        {/* Team Image with Border - Left and Right */}
        <div className="flex justify-center items-center w-full mb-12">
          <div className="w-[48%] border-4 border-primary rounded-xl overflow-hidden flex items-center justify-center mr-2">
            <img
              src="team-logo-black.png"
              alt="Team photo"
              className="object-contain w-full h-full"
            />
          </div>
          <div className="w-[48%] border-4 border-primary rounded-xl overflow-hidden flex items-center bg-black justify-center ml-2">
            <img
              src="team-identity.png"
              alt="Team photo"
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* Horizontal Text Section */}
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row gap-12 mb-16 w-full max-w-6xl">
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-semibold text-center md:text-left">Team Name</h2>
              <p className="text-lg text-center md:text-left">
                Raftaar is not only a name that is built on the desire of pure speed, but it embodies the spirit of the new fast-paced world that we live in. It represents our relentless pursuit of excellence. Our team thrives on innovation, continuously adapting to challenges and pushing the boundaries of what's possible.
              </p>
            </div>
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl font-semibold text-center md:text-left">Team Philosophy</h2>
              <p className="text-lg text-center md:text-left">
                Our team philosophy is embedded into our thrive for innovation, with each step being an improvement from the past. Our goal focusing on progressing with each challenge and reflecting on the learnings obtained.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Images Section */}
        <div className="mt-16">
          <h2 className="text-4xl font-semibold mb-8 text-center">Our Brand Identity</h2>
          <div className="grid md:grid-cols-2 gap-8 w-full">
            {/* First Image */}
            <div className="flex flex-col items-center">
              <img
                src="typography.png"
                alt="Team event 1"
                className="border-4 border-black rounded-xl overflow-hidden flex items-center justify-center bg-white w-full h-[500px] object-cover"
              />
              <p className="mt-4 text-lg font-medium">
                Our typography show our fast-paced and high performance identity. With clean, bold fonts, we ensure clarity and impact, communicating our values with precision. The modern design mirrors the innovation and speed inherent in our team, reinforcing our connection to the cutting-edge world of Formula 1 racing.
              </p>
            </div>

            {/* Second Image */}
            <div className="flex flex-col items-center">
              <img
                src="colors.png"
                alt="Team event 2"
                className="border-4 border-black rounded-xl overflow-hidden flex items-center justify-center bg-white w-full h-[500px] object-cover"
              />
              <p className="mt-4 text-lg font-medium">  Our color scheme is designed to create maximum impact. The deep blue conveys trust and professionalism, while the white keeps our communication clean and accessible. The vibrant teal adds energy and creativity to our visual identity, balanced by black for strength and sophistication. Together, these colors create a memorable impression that reflects our dynamic team spirit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}