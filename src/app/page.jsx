import Banner from "@/components/Home/Banner";
import Status from "@/components/Home/Status";
import TrendingApps from "@/components/Home/TrendingApps";

export default function Home() {
  return (
    <div>
      <main>
        <Banner />
        <Status />
        <TrendingApps />
      </main>
    </div>
  );
}
