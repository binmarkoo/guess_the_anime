import { CELL_WIDTH } from "../../game/categories";

const statusStyles = {
    correct: "bg-green-500",
    partial: "bg-orange-500",
    wrong: "bg-red-500",
    higher: "bg-red-500",
    lower: "bg-red-500",
};

function CategoryCell({ label, value, status }) {
    let arrow = "";
    if (status === "higher") arrow = " ↑";
    if (status === "lower") arrow = " ↓";

    return (
        <div
            className={`${CELL_WIDTH} shrink-0 ${statusStyles[status] || "bg-gray-500"} text-white rounded-lg p-1.5 text-center flex flex-col justify-center`}
        >
            <div className="text-[10px] opacity-80 truncate">{label}</div>
            <div className="font-bold text-xs break-words leading-tight">
                {value}
                {arrow}
            </div>
        </div>
    );
}

export default CategoryCell;