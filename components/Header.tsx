import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import FavouriteButton from "./FavouriteButton";
import SignIn from "./SignIn";
import MobileMenu from "./MobileMenu";
import { currentUser } from "@clerk/nextjs/server";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = async () => {
  const user = currentUser();

  return (
    <header className="bg-white py-4 border-b text-lightColor">
      <Container className="flex items-center justify-between">
        <div className="w-auto md:w-1/3 flex items-center gap-2.5 justify-start md:gap-0">
          <MobileMenu />
          <Logo />
        </div>
        <HeaderMenu />
        <div className="flex  w-auto md:w-1/3 items-center justify-end gap-5">
          <SearchBar />
          <CartIcon />
          <FavouriteButton />
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignIn />
          </SignedOut>
        </div>
      </Container>
    </header>
  );
};

export default Header;
