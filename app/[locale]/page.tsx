import FeaturesBanner from "@/components/banners/FeaturesBanner";
import DashboardLayout from "./(dashboard)/DashboardLayout";
import { Banner } from "@/components/banners/Banner";
import LocationBanner from "@/components/banners/LocationsBanner";

function HomePage() {

  return (
    <DashboardLayout>
      <Banner />
      <FeaturesBanner />
      <LocationBanner />
    </DashboardLayout>
  );
};

export default HomePage;