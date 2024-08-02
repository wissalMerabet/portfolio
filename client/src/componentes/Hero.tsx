import './../index.css';
import { motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram ,faLinkedinIn ,faGithub} from '@fortawesome/free-brands-svg-icons';

export const Hero = () => {
  return (
    <div className="container mx-auto flex flex-col-reverse space-x-10 px-6 pt-24 md:flex-row" id="home"> 

      <motion.div className="md:w-1/2 flex flex-col text-center md:text-left space-y-5 py-8 justify-center" 
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}>
        <h1 className="font-bold text-white text-3xl md:text-6xl">Hi, I'm <span className="text-bgYellow typing-text">wissal merabet</span></h1>
        <p className="text-white">I work as a full-stack developer with a focus on React and NodeJS. Reach out if you'd like to discuss more!</p>
        <a href="#contact" className="btn text-bgYellow font-bold self-center md:self-start hover:bg-bgYellow hover:text-BgPurple rounded-full px-4 py-2 shadow-custom-yellow">Contact Me</a>
        <div className="flex flex-row space-x-5 justify-center md:justify-start">
          <a href="https://www.instagram.com/wissalmerabett/"><FontAwesomeIcon icon={faInstagram} size="xl" className="text-bgYellow rounded-full  p-2 glow "/></a>
          <a href="https://www.linkedin.com/in/wissal-merabet-61033128b"><FontAwesomeIcon icon={faLinkedinIn} size="xl" className="text-bgYellow rounded-full  p-2 glow "/></a>
          <a href="https://github.com/wissalMerabet"><FontAwesomeIcon icon={faGithub} size="xl" className="text-bgYellow rounded-full  p-2 glow"/></a>
        
        
        
        </div>
      </motion.div>
      
      <motion.div className="md:w-1/2" initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}>
        <img src="./assets/heroimg.png" alt="" className="HeroImg z-"/>    
      </motion.div>

      

    </div>
  )
}
