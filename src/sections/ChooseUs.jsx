import ChooseCard from "../components/ChooseCard";

const choose = () => {
  const chooseReason1 = "Competitive Prices";
  const chooseReason2 = "Secure Booking";
  const chooseReason3 = "Seamless Experience";
  return (
    <section className="py-12 max-sm:py-6 bg-gray-100 px-5">
      <div className="max-w-[1024px] m-auto">
      <h1 className="heading">
        Why Choose us?
      </h1>
        <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1 pt-4">
          <ChooseCard chooseReason = {chooseReason1} />
          <ChooseCard chooseReason = {chooseReason2} />
          <ChooseCard chooseReason = {chooseReason3} />
        </div>
      </div>
    </section>
  );
};

export default choose;
