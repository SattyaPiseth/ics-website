import BlogComponent from "./components/BlogComponent";
import { CarouselComponent } from "./components/CarouselComponent";
import HeroSection from "./components/HeroSection";
import KeyStatisticComponent from "./components/KeyStatisticComponent";
import Testimonial from "./components/Testimonial";
import VideoComponent from "./components/VideoComponent";
import videoData from "./json/layouts/video.json";
import Metadata from "./lib/Metadata";

function App() {
  return (
    <>
      <Metadata />
      <HeroSection />
      <CarouselComponent />
      <KeyStatisticComponent/>
      <BlogComponent />
      <Testimonial />
      <section className="container mx-auto py-10dark:bg-dark">
        <div className="-mx-4 flex flex-wrap">
          {videoData.map((video, index) => (
            <VideoComponent
              key={index}
              src={video.src} // Embed link
              title={video.title}
              description={video.description}
              date={video.date}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
