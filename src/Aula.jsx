import { Row, Col } from "react-bootstrap";

export default function Aula() {
  const data = [
    {
      id: "1",
      question: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit",
    },
    {
      id: "2",
      question: "Why do programmers wear glasses?",
      punchline: "Because they need to C#",
    },
  ];

  return (
    <div>
      <Row style={{ backgroundColor: "#fff111", textAlign: "center" }}>
        {data.map((item, index) => (
          <Col
            key={index}
            md={5}
            style={{
              backgroundColor: "gray",
              margin: 20,
              borderRadius: 10,
              padding: 20,
            }}
          >
            <h2>{item.question}</h2>
            <div>{item.punchline}</div>
          </Col>
        ))}
      </Row>
    </div>
  );
}
