const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getCaterers = async () => {
    const response = await fetch(API_URL + "/caterers");

    if (!response.ok) {
        throw new Error("Failed to fetch caterers");
    }

    return response.json();
};