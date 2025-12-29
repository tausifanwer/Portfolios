const Switcher2 = ({ checked, onToggle }) => {
    return (
        <label className="flex cursor-pointer select-none items-center">
            <div className="relative">
                <input
                    type="checkbox"
                    checked={checked}
                    onChange={onToggle}
                    className="sr-only"
                />

                {/* Background */}
                <div
                    className={`h-5 w-14 rounded-full transition-colors duration-300 ${checked ? "bg-white" : "bg-white"
                        }`}
                />

                {/* Dot */}
                <div
                    className={`absolute -top-1 left-0 h-7 w-7 rounded-full ${checked ? "bg-[#b01f1f]" : "bg-[#7dbfee]"} transition-transform duration-300 ${checked ? "translate-x-7" : "translate-x-0"
                        }`}
                />
            </div>
        </label>
    );
};

export default Switcher2;
