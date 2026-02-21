import { CiDark, CiLight } from "react-icons/ci";
const Switcher2 = ({ checked, onToggle }) => {
    return (
        <label className="flex cursor-pointer select-none items-center">
            <div className="relative">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onToggle}
                    className="sr-only"
                    aria-label={checked ? "Switch to light mode" : "Switch to dark mode"}
                />

                {checked ? (
                    <CiDark className="text-2xl" style={{ fontSize: "xx-large" }} />
                ) : (
                    <CiLight className="text-2xl" style={{ fontSize: "xx-large" }} />
                )}
            </div>
        </label>
    );
};

export default Switcher2;
