"use client";
import { Auth } from "@/auth/Auth";
import { ChangeEvent, useState } from "react";
import "./colorPicker.css";

export function ColorPicker() {
  const [hexColor, setHexColor] = useState("#000");
  const [unit, setUnit] = useState("HEX");

  const $e = {
    color: {
      hex: {
        change: (event: ChangeEvent<HTMLInputElement>) => {
          const color = event.target.value;
          setHexColor(color);
          if (color.startsWith("#")) return setUnit("HEX");
          if (color.startsWith("rgb(")) return setUnit("RGB");
          if (color.startsWith("lab(")) return setUnit("LAB");
          if (color.startsWith("hsl")) return setUnit("HSL");
        }
      }
    }
  };

  return (
    <Auth.ReadRole>
      <div className="colorPicker">
        <section style={{ height: '80px', backgroundColor: hexColor }} />
        <aside style={{ padding: '.4rem' }}>
          <form>
            <div>
              <label>{unit}
                <input type="text" value={hexColor} onChange={$e.color.hex.change} />
              </label>
            </div>
          </form>
        </aside>
      </div>
    </Auth.ReadRole >
  );
}