import { useState } from "react";
import CardSearch from "./components/CardSearch";
import BinderGrid from "./components/BinderGrid";

export default function App() {
  const [slots, setSlots] = useState({});
  const [selectedSlot, setSelectedSlot] = useState(null);

  function handleCardSelect(card) {
    if (!selectedSlot) return;
    setSlots((prev) => ({ ...prev, [selectedSlot]: card}));
    setSelectedSlot(null);
  }

    return (
        <div style={styles.app}>
            <div style={styles.layout}>
                <CardSearch
                    onCardSelect={handleCardSelect}
                    selectedSlot={selectedSlot}
                />
                <div style={styles.main}>
                    <h1 style={styles.title}>Pokémon Binder Designer</h1>
                    <BinderGrid
                        slots={slots}
                        selectedSlot={selectedSlot}
                        onSlotSelect={setSelectedSlot}
                    />
                </div>
            </div>
        </div>
    );
}

const styles = {
    app: {
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
    },
    layout: {
        display: "flex",
        height: "100vh",
    },
    main: {
        flex: 1,
        textAlign: "center",
        paddingTop: "20px",
        overflowY: "auto",
    },
    title: {
        marginBottom: "20px",
    },
};