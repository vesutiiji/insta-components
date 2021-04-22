import InstaHeader from "./InstaHeader";
import InstaLikes from "./InstaLikes";

const InstaImage = (props) => {
  return (
    <div>
      <InstaHeader
        MainUser={props.MainUser}
        MainUserLocation={props.MainUserLocation}
      />
      <img src={props.image} />
      <InstaLikes />
    </div>
  );
};
export default InstaImage;

// green
// purple and orange in here
