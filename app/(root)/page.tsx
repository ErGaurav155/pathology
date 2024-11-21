import AboutSection from "@/components/shared/AboutSection";
import AppointmentSection from "@/components/shared/Appointment";
import { Faq } from "@/components/shared/Faq";
import Features from "@/components/shared/Feature";
import { Footer } from "@/components/shared/Footer";
import FunFacts from "@/components/shared/FunFact";
import { HeroSlider } from "@/components/shared/HeroSlider";
import Schedule from "@/components/shared/Schedule";
import TestimonialSection from "@/components/shared/Testimonial";

const Home = async () => {
  return (
    <div className="flex max-w-7xl   flex-col gap-10 items-center m-auto justify-center">
      <HeroSlider />
      <Schedule />
      <section className=" mt-5 md:mt-72 lg:mt-20  bg-white">
        <Features />
      </section>
      <AboutSection />
      <FunFacts />
      <AppointmentSection />
      <TestimonialSection />

      <Footer />
    </div>
  );
};

export default Home;
