const BASE_URL = "https://api.tcgdex.net/v2/en";

export async function searchCards(query) {
    if (!query || query.trim().length < 2) return [];

    const response = await fetch(
        `${BASE_URL}/cards?name=like:${encodeURIComponent(query)}&orderBy=name`
    );

    if (!response.ok) throw new Error("Search failed");

    const data = await response.json();
    return Array.isArray(data) ? data : [];
}