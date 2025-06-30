"use client";

import FrameNotFound from "@/components/FrameNotFound";
import { Button } from "@/components/ui/button";
import { poppins } from "@/lib/fonts";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
};

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function NotFoundPage() {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{
        staggerChildren: 0.3,
      }}
    >
      <FrameNotFound />

      <div className="md:px-0 px-5">
        <motion.div
          className="flex flex-col items-center space-y-3 text-center"
          variants={containerVariants}
          transition={{
            staggerChildren: 0.3,
          }}
        >
          <motion.h1
            className={`${poppins.className} font-bold lg:text-[180px] sm:text-[140px] text-8xl tracking-normal leading-none`}
            variants={itemVariants}
            transition={{ type: "spring", stiffness: 100 }}
          >
            404
          </motion.h1>

          <motion.div
            className="font-bold lg:text-5xl sm:text-3xl text-2xl leading-tight"
            variants={itemVariants}
            transition={{ type: "spring", stiffness: 100 }}
          >
            Страница не найдена
          </motion.div>

          <motion.p
            className="leading-snug lg:text-[20px] sm:text-sm text-xs text-neutral-400 mb-8"
            variants={itemVariants}
            transition={{ type: "spring", stiffness: 100 }}
          >
            Эта страница отправилась на апгрейд, как топовый игровой ПК.
            <br />
            Пока вы ждёте, посмотрите наши новейшие сборки!
          </motion.p>

          <motion.div
            variants={itemVariants}
            transition={{ type: "spring", stiffness: 100 }}
          >
            <Button
              asChild
              className="cursor-pointer dark:bg-white dark:text-black rounded-4xl lg:text-base sm:text-sm text-xs lg:px-12 sm:px-8 lg:py-6 sm:py-4 hover:bg-purple-700 hover:text-white dark:hover:bg-purple-700 dark:hover:text-white"
            >
              <Link href={"/"}>К игровым сборкам</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
export default NotFoundPage;
