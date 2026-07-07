import { motion } from "motion/react";
import { CELL_WIDTH } from "../../game/categories";

const statusStyles = {
    correct: "bg-green-500",
    partial: "bg-orange-500",
    wrong: "bg-red-500",
    higher: "bg-red-500",
    lower: "bg-red-500",
};

function CategoryCell({ label, value, status, index }) {
    let arrow = "";
    if (status === "higher") arrow = " ↑";
    if (status === "lower") arrow = " ↓";

    return (
        <motion.div
            className={`${CELL_WIDTH} shrink-0 ${statusStyles[status] || "bg-gray-500"} text-white rounded-lg p-1.5 text-center flex flex-col justify-center`}
            initial={{ rotateX: -90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.08 }}
        >
            <div className="text-[10px] opacity-80 truncate">{label}</div>
            <div className="font-bold text-xs break-words leading-tight">
                {value}
                {arrow}
            </div>
        </motion.div>
    );
}

export default CategoryCell;