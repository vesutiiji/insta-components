import InstaPost from "./components/InstaPost";

function App() {
  const MainUser = {
    username: "davithedork",
    location: "Honolulu, HI",
    image:
      "http://d1o1wlqwda3y1b.cloudfront.net/A-XR/CNVXR-AG264-BLACK_31570826557.jpg",
  };

  const UserComments = [
    {
      username: "davithedork",
      comment: "mmmmm I love big ones...",
    },
    {
      username: "alejandroG",
      comment: "chinchin daisuki. O-chinchin daisuki",
    },
    {
      username: "vesutiiji",
      comment: "boys... relax...",
    },
  ];

  return <InstaPost UserComments={UserComments} MainUser={MainUser} />;
}

export default App;
