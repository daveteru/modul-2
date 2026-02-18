import { useState } from "react";

export default function UseState() {
  const [person, setPerson] = useState<string>("Budi");
  let name: boolean = true;
  const handleUpdate = () => {
    if (name) {
      setPerson("Joko");
      return (name = false);
    } else;
    {
      setPerson("Budi");
      return (name = true);
    }
  };

  // /====

  const [names, setName] = useState<string>("");
  const [students, setStudents] = useState<string[]>([]);

  console.log("ini isi state students :", students);
  console.log("ini isi state name :", names);

  const handleSubmit = () => {
    setStudents((prev) => [...prev, names]);
    setName("")
  };

  return (
    <div>
      <h1>Hello World Use State</h1>
      <p>{person}</p>
      <button onClick={handleUpdate}>Update This</button>
      <hr></hr>
      <input type="text" onChange={(e) => setName(e.target.value)}
      value={names} />
      <button onClick={handleSubmit}>submit</button>
      {students.map((student , index)=> {
        return <p key={index}>{student}</p>
      })}
    </div>
  );
}
