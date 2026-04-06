import BinderSlot from "./BinderSlot";

export default function BinderGrid(){
    const rows = 3;
    const cols = 3;
    const grid = [];

    for (let r = 0; r < rows; r++) {
        const row = [];
        for (let c=0; c<cols; c++) {
            row.push(<BinderSlot key={`${r}-${c}`} />);
        }
        grid.push(
            <div key={r} style={styles.row}>
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