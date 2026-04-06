import { useState } from "react";
import { searchCards } from "../api/tcgdex";

export default function CardSearch({ onCardSelect, selectedSlot}) {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function handleSearch(e) {
        const value = e.target.value;
        setQuery(value);

        if(value.trim().length < 2) {
            setResults([]);
            return;
        }

        try {
            setLoading(true);
            setError(null);
            const cards = await searchCards(value);
            setResults(cards);
        } catch (err) {
            setError("Search failed. Try Again.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div style = {styles.container}>
            <p style = {styles.hint}>
                {selectedSlot
                    ? `Placing into slot $selectedSlot}`
                    : "Select a slot first"}
            </p>
            <input
                type = "text"
                placeholder = "Search cards..."
                value={query}
                onChange={handleSearch}
                style={styles.input}
            />
            {loading && <p style={styles.status}>Searching...</p>}
            {error && <p style={styles.error}>{error}</p>}

            <div style={styles.results}>
                {results.map((card) => (
                    <div
                        key={card.id}
                        onClick={() => selectedSlot && onCardSelect(card)}
                        style={{
                            ...styles.resultCard,
                            opacity: selectedSlot ? 1 : 0.4,
                            cursor: selectedSlot ? "pointer" : "not-allowed",
                        }}
                    >
                        {card.image ? (
                            <img
                                src={`${card.image}/low.webp`}
                                alt={card.name}
                                style={styles.thumbnail}
                            />
                        ) : (
                            <div style={styles.noImage}>?</div>
                        )}
                        <div>
                            <p style={styles.cardName}>{card.name}</p>
                            {card.set?.name && (
                                <p style={styles.cardSet}>{card.set.name}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

const styles = {
    container: {
        width: "240px",
        minWidth: "240px",
        padding: "16px 12px",
        borderRight: "1px solid #ddd",
        height: "100vh",
        overflowY: "auto",
        boxSizing: "border-box",
        backgroundColor: "#fff",
    },
    hint: {
        fontSize: "12px",
        color: "#888",
        marginBottom: "8px",
    },
    input: {
        width: "100%",
        padding: "8px 10px",
        borderRadius: "8px",
        border: "1px solid #ccc",
        fontSize: "14px",
        marginBottom: "10px",
        boxSizing: "border-box",
    },
    status: { fontSize: "13px", color: "#888" },
    error: { fontSize: "13px", color: "red" },
    results: { display: "flex", flexDirection: "column", gap: "6px" },
    resultCard: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "6px 8px",
        borderRadius: "8px",
        border: "1px solid #eee",
        transition: "background 0.15s",
    },
    thumbnail: {
        width: "40px",
        height: "56px",
        objectFit: "cover",
        borderRadius: "4px",
        flexShrink: 0,
    },
    noImage: {
        width: "40px",
        height: "56px",
        borderRadius: "4px",
        backgroundColor: "#eee",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "18px",
        color: "#aaa",
        flexShrink: 0,
    },
    cardName: { fontSize: "13px", fontWeight: "600", margin: 0 },
    cardSet: { fontSize: "11px", color: "#888", margin: "2px 0 0" },
};