import antonTkachev from "@/assets/site-media/Anton Tkachev.jpg.asset.json";
import bestDigitalMarketing from "@/assets/site-media/Best Digital Marketing.jpg.asset.json";
import dots from "@/assets/site-media/Dots.jpg.asset.json";
import forceLifts from "@/assets/site-media/ForceLifts.jpg.asset.json";
import gkb from "@/assets/site-media/GKB.jpg.asset.json";
import opelHome from "@/assets/site-media/Opel Home.jpg.asset.json";
import pastelli from "@/assets/site-media/Pastelli.jpg.asset.json";
import rnt from "@/assets/site-media/RNT.jpg.asset.json";
import reliant from "@/assets/site-media/Reliant.jpg.asset.json";
import sondaryam from "@/assets/site-media/Sondaryam.jpg.asset.json";
import theWoodA from "@/assets/site-media/The Wood A.jpg.asset.json";
import google from "@/assets/site-media/google.png.asset.json";
import googleLogo from "@/assets/site-media/googleLogo.png.asset.json";
import homeImage from "@/assets/site-media/image.png.asset.json";
import metaLogo from "@/assets/site-media/metaLogo.png.asset.json";
import muftloBlog from "@/assets/site-media/muftloBlog.jpg.asset.json";
import noise from "@/assets/site-media/noise.webp.asset.json";
import parth from "@/assets/site-media/parth.png.asset.json";
import shubhWeddings from "@/assets/site-media/shubh Weddings.jpg.asset.json";

const siteMedia = {
  "Anton Tkachev.jpg": antonTkachev,
  "Best Digital Marketing.jpg": bestDigitalMarketing,
  "Dots.jpg": dots,
  "ForceLifts.jpg": forceLifts,
  "GKB.jpg": gkb,
  "Opel Home.jpg": opelHome,
  "Pastelli.jpg": pastelli,
  "RNT.jpg": rnt,
  "Reliant.jpg": reliant,
  "Sondaryam.jpg": sondaryam,
  "The Wood A.jpg": theWoodA,
  "google.png": google,
  "googleLogo.png": googleLogo,
  "image.png": homeImage,
  "metaLogo.png": metaLogo,
  "muftloBlog.jpg": muftloBlog,
  "noise.webp": noise,
  "parth.png": parth,
  "shubh Weddings.jpg": shubhWeddings,
};

export function getSiteMedia(filename) {
  return siteMedia[filename]?.url ?? "";
}