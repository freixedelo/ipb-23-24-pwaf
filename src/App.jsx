import { useState } from "react";

function Header(props) {
  return <h1>{props.title}</h1>;
}

export default function App() {
  const [numero, setNumero] = useState(0);
  const [divColor, setDivColor] = useState("red");
  const [customText, setValue] = useState("");

  return (
    <div>
      <Header title="TESTAR props" />
      <div style={{ backgroundColor: divColor, width: 100, height: 100 }}></div>
      <div>{"ola alunos"}</div>
      <div>{`o valor do nosso contador é: ${numero}`}</div>
      <button onClick={() => setDivColor("blue")}>Mudar cor da div</button>
      <div>
        <button onClick={() => setNumero(numero + 1)}>Contador +1</button>
      </div>
      <input
        type="text"
        onChange={(event) => setValue(event.target.value)}
      ></input>
      <div>{customText}</div>
    </div>
  );
}
