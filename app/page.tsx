import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import React from "react";

export default function Home() {
  return (
    <Container>
      <h2 className="text-xl font-semibold">Home</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quod
        aperiam adipisci aut, porro rerum, distinctio id consequatur nam dolorum
        est architecto ipsam in.
      </p>
      <Button>Hello</Button>
    </Container>
  );
}
