import {
  Users,
  Star,
  Shirt,
  Award
} from "lucide-react";

const stats = [
  {
    title: "Happy Clients",
    value: "5,000+",
    icon: Users,
  },
  {
    title: "Luxury Designs",
    value: "12,000+",
    icon: Shirt,
  },
  {
    title: "Years Experience",
    value: "10+",
    icon: Award,
  },
  {
    title: "Client Satisfaction",
    value: "99%",
    icon: Star,
  },
];

export default function Stats() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto grid gap-8 px-6 md:grid-cols-2 lg:grid-cols-4">

        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="group rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition hover:-translate-y-2 hover:border-purple-500"
            >
              <Icon
                size={40}
                className="mb-6 text-purple-500"
              />

              <h2 className="text-5xl font-bold">
                {stat.value}
              </h2>

              <p className="mt-3 text-gray-400">
                {stat.title}
              </p>
            </div>
          );
        })}

      </div>
    </section>
  );
}