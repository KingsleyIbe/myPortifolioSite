import React from 'react';
// import Footer from '../Common/Footer';

const Contact = () => (
  <div className="relative lg:top-[300px] lg:ml-[300px] p-10 contact z-0">
    <div className="lg:flex gap-x-10">
      <div>
        <h1 className="lg:text-[50px] lg:w-[600px] my-10">
          I&#39;m always interested in hearing about new projects,
          so if you&#39;d like to chat, please get in touch.
        </h1>
      </div>
      <form action="https://formspree.io/f/mzbyqobv" method="post" className="grid mb-[200px]">
        <input type="text" name="name" placeholder="Full name" maxLength="30" required className="my-10 lg:w-[600px] h-[50px] p-5" />
        <input type="email" name="Email" placeholder="Email address" required className="my-10 lg:w-[600px] h-[50px] p-5" />
        <textarea placeholder="Enter text here" name="Message" maxLength="500" required className="my-10 lg:w-[600px] h-[200px] p-5" />
        <button type="submit" className="my-10 text-[20px] bg-[#ff6b00] project-border-1 p-5 lg:w-[200px] m-auto">Get in touch</button>
      </form>
    </div>
  </div>
);

export default Contact;
