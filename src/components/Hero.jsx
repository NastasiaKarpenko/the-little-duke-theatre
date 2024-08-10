import Button from "./Button.jsx";

function Hero() {
  return (
    <section
      className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-black text-center"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
      <div className="container mx-auto flex flex-col items-start justify-center h-full px-10">
        <div className="w-full">
          <h1 className="text-5xl text-white font-bold mb-4">
            Inspiring Creativity and Talent in Every Child!
          </h1>
          <div className="hero-content">
            <div className="hero-buttons flex space-x-4 justify-center">
              <Button href="./registration" buttonName="Register Now" />
              <Button href="./schedule" buttonName="View Class Schedule" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
