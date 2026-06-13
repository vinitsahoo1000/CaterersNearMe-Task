import { Caterer } from "@/types/caterers";

interface CatererCardProps {
    caterer: Caterer;
}

export default function CatererCard({
    caterer,
}: CatererCardProps) {
    return (
        <div className="group rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-150 hover:border-gray-300 hover:shadow-md">
        {/* Header */}
        <div className="mb-3 flex items-start justify-between gap-2">
            <h2 className="text-base font-semibold leading-snug text-gray-900">
            {caterer.name}
            </h2>

            <span className="flex shrink-0 items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800">
            <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-amber-500"
            >
                <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
            {caterer.rating}
            </span>
        </div>

        {/* Location */}
        <div className="mb-4 flex items-center gap-1.5 text-sm text-gray-500">
            <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0"
            >
            <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
            </svg>

            {caterer.location}
        </div>

        <div className="mb-4 h-px bg-gray-100" />

        {/* Price */}
        <div className="mb-4 flex items-baseline gap-1">
            <span className="text-xl font-semibold text-gray-900">
            ₹{caterer.pricePerPlate}
            </span>

            <span className="text-sm text-gray-400">
            / plate
            </span>
        </div>

        {/* Cuisines */}
        <div className="flex flex-wrap gap-1.5">
            {caterer.cuisines.map((cuisine) => (
            <span
                key={cuisine}
                className="rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700"
            >
                {cuisine}
            </span>
            ))}
        </div>
        </div>
    );
}