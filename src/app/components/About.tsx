'use client';

import { motion } from 'motion/react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChocolateDripBackground } from '../components/ChocolateDripBackground';
import { MissionVision } from '../components/MissionVision';
// import imgVector2 from "figma:asset/36b9e6c28110a6518879d7ffabdd359749973a32.png";

export function AboutUsPage() {
  return (
    <div className="relative bg-white min-h-screen">
      <Header />

      {/* Hero Section with Animated Chocolate Drip Background */}
      <ChocolateDripBackground
        desktopHeight="1140px"
        tabletHeight="1140px"
        mobileHeight="1650px"
      >
        <div className="flex flex-col items-center justify-start h-full px-6 md:px-12 text-center pt-32 md:pt-40 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-[1157px]"
          >
            <p
              className="font-['Roboto',sans-serif] font-medium text-[16px] md:text-[18px] leading-[30px] md:leading-[35px] text-justify capitalize text-white"
              style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.6)' }}
            >
              Welcome to a world where every scoop tells a story of sweetness and joy. At ICE BAY, we believe in the pure delight of real ice cream, crafted from nature's finest ingredients. We blend fresh fruits, rich milk, and pure butter to create flavours that aren't just a treat but a nostalgic experience. Forget the ordinary; discover the extraordinary taste of genuine ice cream made with passion, served with love.
              <br /><br />
              <span className="block text-center font-bold text-white text-[32px] md:text-[40px] my-6">About Us</span>

              From a passionate idea to a beloved brand, ICE BAY's journey has been one of rapid growth and unwavering commitment to quality. In just 2.5 years, we have grown to over 154 franchises, with 90 in Kerala and more than 60 across Tamil Nadu, Pondicherry, and Karnataka. Our flavour family has also expanded, starting with 18 and now offering over 60 unique creations within our first year. We are excited to announce that we are soon bringing the pure taste of ICE BAY to Hyderabad.
              <br /><br />
              At ICE BAY, we stand for purity. In a market where 90% of products are frozen desserts made with vegetable fat, we are proud to be in the 10% that serves pure ice cream. Our promise is simple: no vegetable fat, no frozen dessert mixes; just the wholesome goodness of fresh fruits, milk, and butter in every scoop. This commitment to quality is what makes us a leading ice cream franchise in India.
            </p>
          </motion.div>
        </div>
      </ChocolateDripBackground>

      {/* Our Story Section */}
      <section className="relative bg-white py-12 md:py-16 lg:py-20 border-0 -mt-1">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="font-['Roboto_Serif',serif] font-bold text-[#4C3026] text-[32px] md:text-[48px] lg:text-[56px] mb-8 md:mb-12">
            Our Story
          </h2>

          <div className="space-y-6 md:space-y-8">
            <p className="font-['Roboto',sans-serif] text-[#4C3026] text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed text-justify">
              Our Story Didn't Begin In A Boardroom; It Started In A WhatsApp Group. Ten Years Ago, Co-Founders Beni Sadar And Sharnas Nasimudeen Were Part Of A "Saudi Malayalam Gathering" Group While Working In The Gulf. Fueled By A Passion For Food And A Touch Of Nostalgia, Sharnas Began Making Homemade Popsicles That Quickly Became A Sensation Among Friends. This Spark Of Appreciation Ignited A Business Idea: What If They Could Bring Back The Authentic, Pure Ice Cream Of Their Childhood To Everyone, But With A Modern Touch Of Premium Hygiene?
            </p>

            <p className="font-['Roboto',sans-serif] text-[#4C3026] text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed text-justify">
              The Idea Took Shape After The COVID-19 Pandemic When They Saw An Opportunity In The Food Industry As Other Sectors Faced Downturns. They Observed That The Indian Market Was Saturated With "Frozen Desserts," Not Real Ice Cream. This Is Where ICE BAY Found Its Purpose.
            </p>

            <p className="font-['Roboto',sans-serif] text-[#4C3026] text-[14px] md:text-[16px] lg:text-[18px] leading-relaxed text-justify">
              Launched In 2023, The Brand Was Born From The Fusion Of Three Core Elements: A Nostalgic Idea, The Courage To Pursue It, And The Execution Of A Shared Vision. Starting With Just 18 Flavours, ICE BAY Quickly Captured Hearts, Proving That A Passion For Pure, Authentic Taste Is Timeless.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <div className="mb-16 md:mb-20 lg:mb-24">
        <MissionVision />
      </div>


      <Footer />
    </div>
  );
}
