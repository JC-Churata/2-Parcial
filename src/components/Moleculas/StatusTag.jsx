export default function StatusTag({ color, number, title, code }) {
  return (
    <div style={{
      backgroundColor: color,
      padding: "10px 12px",
      color: "white",
      fontFamily: "Arial, sans-serif",
      borderTopLeftRadius: "8px",
      borderTopRightRadius: "8px",
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }}>
      <div style={{
        width: "22px",
        height: "22px",
        borderRadius: "50%",
        border: "1.5px solid white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "12px",
        fontWeight: "bold"
      }}>
        {number}
      </div>
      <div style={{ flexGrow: 1, fontSize: "14px", fontWeight: "bold" }}>
        {title}
      </div>
      <div style={{ 
        display: "flex",
        alignItems: "center",
        gap: "6px"
      }}>
        <span style={{ fontSize: "12px", opacity: 0.9 }}>{code}</span>
        <div style={{ 
          position: "relative",
          fontSize: "28px",
          opacity: 0.8,
          lineHeight: "0.7"
        }}>
          ♦
          <div style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background: `linear-gradient(to bottom right, transparent 42%, ${color} 45%, ${color} 55%, transparent 58%)`,
            pointerEvents: "none"
          }}></div>
        </div>
      </div>
    </div>
  );
}
