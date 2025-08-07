import { useState } from 'react'

export default function FilterBar({ onFilter }) {
  const [exam, setExam] = useState('')
  const [minRank, setMinRank] = useState('')
  const [maxRank, setMaxRank] = useState('')

  const handleFilter = () => {
    onFilter({ exam, minRank, maxRank })
  }

  return (
    <div className="mb-6 p-4 bg-white rounded shadow flex flex-wrap gap-4 items-end">
      <div>
        <label className="block text-sm font-medium text-gray-700">Exam</label>
        <select
          value={exam}
          onChange={e => setExam(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded px-2 py-1"
        >
          <option value="">All</option>
          <option value="KEAM">KEAM</option>
          <option value="JEE">JEE</option>
          <option value="NEET">NEET</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Min Rank</label>
        <input
          type="number"
          value={minRank}
          onChange={e => setMinRank(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded px-2 py-1"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Max Rank</label>
        <input
          type="number"
          value={maxRank}
          onChange={e => setMaxRank(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded px-2 py-1"
        />
      </div>

      <button
        onClick={handleFilter}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Apply Filters
      </button>
    </div>
  )
}
