import EditorsPics from "@/components/editors-pics";
import FeatureProducts from "@/components/feature-products";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Navbar from "@/components/Navbar";
import FeaturesPosts from "@/components/feaures-posts";


export default function Home() {
  return (
    <div>
    <Navbar />
    <Hero />
    <EditorsPics />
    <FeatureProducts />
    <FeaturesPosts /> 
    <Footer />
    </div>
  );
}
