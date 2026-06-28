import { Crown, Gem } from "lucide-react";

const collections = [
  {
    title: "Men's Collection",
    description:
      "Premium suits, tuxedos and bespoke fashion for modern gentlemen.",
    icon: Crown,
  },
  {
    title: "Women's Collection",
    description:
      "Elegant dresses and luxury designs crafted for timeless beauty.",
    icon: Gem,
  },
];

export default function Collections() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="mb-16 text-center text-5xl font-bold">
          Signature Collections
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">

          {collections.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative h-[500px] overflow-hidden rounded-[40px] border border-white/10"
              >
                <img
                  src="/image16.jpeg"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  alt={item.title}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute bottom-8 left-8">
                  <Icon
                    size={50}
                    className="mb-6 text-purple-500"
                  />

                  <h3 className="text-4xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-md text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}

        </div>
      </div>

    </section>
  );
}