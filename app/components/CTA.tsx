import Button from "./Button";

const CTA = () => (
  <section
    className="flexCenter marginY padding sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow"
  >
    <div className="flex-1 flex flex-col">
      <h2 className="heading2">Let&#8217;s try our service now!</h2>
      <p className="paragraph max-w-[470px] mt-5">
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className="flexCenter sm:ml-10 ml-0 sm:mt-0 mt-10">
      <Button styles={`mt-10`} />
    </div>
  </section>
);

export default CTA;
