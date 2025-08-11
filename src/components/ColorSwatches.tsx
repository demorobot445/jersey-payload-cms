import React, { useEffect, useState } from "react";
import { useField, Label } from "payload/components/forms";
import { Button } from "payload/components/elements";
import type { Color } from "payload/generated-types";

type Option = {
  label: string;
  value: string;
  color: string;
};

const ColorSwatches: React.FC<{ path: string; label?: string }> = ({
  path,
  label,
}) => {
  const { value = [], setValue } = useField<string[]>({ path });
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

  const toggleSelect = (id: string) => {
    const updated = value.includes(id)
      ? value.filter((v) => v !== id)
      : [...value, id];

    setValue(updated);
  };

  const handleSelectAll = () => {
    const allIds = options.map((opt) => opt.value);
    setValue(allIds);
  };

  const handleDeselectAll = () => {
    setValue([]);
  };

  return (
    <div className="color-select">
      <Label htmlFor={path} label={label || "Select Colors"} required />

      <div className="color-select_box">
        <Button buttonStyle="primary" type="button" onClick={handleSelectAll}>
          Select All
        </Button>
        <Button
          buttonStyle="secondary"
          type="button"
          onClick={handleDeselectAll}
        >
          Deselect All
        </Button>
      </div>

      {loading && <p>Loading colors...</p>}

      <div className="color-select_color-boxes">
        {options.map((option) => (
          <button
            type="button"
            key={option.value}
            className={`color-select_color-box ${
              value.includes(option.value) ? "selected" : ""
            }`}
            style={{ backgroundColor: option.color }}
            onClick={() => toggleSelect(option.value)}
            title={option.label}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorSwatches;
