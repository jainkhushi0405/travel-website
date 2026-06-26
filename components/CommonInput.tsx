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
    <div className={`relative flex flex-col flex-1 ${className}`}>

      {/* LABEL */}
      <label className="text-[11px] text-gray-500 mb-[4px]">
        {label}
      </label>

      {/* INPUT BOX */}
      <div
        onClick={onClick}
        className="
          flex items-center justify-between
          border border-gray-300
          rounded-[4px]
          px-3
          h-[44px]
          bg-white
          cursor-pointer
          min-w-0
        "
      >
        {editable ? (
          <input
            value={value}
            onChange={onChange}
            className="w-full outline-none text-sm"
          />
        ) : (
          <span className="text-sm text-black whitespace-nowrap overflow-hidden text-ellipsis">
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