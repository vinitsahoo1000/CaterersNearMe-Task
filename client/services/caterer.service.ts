const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getCaterers = async (
    page: number = 1,
    limit: number = 6
    ) => {
    const response = await fetch(
        `${API_URL}/caterers?page=${page}&limit=${limit}`
    );

    if (!response.ok) {
        throw new Error("Failed to fetch caterers");
    }

    return response.json();
};