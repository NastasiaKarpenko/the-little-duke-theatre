import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import Image from 'next/image';

  function FAQ() {
    return (
      <section className="py-12 bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">F.A.Q.</h2>
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          
        <div className="w-full md:w-1/2">
            <Image 
              src="/temporary_g.jpg" 
              alt="FAQ Image"
              className="w-full h-auto rounded-md"
              width={600}
              height={400}
            />
          </div>
          <div className="w-full md:w-1/2 px-10">
            <p className="text-lg mb-4">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold">Is it accessible?</AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold">Is it styled?</AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes. It comes with default styles that matches the other components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold">Is it animated?</AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  Yes. It&apos;s animated by default, but you can disable it if you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
        </div>
      </section>
    );
  }
  
  export default FAQ;
  