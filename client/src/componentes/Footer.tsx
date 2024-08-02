import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


export const Footer = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

  return (
    <div className=" mx-auto bg-BgPurpleF flex flex-col space-y-3 mt-32 p-6 ">
        <a href="/" className="flex flex-row justify-center py-2">
        <img src="./assets/navBarLogo.png" alt="" className="object-cover w-30 h-10" data-aos="fade-down"/>
        </a>
        
        <div className="">
            <ul className="flex flex-row space-x-4 justify-center p-3 font-bold" data-aos="fade-left">
                <li><a href="#home" className="hover:text-bgYellow">Home</a></li>
                <li><a href="#about" className="hover:text-bgYellow">About</a></li>
                <li><a href="#skills" className="hover:text-bgYellow">Skills</a></li>
                <li><a href="#project" className="hover:text-bgYellow">Project</a></li>
                <li><a href="#contact" className="hover:text-bgYellow">Contact</a></li>
            </ul>
        </div>
        <div className="">
            <ul className="flex flex-col space-y-4 space-x-0 items-center p-3 text-xl md:flex-row md:space-x-4 md:space-y-0 md:justify-around" >
                <li className="flex flex-row  items-center space-x-2 ">
                    <img src="./assets/email.png" alt="" />
                    <a href="mailto:wissalmerabet@email.com">wissalmerabet5@email.com</a>
                </li>
                <li className="flex flex-row items-center space-x-2">
                    <img src="./assets/linkedin.png" alt="" />
                    <a href="https://www.linkedin.com/in/wissal-merabet-61033128b">linkedin.com/wissal-merabet</a>
                </li>
                <li className="flex flex-row items-center space-x-2">
                    <img src="./assets/github.png" alt="" />
                    <a href="https://github.com/wissalMerabet">github.com/wissalMerabet</a>
                </li>
                
            </ul>
        </div>

        
        
    </div>
  )
}
