import InstaComments from "./InstaComments";
import InstaImage from "./InstaImage";
import InstaHeader from "./InstaHeader";

const InstaPost = (props) => {
  return (
    <div>
      <InstaImage
        image={props.MainUser.image}
        MainUser={props.MainUser.username}
        MainUserLocation={props.MainUser.location}
      />
      <InstaComments
        userdata={props.UserComments}
        // username1={props.UserComments[1].username}
        // comments1={props.UserComments[1].comment}
        // username2={props.UserComments[2].username}
        // comments2={props.UserComments[2].comment}
      />
    </div>
  );
};

export default InstaPost;

// blue
// green and red in here