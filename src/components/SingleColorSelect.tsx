import React, { useEffect, useState } from "react";
import { useField, Label, useFormFields } from "payload/components/forms";
import type { Color, ColorPallet } from "payload/generated-types";

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

  // Get all form fields
  const fields = useFormFields(([fields]) => fields);

  // Directly access another field's value
  const modelColorPalletId = fields?.["colorPallets.modelColorPallet"]?.value;

  const [options, setOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!modelColorPalletId) {
      setOptions([]);
      setLoading(false);
      return;
    }

    const fetchPalletColors = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `/api/color-pallets/${modelColorPalletId}?depth=2`
        );
        const pallet = (await res.json()) as ColorPallet;

        const formatted = (pallet.colors || []).map((color: Color) => ({
          label: color.name,
          value: color.id,
          color: color.hexCode,
        }));

        setOptions(formatted);

        // ✅ If current value is not in new options, clear it
        const isStillValid = formatted.some((opt) => opt.value === value);
        if (!isStillValid) {
          setValue(""); // clear
        }
      } catch (err) {
        console.error("Failed to fetch pallet colors", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPalletColors();
  }, [modelColorPalletId, value, setValue]);

  const handleSelect = (id: string) => {
    setValue(id);
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
