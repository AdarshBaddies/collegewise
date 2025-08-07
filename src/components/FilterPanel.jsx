// src/components/FilterPanel.jsx
import { useState } from 'react';

export default function FilterPanel({ onSearch, onFilter }) {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({
    exam: '',
    department: '',
    structure: '',
    quota: '',
    accreditation: '',
    category: ''
  });

  const handleSearch = e => {
    const val = e.target.value;
    setSearch(val);
    onSearch(val);
  };

  const handleFilterChange = (field, value) => {
    const updated = { ...filters, [field]: value };
    setFilters(updated);
    onFilter(updated);
  };

  const dropdown = (label, field, options) => (
    <div>
      <label className="block text-gray-700 text-sm">{label}</label>
      <select
        value={filters[field]}
        onChange={e => handleFilterChange(field, e.target.value)}
        className="mt-1 block w-full rounded border-gray-300 text-gray-800"
      >
        <option value="">All</option>
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );

  return (
    <div className="mb-6 p-4 bg-white bg-opacity-80 rounded shadow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <input
        type="text"
        placeholder="Search colleges..."
        value={search}
        onChange={handleSearch}
        className="col-span-full mt-1 block w-full rounded border-gray-300 text-gray-800 px-3 py-2"
      />
      {dropdown('Exam Type', 'exam', ['KEAM', 'JEE', 'NEET'])}
      {dropdown('Department', 'department', ['CSE', 'ECE', 'ME', 'CE'])}
      {dropdown('Structure', 'structure', ['Self‑Financing', 'Government'])}
      {dropdown('Quota', 'quota', ['General', 'OBC', 'SC', 'ST'])}
      {dropdown('Accreditation', 'accreditation', ['NAAC A+', 'NAAC A', 'NBA'])}
      {dropdown('Category', 'category', ['GEN', 'SC', 'ST', 'OBC'])}
    </div>
  );
}
