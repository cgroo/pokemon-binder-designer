export default function BinderSlot({ card, isSelected, onClick }) {
    return(
        <div
            onClick = {onClick}
            style = {{
                width: "80px",
                height: "110px",
                border: isSelected ? "3px solid blue" : "2px solid #333",
                borderRadius: "8px",
                backgroundColor: isSelected ? "#dbeafe" : "#f5f5f5",
                cursor: "pointer",
                transition: "0.2s",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            {card?.image ? (
                <img
                    src = {`${card.image}/high.webp`}
                    alt = {card.name}
                    style = {{ width: "100%", height: "100%", objectFit: "cover"}}
                />
            ) : (
                <span style = {{ fontSize: "10px", color: "#aaa" }}>Empty</span>
            )}
        </div>
    );
}