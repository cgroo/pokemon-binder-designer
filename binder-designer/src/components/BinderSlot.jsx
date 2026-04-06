export default function BinderSlot({ isSelected, onClick }) {
    return(
        <div
            onClick={onClick}
            style={{
                width: "80px",
                height: "110px",
                border: isSelected ? "3px solid blue" : "2px solid #333",
                borderRadius: "8px",
                backgroundColor: isSelected ? "#dbeafe" : "#f5f5f5",
                cursor: "pointer",
                transition: "0.2s",
            }}
        />
    );
}