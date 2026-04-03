import { motion } from "framer-motion";
import { Trophy, MapPin, Calendar, Users } from "lucide-react";

const stats = [
  { icon: Users, label: "Players", value: "10" },
  { icon: Trophy, label: "League", value: "APL" },
  { icon: MapPin, label: "Venue", value: "School Ground, Adkar" },
  { icon: Calendar, label: "Date", value: "April 5, 2025" },
];

const TeamInfo = () => {
  return (
    <section className="py-16 border-y border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-heading text-2xl md:text-3xl text-foreground">{stat.value}</p>
              <p className="font-body text-sm text-muted-foreground tracking-wider uppercase mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamInfo;
