import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h1>
        David Teru <br /> Sudiono
      </h1>
      <hr className="border" />
      <h3>Front End Development & Creative Engineering</h3>
      <p>I Design & Build Accesible Experience in Digital Space</p>
      <div className="navbar">
        <div className="navitems">
          {" "}
          <hr className="flourish" />
          <a href="/">Home</a>
        </div>
        <div className="navitems">
          {" "}
          <hr className="flourish" />
          <a href="/">Skillset</a>
        </div>
        <div className="navitems">
          {" "}
          <hr className="flourish" />
          <a href="/">Work Experience</a>
        </div>
                <div className="navitems">
          {" "}
          <hr className="flourish" />
          <a href="/">Portfolio</a>
        </div>
                <div className="navitems">
          {" "}
          <hr className="flourish" />
          <a href="/">Contact</a>
        </div>
      </div>
    </div>
  );
}
