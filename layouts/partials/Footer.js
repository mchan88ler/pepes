import Social from "@components/Social";
import config from "@config/config.json";
import menu from "@config/menu.json";
import social from "@config/social.json";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const { copyright, footer_content } = config.params;
  const { footer } = menu;
  return (
    <footer className="section p-10">
      <div className="container">
        {/* footer menu */}
        <div className="row">
          {/* social icons */}
          <div className="md-12 sm:col-12 lg:col-12 text-center">
            <Link href="/" aria-label="Standard&Pepe">
              <h2 className="">Standard & Pepes</h2>
            </Link>
            {markdownify(footer_content, "p", "mt-3 mb-6 ")}
            <Social source={social} className="social-icons mb-8" />
          </div>
        </div>
        {/* copyright */}
        <div className="border-t border-border py-6">
          {markdownify(copyright, "p", "text-sm text-center")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
