import React from "react";

export default function Child({ count, onIncrement }) {
  return (
    <div className="p-4 border rounded-lg mb-2">
      <p>Nilai count dari parent: {count}</p>
      <button
        onClick={onIncrement}
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded-lg"
      >
        Tambah
      </button>
    </div>
  );
}
