import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-bg.jpeg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-black">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-30 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px] rounded-full" />
              Shopyy
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              numquam quos recusandae?
            </p>
          </div>
          {/* footer links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul>
                  {FooterLinks.map((link) => (
                    <li key={link.id} className="">
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul>
                  {FooterLinks.map((link) => (
                    <li
                      key={link.title}
                      className="curson-pointer hover:text-primary hover:translate-x-1 duration-300 text-black-200"
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          {/* social link */}
          <div>
            <div className="flex items-center gap-3 mt-6">
                <a href="#">
                    <FaInstagram className="text-3xl"/>
                </a>
                <a href="#">
                    <FaFacebook  className="text-3xl"/>
                </a>
                <a href="#">
                    <FaLinkedin className="text-3xl"/>
                </a>
            </div>
            <div className="mt-6">
                <div className="flex items-center gap-3">
                    <FaLocationArrow/>
                    <p>Kathmandu, Nepal</p>
                </div>
                <div className="flex items-center gap-3"> 
                    <FaMobileAlt />
                    <p>+977 9843588521</p>
                </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
