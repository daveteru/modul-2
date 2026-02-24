import Banner from "../components/Banner";
import Navbar from "../components/navbar";

export default function About() {
        const a:string="joko"
    const msg:string = "Tentang"
  return (
    <div>
      <Navbar />
      <h1>about</h1>
      <a href="/">to Home</a>
      <Banner message={msg} name={a}/>
    </div>
  );
}
