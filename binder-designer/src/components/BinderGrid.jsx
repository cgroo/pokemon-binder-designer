import BinderSlot from "./BinderSlot";

export default function BinderGrid(){
    const rows = 3;
    const cols = 3;
    const grid = [];

    for (let currRow = 0; currRow < rows; currRow++) {
        const row = [];

        for (let currCol = 0; currCol < cols; currCol++) {
            const slotID = `${currRow}-${currCol}`;
            row.push(
                <BinderSlot
                    key={slotID}
                    card={slots[slotID] || null}
                    isSelected={selectedSlot === slotID}
                    onClick={() => setSelectedSlot(slotID)}
                />
            );
        }

        grid.push(
            <div key={currRow} style={styles.row}>
                {row}
             </div>
        );
    }

    return <div style={styles.grid}>{grid}</div>;
}

const styles = {
    grid: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
        marginTop: "40px",
    },
    row: {
        display: "flex",
        gap: "10px",
    },
};