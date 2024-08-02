// import React, { useState } from "react";
// import axios from "axios";
// import toast from "react-hot-toast";

// const Contact = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSendMessage = async (e) => {
//     e.preventDefault();
//     await axios
//       .post(
//         "http://localhost:4000/api/v1/message/send",
//         {
//           name,
//           email,
//           subject,
//           message,
//         },
//         {
//           withCredentials: true,
//           headers: { "Content-Type": "application/json" },
//         }
//       )
//       .then((res) => {
//         toast.success(res.data.message);
//         setName("");
//         setEmail("");
//         setMessage("");
//         setSubject("");
//       })
//       .catch((error) => {
//         toast.error(error.response.data.message);
//       });
//   };

//   return (
//     <>
//       <div className="contact container">
//         <div className="banner">
//           <div className="item">
//             <h4>Address</h4>
//             <p>Patiala, 147001</p>
//           </div>
//           <div className="item">
//             <h4>Call Us</h4>
//             <p>Call Us: +91-8000011111</p>
//           </div>
//           <div className="item">
//             <h4>Mail Us</h4>
//             <p>utsavplanners4u@gmail.com</p>
//           </div>
//         </div>
//         <div className="banner">
//           <div className="item">
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57929.23355645912!2d67.01519255!3d24.8441321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e70a31f45a9%3A0x25e252450977ec12!2sSaddar%20Town%2C%20Karachi%2C%20Sindh!5e0!3m2!1sen!2s!4v1709099958323!5m2!1sen!2s"
//               style={{ border: 0, width: "100%", height: "450px" }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//             />
//           </div>
//           <div className="item">
//             <form onSubmit={handleSendMessage}>
//               <h2>CONTACT</h2>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                 />
//                 <input
//                   type="email"
//                   placeholder="E-mail"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Subject"
//                 value={subject}
//                 onChange={(e) => setSubject(e.target.value)}
//               />
//               <textarea
//                 rows={10}
//                 placeholder="Message"
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//               />
//               <button type="submit">Send</button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;


import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        'https://utsav-planners.onrender.com/api/v1/message/send',
        { name, email, subject, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(res.data.message);
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
    } catch (error) {
      console.error("Error sending message:", error);
      if (error.response && error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else {
        toast.error("An error occurred. Please try again later.");
      }
    }
  };

  return (
    <>
      <Toaster />
      <div className="contact container">
       
        <div className="banner">
          
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>CONTACT US</h2>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Topic"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                rows={10}
                placeholder="Feedback/Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="item">
          
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.9205877360273!2d76.40174650220584!3d30.334529597966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391028f13481278b%3A0x9e990a47ac0b7b29!2sM%2Fs%20Raj%20Silk%20%26%20Saree!5e0!3m2!1sen!2sin!4v1722597283618!5m2!1sen!2sin"
              style={{ border: 0, width: "100%", height: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
