import StatusTag from "./components/Moleculas/StatusTag";
import CardFooter from "./components/Moleculas/CardFooter";

function App() {
  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      gap: "16px", 
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      maxWidth: "300px"
    }}>
      <div>
        <div style={{ 
          fontSize: "12px", 
          color: "#9C27B0", 
          marginBottom: "4px",
          fontWeight: "bold"
        }}># helper/note/active</div>
        <div style={{ border: "1px solid #ddd", borderRadius: "8px" }}>
          <StatusTag 
            color="#E53935" 
            number="1" 
            title="Agenda/Topic" 
            code="SAAS-0000" 
          />
          <div style={{ padding: "12px", fontSize: "13px", lineHeight: "1.4" }}>
            <p>Description of what is done here</p>
          </div>
          <CardFooter date="3/8/2020" />
        </div>
      </div>
      <div>
        <div style={{ 
          fontSize: "12px", 
          color: "#9C27B0", 
          marginBottom: "4px",
          fontWeight: "bold"
        }}># helper/note/future</div>
        <div style={{ border: "1px solid #ddd", borderRadius: "8px" }}>
          <StatusTag 
            color="#8E24AA" 
            number="1" 
            title="Agenda/Topic" 
            code="SAAS-0000" 
          />
          <div style={{ padding: "12px", fontSize: "13px", lineHeight: "1.4" }}>
            <p>Description of what is done here</p>
          </div>
          <CardFooter date="3/8/2020" />
        </div>
      </div>
      <div>
        <div style={{ 
          fontSize: "12px", 
          color: "#9C27B0", 
          marginBottom: "4px",
          fontWeight: "bold"
        }}># helper/note/completed</div>
        <div style={{ border: "1px solid #ddd", borderRadius: "8px" }}>
          <StatusTag 
            color="#9E9E9E" 
            number="1" 
            title="Agenda/Topic" 
            code="SAAS-0000" 
          />
          <div style={{ padding: "12px", fontSize: "13px", lineHeight: "1.4" }}>
            <p>Description of what is done here</p>
          </div>
          <CardFooter date="3/8/2020" />
        </div>
      </div>

    </div>
  );
}

export default App;