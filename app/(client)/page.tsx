import { Button } from "@/components/ui/button";
import Container from "@/components/header/Container";
import React from "react";
import HomeBanner from "@/components/HomeBanner";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <Container>
      <HomeBanner />
      <div className="py-10">
        <ProductGrid />
      </div>
    </Container>
  );
}
