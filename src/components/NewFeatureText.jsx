import PropTypes from "prop-types"

const NewFeatureText = ({ date, text }) => {
  return (
    <>
      <div className="py-3 px-3">
        <div className="text-sm">{date}</div>
        <div className="font-bold text-black">{text}</div>
        <div className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          iure enim modi? Delectus beatae quae quibusdam
        </div>
      </div>
    </>
  );
};

NewFeatureText.propTypes = {
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
NewFeatureText.defaultProps = {
  date: "August 15, 2022",
  text: "New Feature",
};

export default NewFeatureText;
