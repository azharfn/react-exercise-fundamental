import { useState } from "react";

function Task1() {
  return (
    <div className="basic_component">
      <h1>Halo dunia!</h1>
    </div>
  )
}

function Task1_1(props) {
  return <h1>{props.name}</h1>
}

function Task2() {
  const [text, setText] = useState("Klik tombol di bawah")

  return (
    <div>
      <h1>{text}</h1>  
        <button onClick={() => setText("Tombol telah di-klik!")}> 
        Klik saya!
      </button>
    </div>
  );
}

const students = [
  {
    name: "John Doe",
    age: 20,
    dropout: false,
  },
  {
    name: "Jane Doe",
    age: 21,
    dropout: true,
  },
  {
    name: "John Smith",
    age: 22,
    dropout: false,
  },
  {
    name: "Jane Smith",
    age: 23,
    dropout: true,
  },
];

function Task3() {
  return (
    <div>
      <ul>
      {students.map((student, index) =>
          <li key={index}>
            <h2>{student.name} - {student.age}</h2>
            </li>
          )}
      </ul>
    </div>
)
}

function Task3_1() {
  const nonDoStudents = students.filter(student => !student.dropout)
  return (
    <div>
      <ul>
      {nonDoStudents.map((student, index) =>
          <li key={index}>
            <h2>{student.name} - {student.age}</h2>
            </li>
          )}
      </ul>
    </div>
)
}

function Task4() {
  const [textVisible, setVisibleText] = useState("Klik tombol di-bawah untuk menghapus elemen ini")

  const handleButtonClick = () => {
    setVisibleText(false);
  }
  return (
    <div>
      {textVisible && (
      <>
      <p>{textVisible}</p>
      <button onClick={handleButtonClick}>Hapus</button> 
      </>
      )} 
    </div>
  );
}

export { Task1, Task1_1, Task2, Task3, Task3_1, Task4 };
