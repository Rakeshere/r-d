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
import brandMark from "@/assets/rd-logo-transparent.png.asset.json";
import marketingCampaign from "@/assets/site-media/marketing-promotional-campaign.jpg.asset.json";
import shutterstock from "@/assets/site-media/shutterstock_2502022545.jpg.asset.json";
import videoProductionCrew from "@/assets/site-media/video-production-crew.jpg.asset.json";
import digitalMarketingPhotography from "@/assets/site-media/photography-in-digital-marketing.jpg.asset.json";
import searchMarketing from "@/assets/site-media/Cover.Search-engine-marketing.jpg.asset.json";
import blogMarketing from "@/assets/site-media/blog240624044117.jpg.asset.json";
import googleAds from "@/assets/site-media/google-ads-courses.png.asset.json";
import productPhotography from "@/assets/site-media/photography-g14011171a.jpg.asset.json";
import businessPortraits from "@/assets/site-media/business-corporate-portraits.webp.asset.json";
import videoTips from "@/assets/site-media/video-production-tips.webp.asset.json";
import portfolioPhotography from "@/assets/site-media/il_fullxfull.6607106719_ha19.jpg.asset.json";
import webDevelopment from "@/assets/site-media/62_1659690052.png.asset.json";
import ecommerce from "@/assets/site-media/E-Commerce-Development-Bloom-IT.jpg.asset.json";
import webDev from "@/assets/site-media/webDev.jpg.asset.json";
import seo from "@/assets/site-media/Search_Engine_Optimization.webp.asset.json";
import blogHero from "@/assets/site-media/blog-hero.jpg.asset.json";
import interactiveCard from "@/assets/site-media/interactive-card.jpg.asset.json";

const siteMedia = {
  "rd-logo.png": brandMark,
  "marketing-promotional-campaign.jpg": marketingCampaign,
  "searchabode-the-best-real-estate-agent-in-jaipur.jpg": parth,
  "shutterstock_2502022545.jpg": shutterstock,
  "video-production-crew.jpg": videoProductionCrew,
  "photography-in-digital-marketing.jpg": digitalMarketingPhotography,
  "Cover.Search-engine-marketing.jpg": searchMarketing,
  "blog240624044117.jpg": blogMarketing,
  "google-ads-courses.png": googleAds,
  "Google-Ads.png": googleLogo,
  "photography-g14011171a.jpg": productPhotography,
  "business-corporate-portraits.webp": businessPortraits,
  "video-production-tips.webp": videoTips,
  "il_fullxfull.6607106719_ha19.jpg": portfolioPhotography,
  "62_1659690052.png": webDevelopment,
  "Logo-Pastelli.png": pastelli,
  "E-Commerce-Development-Bloom-IT.jpg": ecommerce,
  "webDev.jpg": webDev,
  "Search_Engine_Optimization.webp": seo,
  "blog-hero.jpg": blogHero,
  "interactive-card.jpg": interactiveCard,
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