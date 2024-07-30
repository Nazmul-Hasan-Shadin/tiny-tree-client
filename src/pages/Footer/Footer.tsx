import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-[#054004] mt-5 text-white p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      <nav>
        <h6 className="footer-title font-bold">Services</h6>
        <a href="#" className="link link-hover text-white">Plant Care</a>
        <a href="#" className="link link-hover text-white">Garden Design</a>
        <a href="#" className="link link-hover text-white">Landscaping</a>
        <a href="#" className="link link-hover text-white">Consultation</a>
      </nav>
      <nav>
        <h6 className="footer-title font-bold">Company</h6>
        <a href="#" className="link link-hover text-white">About Us</a>
        <a href="#" className="link link-hover text-white">Contact</a>
        <a href="#" className="link link-hover text-white">Careers</a>
        <a href="#" className="link link-hover text-white">Press Kit</a>
      </nav>
      <nav>
        <h6 className="footer-title font-bold">Legal</h6>
        <a href="#" className="link link-hover text-white">Terms of Use</a>
        <a href="#" className="link link-hover text-white">Privacy Policy</a>
        <a href="#" className="link link-hover text-white">Cookie Policy</a>
      </nav>
      <nav>
        <h6 className="footer-title font-bold">Social</h6>
        <a href="#" className="link link-hover text-white">Twitter</a>
        <a href="#" className="link link-hover text-white">Instagram</a>
        <a href="#" className="link link-hover text-white">Facebook</a>
        <a href="#" className="link link-hover text-white">Pinterest</a>
      </nav>
      <nav>
        <h6 className="footer-title font-bold">Explore</h6>
        <a href="#" className="link link-hover text-white">Plants</a>
        <a href="#" className="link link-hover text-white">Garden Tools</a>
        <a href="#" className="link link-hover text-white">Workshops</a>
        <a href="#" className="link link-hover text-white">Gift Cards</a>
      </nav>
      <nav>
        <h6 className="footer-title font-bold">Apps</h6>
        <a href="#" className="link link-hover text-white">iOS</a>
        <a href="#" className="link link-hover text-white">Android</a>
      </nav>
    </footer>
  );
};

export default Footer;
