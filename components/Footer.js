import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 gap-y-10 px-64 py-14  bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800 md:mx-auto">
        <h5 className="font-bold">ABOUT</h5>
        <p>How We Works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Property Pro Plus</p>
        <p>Property Pro Luxury</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800 md:mx-auto">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Resources</p>
        <p>Contact Us</p>
        <p>FAQ</p>
      </div>
    </div>
  );
};

export default Footer;
