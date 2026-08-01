export default function TestPage() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Input Test</h1>

      <input
        type="text"
        placeholder="Type here..."
        style={{
          border: "2px solid black",
          padding: "10px",
          width: "300px",
        }}
      />
    </div>
  );
}