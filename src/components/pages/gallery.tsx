import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const photos = [
  {
    src: "working.jpeg",
    alt: "Raftaar at Work 1"
  },
  {
    src: "raftaar_sponsor.jpeg",
    alt: "Sponsor Masterclass"
  },
  {
    src: "Racing_cars.jpeg",
    alt: "Racing cars"
  },
  {
    src: "working2.jpeg",
    alt: "Raftaar at Work 2"
  },
  {
    src: "Raftaar-merch1.jpeg",
    alt: "Raftaar Team Uniform-Front"
  },
  {
    src: "Raftaar-merch2.jpeg",
    alt: "Raftaar Team Uniform-Back",
    className: "object-[center_10%]"
  }
];

export default function Gallery() {
  return (
    <div className="min-h-screen pt-20">
      <div className="container px-6 md:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Gallery</h1>

        <Tabs defaultValue="photos">
          <TabsList className="mb-8">
            <TabsTrigger value="photos">Photos</TabsTrigger>
            <TabsTrigger value="videos">Videos</TabsTrigger>
          </TabsList>

          <TabsContent value="photos">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo, i) => (
                <div key={i} className="aspect-video relative overflow-hidden rounded-lg">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos">
            <div className="text-center py-12">
              <p>Videos coming soon!</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}