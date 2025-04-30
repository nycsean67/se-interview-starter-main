"use client";
import { useState, useEffect } from "react";
import Stack, { onEntryChange } from "../lib/index";
import Footer from "./components/Footer";
import TextBlock from "./components/TextBlock";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import ImageGallery from "./components/ImageGallery";
import DestinationDetail from "./components/DestinationDetail";
import SpecialOffer from "./components/SpecialOffer";
import ContentstackLivePreview from "@contentstack/live-preview-utils";
ContentstackLivePreview.init({
    stackDetails: {
        apiKey: "bltc6167f7c82140049",
    },
});

export default function Home({ params }) {
  const [entry, setEntry] = useState({});
  const [loading, SetLoading] = useState(true);

  const getContent = async () => {
    const entry = await Stack.getElementByTypeWtihRefs(
      "home_page",
      ["hero_banner", "page_content.image_gallery.gallery_item.page"]
    );
    // console.log("homepage:", entry[0][0]);
    setEntry(entry[0][0]);
    SetLoading(false);
  };

  useEffect(() => {
    onEntryChange(getContent);
  }, []);

  if (loading) {
    return;
  }

  return (
    <>
      <NavBar />

      <Hero content={entry.hero_banner[0]} />
 {/*     <DestinationDetail /> */}

      {entry.page_content?.map((item, index) => {

        if (item.hasOwnProperty("special_offers")) {
          console.log("special_offers", item.special_offers);
          return <SpecialOffer key={index} content={item.special_offers} />;
        }
        if (item.hasOwnProperty("text_block")) {
          return <TextBlock key={index} content={item.text_block} />;
        }
        if (item.hasOwnProperty("image_gallery")) {
          return <ImageGallery key={index} content={item.image_gallery} />;
        }
        if (item.hasOwnProperty("destination_detail")) {
          console.log("destination_detail", item.destination_detail);
          return <DestinationDetail key={index} content={item.destination_detail} />;
        }
      })}

    <DestinationDetail />
      <Footer />
    </>
  );
}
