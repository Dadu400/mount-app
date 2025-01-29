import FeaturesBanner from "@/components/banners/FeaturesBanner";
import DashboardLayout from "./(dashboard)/DashboardLayout";
import { Banner } from "@/components/banners/Banner";
import LocationBanner from "@/components/banners/LocationsBanner";
import DownloadBanner from "@/components/banners/DownloadBanner";

function HomePage() {

  return (
    <DashboardLayout>
      <Banner />
      <FeaturesBanner />
      <LocationBanner />
      <DownloadBanner />
    </DashboardLayout>
  );
};

export default HomePage;