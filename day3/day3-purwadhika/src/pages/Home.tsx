import Banner from "../components/Banner";
import Navbar from "../components/navbar";

export default function Home() {
        const a:string="budi"
    const msg:string = "Beranda"
  return (
    <div>
      <Navbar />
      <div className="wrap" style={{ backgroundColor: "#f0edeb" }}>
        <h1
          style={{
            fontFamily: "'Adobe Garamond Pro'",
            fontWeight: "300",
            fontStyle: "italic",
            color: "maroon",
          }}
        >
        Welcome user, to React.
        </h1>{" "}
        <br />
        <Banner message={msg} name={a}/>
      </div>
    </div>
  );
}
