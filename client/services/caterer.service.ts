const API_URL = "http://localhost:5000/api/caterers";

export const getCaterers = async () => {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch caterers");
    }

    return response.json();
};