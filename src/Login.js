import Header from "./Header";

const BG_URL =
  "https://wallpapers.com/images/hd/movie-poster-background-jd1c45cjm7vba7gg.jpg";
const Login = () => {
  return (
    <div className="">
      <img className= "absolute brightness-50" src={BG_URL} alt="bg"></img>
      <Header />
    </div>
  );
};
export default Login;
