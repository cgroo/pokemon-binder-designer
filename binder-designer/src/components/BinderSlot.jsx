export default function BinderSlot() {
    return (
        <div style={styles.slot}>
            {/*empty for now*/}
        </div>
    );
}

const styles = {
    slot: {
        width: "80px",
        height: "110px",
        border: "2px solid #333",
        borderRadius: "8px",
        backgroundColor: "#f5f5f5",
    },
};