// red
const InstaComments = (props) => {
  return (
    <div>
      <div>
        {props.userdata[0].username}: {props.userdata[0].comment}
      </div>
      <div>
        {props.userdata[1].username}: {props.userdata[1].comment}
      </div>
      <div>
        {props.userdata[2].username}: {props.userdata[2].comment}
      </div>
    </div>
  );
};

export default InstaComments;
