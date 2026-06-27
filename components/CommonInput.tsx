"use client";

interface CommonInputProps {
  label: string;
  value: string;
  editable?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function CommonInput({
  label,
  value,
  editable = false,
  onChange,
  rightIcon,
  onClick,
  className = "",
}: CommonInputProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Floating Label */}
      <label className="absolute left-3 -top-2 bg-white px-1 text-[11px] text-gray-500 z-10">
        {label}
      </label>

      {/* Input Box */}
      <div
        onClick={onClick}
        className="
          flex items-center justify-between
          border border-gray-300
          rounded-md
          px-3
          h-[48px]
          bg-white
          cursor-pointer
        "
      >
        {editable ? (
          <input
  type={label === "Depart" || label === "Return" ? "date" : "text"}
  value={value}
  onChange={onChange}
  className="w-full outline-none text-sm"
/>
        ) : (
          <span className="text-sm text-black truncate w-full">{value}</span>
        )}

        {rightIcon && <div className="ml-2 flex-shrink-0">{rightIcon}</div>}
      </div>
    </div>
  );
}
