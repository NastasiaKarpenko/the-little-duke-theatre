import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

function Testimonials() {
  return (
    <section className="py-12 bg-gray-100 rounded-lg shadow-md">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
        <div className="w-full md:w-2/3">
          <Carousel>
            <CarouselContent>
              <CarouselItem>
                <div className="text-center p-8 bg-white shadow-md rounded-lg mb-4">
                  <p className="text-lg mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </p>
                  <div className="flex flex-col items-center">
                    <p className="mt-4">Nemo enim ipsam</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="text-center p-8 bg-white shadow-md rounded-lg mb-4">
                  <p className="text-lg mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </p>
                  <div className="flex flex-col items-center">
                    <p className="mt-4">Nemo enim ipsam</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="text-center p-8 bg-white shadow-md rounded-lg mb-4">
                  <p className="text-lg mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                  </p>
                  <div className="flex flex-col items-center">
                    <p className="mt-4">Nemo enim ipsam</p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="flex justify-between w-full mt-4">
              <CarouselPrevious className="text-2xl cursor-pointer">
                {"<"}
              </CarouselPrevious>
              <CarouselNext className="text-2xl cursor-pointer">
                {">"}
              </CarouselNext>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
