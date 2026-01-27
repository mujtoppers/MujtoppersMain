import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const cards = [
  {
    link: "https://material.mujtoppers.in/materials/first-year",
    title: "First Year",
    description: "Foundation courses and core fundamentals",
    gradient: "bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600",
    icon: "📚",
    direction: "left" // Coming from left
  },
  {
    link: "https://material.mujtoppers.in/materials/btech",
    title: "Second Year",
    description: "Advanced topics and specialized skills",
    gradient: "bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600",
    icon: "🔬",
    direction: "right" // Coming from right
  },
  {
    link: "https://material.mujtoppers.in/materials/btech",
    title: "Third Year",
    description: "Practical applications and projects",
    gradient: "bg-gradient-to-br from-amber-500 via-orange-500 to-rose-600",
    icon: "⚙️",
    direction: "left" // Coming from left
  },
  {
    link: "https://material.mujtoppers.in/materials/btech",
    title: "Fourth Year",
    description: "Specialization and career preparation",
    gradient: "bg-gradient-to-br from-fuchsia-500 via-pink-500 to-rose-600",
    icon: "🎓",
    direction: "right" // Coming from right
  },
];

const CardGrid = () => {
  const router = useRouter();

  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Get dynamic card variants based on direction
  const getCardVariants = (direction: any) => ({
    hidden: {
      opacity: 0,
      x: direction === "left" ? -100 : 100,
      y: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 45, // Lower stiffness for smoother animation
        damping: 15,   // Higher damping to reduce oscillation
        mass: 0.8      // Lower mass for faster response
      }
    },
    hover: {
      y: -8,           // Reduced movement
      scale: 1.03,     // Subtler scale effect
      boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.2)",
      transition: {
        duration: 0.3, // Longer duration for smoother effect
        ease: [0.25, 0.1, 0.25, 1] // Custom cubic-bezier for smoother feel
      }
    },
    tap: {
      scale: 0.98,
      boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
      transition: {
        duration: 0.15 // Slightly longer for smoother effect
      }
    }
  });

  // Text reveal animation
  const textVariants = {
    hidden: {
      opacity: 0,
      y: 10
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  // Badge animation
  const badgeVariants = {
    hidden: {
      opacity: 0,
      scale: 0.9,
      x: -10
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        delay: 0.3,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="py-20 min-h-screen b">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 max-w-6xl mx-auto"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={getCardVariants(card.direction)}
            whileHover="hover"
            whileTap="tap"
            className={`relative h-80 rounded-xl overflow-hidden shadow-lg cursor-pointer ${card.gradient}`}
            onClick={() => router.push(card.link)}
          >
            {/* Animated Background Elements with reduced animation speed */}
            <motion.div
              className="absolute inset-0 opacity-20"
              initial={{ backgroundPosition: "0% 0%" }}
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%"],
                transition: {
                  repeat: Infinity,
                  repeatType: "mirror",
                  duration: 30, // Longer duration for smoother animation
                  ease: "linear"
                }
              }}
              style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")",
                backgroundSize: "300px 300px"
              }}
            />

            {/* Semi-transparent overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>

            {/* Year Badge */}
            <motion.div
              variants={badgeVariants}
              className="absolute top-6 left-6 bg-white bg-opacity-20 backdrop-blur-md rounded-full px-4 py-2 border border-white border-opacity-30 flex items-center"
            >
              <span className="text-2xl mr-2">{card.icon}</span>
              <span className="text-white font-bold">{card.title}</span>
            </motion.div>

            {/* Large Year Number */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.15, scale: 1 }}
                transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
                className="text-white text-opacity-20 text-9xl font-black"
              >
                {card.title.split(" ")[0].charAt(0)}
              </motion.div>
            </div>

            {/* Card Content */}
            <motion.div
              className="absolute bottom-0 left-0 w-full p-6"
              variants={textVariants}
            >
              <div className="bg-black bg-opacity-30 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-white text-2xl font-bold">{card.title}</h3>
                <motion.div
                  className="h-1 w-12 bg-white mt-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: 48 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                />
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                  className="text-white text-opacity-90 mt-2"
                >
                  {card.description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center mt-3 text-white text-opacity-90"
                >
                  <span className="mr-2">View details</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CardGrid;