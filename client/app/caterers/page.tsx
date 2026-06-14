"use client";

import { getCaterers } from "@/services/caterer.service";
import { Caterer } from "@/types/caterers";
import CatererCard from "@/components/CatererCard";
import { useEffect, useState } from "react";



export default function CaterersPage() {

    const [caterers, setCaterers] = useState<Caterer[]>([]);
    const [filteredCaterers, setFilteredCaterers] = useState<Caterer[]>([]);
    const [search, setSearch] = useState("");
    const [maxPrice, setMaxPrice] = useState("");
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        let filtered = [...caterers];

        if (search.trim()) {
            filtered = filtered.filter((c) =>
                c.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (maxPrice) {
            filtered = filtered.filter(
                (c) => c.pricePerPlate <= parseInt(maxPrice)
            );
        }

        setFilteredCaterers(filtered);
    }, [search, maxPrice, caterers]);

    useEffect(() => {
        const loadCaterers = async () => {
            try {
                const response = await getCaterers(page, 6);

                setCaterers(response.data);
                setFilteredCaterers(response.data);
                setTotalPages(response.pagination.totalPages);
            } catch (error) {
                console.error("Failed to fetch caterers:", error);
            } finally {
                setLoading(false);
            }
        };

        loadCaterers();
        }, [page]);


    return (
        <div className="min-h-screen bg-gray-50 p-6">
        <div className="mx-auto max-w-7xl">
            <h1 className="mb-6 text-3xl font-bold text-gray-900">Caterers</h1>

            {/* Filters */}
            <div className="mb-8 flex flex-col gap-3 md:flex-row">
            <div className="relative flex-1">
                <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
                </svg>
                <input
                type="text"
                placeholder="Search caterers…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-9 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
            </div>

            <select
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-gray-700 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100 md:w-48"
            >
                <option value="">All prices</option>
                <option value="300">Up to ₹300</option>
                <option value="500">Up to ₹500</option>
                <option value="800">Up to ₹800</option>
                <option value="1000">Up to ₹1000</option>
            </select>
            </div>

            {/* States */}
            {loading ? (
            <div className="rounded-xl bg-white p-8 text-center text-sm text-gray-500 shadow-sm">
                Loading caterers...
            </div>
            ) : filteredCaterers.length === 0 ? (
            <div className="rounded-xl bg-white p-8 text-center text-sm text-gray-500 shadow-sm">
                No caterers found.
            </div>
            ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {filteredCaterers.map((caterer) => (
                    <CatererCard
                        key={caterer._id}
                        caterer={caterer}
                    />
                ))}
            </div>
            )}
        </div>
        <div className="mt-6 flex items-center justify-center gap-4">
            <button
                disabled={page === 1}
                onClick={() => setPage((prev) => prev - 1)}
                className="rounded bg-gray-200 px-4 py-2 disabled:opacity-50"
            >
                Previous
            </button>

            <span>
                Page {page} of {totalPages}
            </span>

            <button
                disabled={page === totalPages}
                onClick={() => setPage((prev) => prev + 1)}
                className="rounded bg-gray-200 px-4 py-2 disabled:opacity-50"
            >
                Next
            </button>
        </div>
        </div>
    );
}