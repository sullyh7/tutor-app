import React from 'react'

const Footer = () => {
  return (
    <footer className="footer flex flex-col sm:flex-row justify-between p-10 bg-base-200 text-base-content">
        <div>
        <a className="normal-case text-xl font-bold"><span className='text-primary'>Muslim</span>Tutors</a>
            <p>An Islamic tutions <br/>provider</p>
        </div> 
  {/* <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div> */}
  <div className='flex flex-col'> 
    <span className="footer-title">Newsletter</span> 
    <span className="label-text">Enter your email address</span>
    <input type="email" placeholder="username@site.com" className="input input-bordered w-full text-sm pr-16" required/> 
    <button className="btn btn-primary">Subscribe</button>
    </div>

</footer>
  )
}

export default Footer