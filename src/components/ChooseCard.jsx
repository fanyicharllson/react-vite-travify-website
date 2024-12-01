const ChooseCard = ({chooseReason = "Security"}) => {
  return (
    <div className="bg-white shadow-xl p-4 rounded-lg">
      <h1 className="text-[15px] max-sm:text-[15px] font-semibold text-center">{chooseReason}</h1>
      <div className="text-center">
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          voluptates incidunt maxime consequatur aspernatur debitis id, atque
        </p>
      </div>
    </div>
  );
};

export default ChooseCard;
