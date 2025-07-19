import React from "react";
import Container from "../header/Container";
import FooterTop from "./FooterTop";
import Logo from "../header/Logo";
import SocialMedia from "../header/SocialMedia";
import { SubText } from "../ui/text";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <SubText >
              Discover our furniture for your own comfort after that what to
              write i dont know .so i am writing anything
            </SubText>
            <SocialMedia
              className="text-darkColor/60"
              iconClassName="border-darkColor/60 hover:border-shop_light_green hover:text-shop_light_green"
              tooltipClassName="bg-darkColor text-white"
            />
          </div>
          <div>
            
          </div>
          <div></div>
          <div></div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
