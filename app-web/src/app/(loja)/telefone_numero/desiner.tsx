import React, { useState } from "react";
import { ddds } from "./ddd";

interface SelectedDDD {
  code: string;
  flag: string;
  country: string;
}

function PhoneNumberInput() {
  const [telefone, setTelefone] = useState("");
  const [selectedDDD, setSelectedDDD] = useState<SelectedDDD | null>({
    code: "+55",
    flag: "/flags/br.svg",
    country: "Brasil",
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    const formattedValue = formatTelefone(rawValue);
    setTelefone(formattedValue);
  };

  const handleDDDChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCode = e.target.value;
    const ddd = ddds.find((ddd) => ddd.code === selectedCode);
    if (ddd) {
      setSelectedDDD(ddd);
    }
    setIsOpen(false);
  };

  const formatTelefone = (value: string) => {
    const part1 = value.slice(0, 2);
    const part2 = value.slice(2, 3);
    const part3 = value.slice(3, 7);
    const part4 = value.slice(7, 11);

    let formatted = part1;
    if (part2) formatted += ` ${part2}`;
    if (part3) formatted += ` ${part3}`;
    if (part4) formatted += ` ${part4}`;

    return formatted;
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Telefone
      </label>
      <div className="flex items-center relative">
        <button
          className="inline-flex items-center rounded-md border border-gray-300 px-4 py-2"
          onClick={handleToggle}
        >
          {selectedDDD ? (
            <>
              <img
                src={selectedDDD.flag}
                alt={selectedDDD.country}
                className="w-6 h-4 mr-2"
              />
              {selectedDDD.country}
            </>
          ) : (
            "Selecione um país"
          )}
        </button>
        {isOpen && (
          <select
            onChange={handleDDDChange}
            className="absolute top-full text-black mt-1 w-full border rounded-md"
          >
            {ddds.map((ddd) => (
              <option key={ddd.code} value={ddd.code}>
                <span role="img" aria-label={ddd.country}>
                </span>{" "}
                {ddd.country} ({ddd.code})
              </option>
            ))}
          </select>
        )}
      </div>
      <input
        type="tel"
        placeholder="Número de telefone"
        value={telefone}
        onChange={handleTelefoneChange}
        className="mt-2 block w-full border border-gray-300 text-black rounded-md p-2"
      />
    </div>
  );
}

export default PhoneNumberInput;
