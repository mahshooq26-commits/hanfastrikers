import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { User } from "lucide-react";
import React from "react";

interface PlayerCardProps {
  name: string;
  role: string;
  badge?: string;
  image?: string;
  index: number;
}

const PlayerCard = ({ name, role, badge, image, index }: PlayerCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);

  // Glare position
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], [100, -100]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], [100, -100]);
  const glareOpacity = useTransform(mouseXSpring, [-0.5, 0, 0.5], [0.3, 0, 0.3]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
      className="perspective-1000 w-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="group relative rounded-xl overflow-hidden glassmorphism border border-white/10 shadow-2xl transition-all duration-300 transform-gpu cursor-pointer bg-card/40 backdrop-blur-md"
      >
        {/* Dynamic Glare Effect */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-20 rounded-xl"
          style={{
            x: glareX,
            y: glareY,
            opacity: glareOpacity,
            background: "radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)",
            mixBlendMode: "overlay",
          }}
        />

        {badge && (
          <div 
            style={{ transform: "translateZ(30px)" }} 
            className="absolute top-4 right-4 z-30 px-3 py-1 bg-gradient-to-r from-gold to-yellow-400 text-black font-heading text-xs uppercase font-bold tracking-widest rounded shadow-lg backdrop-blur-sm"
          >
            {badge}
          </div>
        )}

        <div 
          className="aspect-[3/4] flex items-center justify-center relative overflow-hidden bg-black/20"
          style={{ transform: "translateZ(10px)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 z-10" />
          {image ? (
            <img 
              src={image} 
              alt={name} 
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
            />
          ) : (
            <User className="w-20 h-20 text-muted-foreground/30 relative z-0" />
          )}
          
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-yellow-500 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 z-20" />
        </div>

        <div 
          className="p-5 text-center relative z-20 h-full"
          style={{ transform: "translateZ(40px)" }}
        >
          <h3 className="font-heading text-xl md:text-2xl text-white font-bold tracking-wide drop-shadow-md group-hover:text-gold transition-colors">
            {name}
          </h3>
          <p className="font-body text-sm text-gray-300 mt-2 tracking-widest uppercase font-medium">
            {role}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PlayerCard;
