import EditorsPicks from "@/components/editors-pics";
import FeatureProducts from "@/components/feature-products";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import FeaturesPosts from "@/components/features-posts";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <EditorsPicks />
      <FeatureProducts />
      <FeaturesPosts />
      <Footer />
    </div>
  );
}
