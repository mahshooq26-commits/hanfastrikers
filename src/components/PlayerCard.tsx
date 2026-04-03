import { motion } from "framer-motion";
import { User } from "lucide-react";

interface PlayerCardProps {
  name: string;
  role: string;
  badge?: string;
  image?: string;
  index: number;
}

const PlayerCard = ({ name, role, badge, image, index }: PlayerCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative rounded-sm overflow-hidden"
      style={{ background: "var(--card-gradient)" }}
    >
      {badge && (
        <div className="absolute top-3 right-3 z-10 px-3 py-1 bg-primary text-primary-foreground font-heading text-xs tracking-widest rounded-sm">
          {badge}
        </div>
      )}

      <div className="aspect-[3/4] bg-muted flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
        <User className="w-20 h-20 text-muted-foreground/30" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
      </div>

      <div className="p-5 text-center">
        <h3 className="font-heading text-xl md:text-2xl text-foreground tracking-wide group-hover:text-gold-gradient transition-all">
          {name}
        </h3>
        <p className="font-body text-sm text-muted-foreground mt-1 tracking-wider uppercase">
          {role}
        </p>
      </div>
    </motion.div>
  );
};

export default PlayerCard;
