/** @format */

"use client";

// import { useState } from "react";
import { motion } from "framer-motion";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";

// const images = [
//   {
//     src: "/ai1.png",
//     alt: "AI generated sphere in desert",
//     category: "Machine Learning",
//   },
//   {
//     src: "/ai2.png",
//     alt: "AI generated circular structure",
//     category: "Blockchain (Web 3)",
//   },
//   {
//     src: "/ai3.png",
//     alt: "AI generated crystal sphere in water",
//     category: "Data Science",
//   },
// ];

// const categories = ["All", "Machine Learning", "Data Science", "Web3"];

export function AIImageGallery() {
  // const [selectedCategory] = useState("All");

  // const filteredImages =
  //   selectedCategory === "All"
  //     ? images
  //     : images.filter((img) => img.category === selectedCategory);

  return (
    <section className="bg-purple-950 py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center text-4xl font-bold text-white md:text-7xl"
        >
          DOMAINS OFFERED
        </motion.h2>
      </div>
    </section>
  );
}
