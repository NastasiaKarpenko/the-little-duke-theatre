import Button from "./Button.js"

function Hero(){
    return (
    <div className="bg-white flex flex-col min-h-screen">
      <div className="hero-content">
        <h1>Welcome to The Little Duke Theatre</h1>
        <p>Inspiring Creativity and Talent in Every Child</p>
        <div className="hero-buttons flex space-x-4 justify-center">
          <Button href="./registration" buttonName="Register Now" />
          <Button href="./schedule" buttonName="View Class Schedule" />
        </div>
      </div>
    </div>
);
}

export default Hero;