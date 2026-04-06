const BASE_URL = "https://api.tcgdex.net/v2/en";

export async function searchCards(query) {
    if (!query || query.trim().length < 2) return [];

    const response = await fetch(
        `${BASE_URL}/cards?name=${encodeURIComponent(query.trim())}`
    );

    if (!response.ok) throw new Error(`API error: ${response.status}`);

    const data = await response.json();
    return Array.isArray(data) ? data : [];
}