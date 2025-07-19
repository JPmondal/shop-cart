import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import FavouriteButton from "./FavouriteButton";
import SignIn from "./SignIn";
import MobileMenu from "./MobileMenu";
// ...existing code...
import { ClerkLoaded, SignedIn, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

const  Header = async () => {
  const user = await currentUser()

  console.log("user",user)

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
          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
           {
            !user && 
              <SignIn />
            
           }
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
