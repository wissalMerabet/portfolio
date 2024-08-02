import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect, FormEvent } from 'react';
import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const sendMessage = (e: FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!name || !email || !message) {
      setErrorMessage("All fields are required!");
      return;
    }
    

    Axios.post("http://localhost:3003/sendMsg", { name, email, message })
      .then(res => {
        console.log(res.data);
        setSuccessMessage("Message sent successfully!");
        setErrorMessage(''); // Clear error message if any
        setName('');
        setEmail('');
        setMessage('');

      })
      .catch(err => {
        console.error(err);
        setErrorMessage("Failed to send the message.");
        setSuccessMessage(''); // Clear success message if any
      });
  };

  const clearMessage = () => {
    setSuccessMessage('');
    setErrorMessage('');
  };

  return (
    <div className="container mt-32 p-6 flex flex-col mx-auto text-center items-center text-white" id="contact">
      <h1 className="font-bold text-bgYellow text-3xl uppercase mb-12" data-aos="fade-down">Contact me</h1>
      <form className="w-full max-w-lg">
        <div className="mb-5">
          <input 
            type="text" 
            value={name}
            placeholder="name" 
            onChange={(e) => setName(e.target.value)} 
            className="w-full py-2 px-3 border-none rounded-md bg-BgPurpleC focus:outline-none focus:ring-2 focus:ring-bgYellow shadow-custom-yellow" 
          />
        </div>
        <div className="mb-5">
          <input 
            type="text" 
            value={email}
            placeholder="email" 
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full py-2 px-3 border-none rounded-md bg-BgPurpleC focus:outline-none focus:ring-2 focus:ring-bgYellow shadow-custom-yellow" 
          />
        </div>
        <div className="mb-5">
          <textarea 
            value={message}
            onChange={(e) => setMessage(e.target.value)} 
            placeholder="your message ..." 
            className="w-full py-3 px-4 border-none rounded-md bg-BgPurpleC focus:outline-none focus:ring-2 focus:ring-bgYellow h-32 resize-none shadow-custom-yellow">
          </textarea>
        </div>
        <div className="my-5">
          <button onClick={sendMessage} type="submit" className="btn text-bgYellow font-bold self-center md:self-start border-2 border-bgYellow hover:bg-bgYellow hover:text-BgPurple rounded-full px-4 py-2" data-aos="fade-left">Send message</button>
        </div>
      </form>
      {successMessage && (
        <div className="mt-6 p-5 bg-BgPurpleC text-yellow-400 shadow-custom-yellow rounded-lg relative">
          {successMessage}
          <FontAwesomeIcon 
            icon={faTimes} 
            className="absolute top-0 right-0 mt-2 mr-2 cursor-pointer" 
            onClick={clearMessage} 
          />
        </div>
      )}
      {errorMessage && (
        <div className="mt-6 p-5 bg-BgPurpleC text-yellow-300 shadow-custom-yellow rounded-lg relative">
          {errorMessage}
          <FontAwesomeIcon 
            icon={faTimes} 
            className="absolute top-0 right-0 mt-2 mr-2 cursor-pointer" 
            onClick={clearMessage} 
          />
        </div>
      )}
    </div>
  );
};
