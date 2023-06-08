const Footer = () => {
    // TODO: switch logo img with links
  return (
    <>
    
      <footer className="p-10 bg-base-200 text-base-content">
        <div className=" mx-auto flex md:flex-row flex-col items-start md:items-center justify-around footer md:w-[1280px]">
          <div>
            <img className="w-20 h-20 object-cover" src="/favicon.png" alt="" />
            <p>
              <span className="logo_font text-lg">ArtBuddy</span> Ltd.
              <br />
              Address: 19/B, Road 3, Dhanmondi, <br />
              Dhaka-1205, Bangladesh.
            </p>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Art Critics</a>
            <a className="link link-hover">LifeLong Support</a>
            <a className="link link-hover">Friendly Instructors</a>
            <a className="link link-hover">Learning Enviroment</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Hiring Instructors</a>
            <a className="link link-hover">sponsored by OhioArts.</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
            <a className="link link-hover"></a>
          </div>
        </div>
      </footer>
      <div className="text-center text-xs py-4   bg-base-200 text-gray-500">
        <p>Copyright © 2023 - All right reserved by <span className="logo_font text-lg">ArtBuddy</span> Ltd.</p>
      </div>
    </>
  );
};

export default Footer;
