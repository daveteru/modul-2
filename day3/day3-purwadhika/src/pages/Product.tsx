import Banner from "../components/Banner";
import Navbar from "../components/navbar";

export default function Product() {
    const a:string="mike"
    const msg:string = "Barang"
  return (
    <div>
      <Navbar />
      <h1>product</h1>
      <a href="/">to Home</a>
      <Banner message={msg} name={a}/>
    </div>
  );
}
