import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "./Image";

//variants
const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 200
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
};



const Loader = ({ setLoading }) => {
  return (
    <div className='loader'>
      <motion.div
        className='loader-inner'
        variants={container}
        initial='hidden'
        animate='show'
        exit='exit'
        onAnimationComplete={() => setLoading(false)}>
        <ImageBlock variants={item} id='model1a' />
        <motion.div className='transition-image' variants={itemMain}>
          <motion.img
            src={process.env.PUBLIC_URL + `/images/models.jpg`}
            alt='random alt' layoutId="main-image-1" id='models'
          />
        </motion.div>
        <ImageBlock variants={item} id='model2a' />
        <ImageBlock variants={item} id='model3a' />
        <ImageBlock variants={item} id='model' />
      </motion.div>
    </div>
  );
};

export const ImageBlock = ({ id, variants }) => {
  return (
    <motion.div className={`image-block ${id}`}
      variants={variants} >
      <Image
        src={process.env.PUBLIC_URL + `/images/${id}.webp`}
        fallback={process.env.PUBLIC_URL + `/images/${id}.jpg`}
        alt={id}
      />
    </motion.div>
  );
};
export default Loader;
