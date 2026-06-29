"use client";

interface CommonInputProps {
  label: string;
  value: string;
  editable?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  placeholder?: string; // ✅ must be here
}

export default function CommonInput({
  label,
  value,
  editable = false,
  onChange,
  rightIcon,
  onClick,
  className = "",
  placeholder = "", // ✅ default value add karo
}: CommonInputProps) {
  return (
    <div className={`relative ${className}`}>
      
      {/* Label */}
      <label className="absolute left-3 -top-2 bg-white px-1 text-[11px] text-gray-500 z-10">
        {label}
      </label>

      {/* Input box */}
      <div
        onClick={onClick}
        className="
          flex items-center justify-between
          border border-gray-400
          rounded-md
          px-3
          h-[48px]
          bg-white
          cursor-pointer
        "
      >
        {editable ? (
          <input
            type="text"
            value={value}
            placeholder={placeholder}  // ✅ now safe
            onChange={onChange}
            className="w-full outline-none text-sm placeholder:text-gray-400"
          />
        ) : (
          <span className="text-sm text-black truncate w-full">
            {value}
          </span>
        )}

        {rightIcon && (
          <div className="ml-2 flex-shrink-0">
            {rightIcon}
          </div>
        )}
      </div>
    </div>
  );
}