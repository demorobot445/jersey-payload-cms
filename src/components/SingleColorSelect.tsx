import React, { useEffect, useState } from "react";
import { useField, Label } from "payload/components/forms";
import type { Color } from "payload/generated-types";

type Option = {
  label: string;
  value: string;
  color: string;
};

const SingleColorSelect: React.FC<{ path: string; label?: string }> = ({
  path,
  label,
}) => {
  const { value = "", setValue } = useField<string>({ path });
  const [options, setOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchColors = async () => {
      try {
        const res = await fetch("/api/colors?limit=0");
        const data = await res.json();

        const docs = data.docs as Color[];

        const formatted = docs.map((doc) => ({
          label: doc.name,
          value: doc.id,
          color: doc.hexCode,
        }));

        setOptions(formatted);
      } catch (err) {
        console.error("Failed to fetch colors", err);
      } finally {
        setLoading(false);
      }
    };

    fetchColors();
  }, []);

  const handleSelect = (id: string) => {
    setValue(id); // Only one selected at a time
  };

  return (
    <div className="color-select">
      <Label htmlFor={path} label={label || "Select Color"} required />

      {loading && <p>Loading colors...</p>}

      <div className="color-select_color-boxes">
        {options.map((option) => (
          <button
            type="button"
            key={option.value}
            className={`color-select_color-box ${
              value === option.value ? "selected" : ""
            }`}
            style={{ backgroundColor: option.color }}
            onClick={() => handleSelect(option.value)}
            title={option.label}
          />
        ))}
      </div>
    </div>
  );
};

export default SingleColorSelect;
