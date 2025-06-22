
import React from 'react';

import { motion } from 'framer-motion';


function Header() {
  return (
    <header className="relative  flex flex-col justify-center items-center text-center flex-wrap">
      <motion.h1
        className="Autorob-text flex justify-center items-center flex-wrap"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to AutoRob
      </motion.h1>
      <motion.p
        className="mt-4 text-xl text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Justifying 'T' in HBTU
      </motion.p>
    </header>
  );
}

export default Header;