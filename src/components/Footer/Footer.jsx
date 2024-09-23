import Footerimg from "../../../assets/icons/social.png";

const Footer = () => {
  return (
    <footer className=" bg-white text-black dark:bg-gray-900 dark:text-white  text-base-content p-10 mt-4">
      <div className="footer max-w-6xl mx-auto">
        <aside>
          <a className="btn btn-active btn-accent text-xl rounded-full">
            CareerHub
          </a>
          <p className="mt-2">
            There are many variations of passages
            <br />
            of Lorem Ipsum , but the majority
            <br />
            have suffered alteration in some form.
          </p>
          <img className="mt-4" src={Footerimg} alt="" />
        </aside>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Work</a>
          <a className="link link-hover">Latest News</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav>
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover">Prototype</a>
          <a className="link link-hover">Plans & Pricing</a>
          <a className="link link-hover">Customers</a>
          <a className="link link-hover">Integrations</a>
        </nav>
        <nav>
          <h6 className="footer-title">Support</h6>
          <a className="link link-hover">Help Desk</a>
          <a className="link link-hover">Sales</a>
          <a className="link link-hover">Become a Partner</a>
          <a className="link link-hover">Developers</a>
        </nav>
        <nav>
          <h6 className="footer-title">Contact</h6>
          <a className="link link-hover">524 Broadway , NYC</a>
          <a className="link link-hover">+1 777 - 978 - 5570</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
