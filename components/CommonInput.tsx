"use client";

import Image from "next/image";

type Props = {
  label: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  editable?: boolean;
  rightIcon?: React.ReactNode;
};

export default function CommonInput({
  label,
  value,
  onChange,
  editable = false,
  rightIcon,
}: Props) {
  return (
    <div className="relative w-[190px] flex-shrink-0">

      {/* LABEL */}
      <label className="text-xs text-gray-500 bg-white px-1 absolute -top-2 left-3">
        {label}
      </label>

      {/* BOX */}
      <div className="flex items-center border h-14 px-3 rounded-md bg-white shadow-sm">

        <input
          type="text"
          value={value}
          readOnly={!editable}
          onChange={onChange}
          className="w-full outline-none text-sm text-gray-900 truncate"
        />

        {rightIcon && (
          <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
            {rightIcon}
          </div>
        )}

      </div>
    </div>
  );
}