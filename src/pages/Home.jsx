import { useEffect, useState } from 'react'
import CollegeCard from '../components/CollegeCard'
import FilterBar from '../components/FilterBar'

export default function Home() {
  const [colleges, setColleges] = useState([])
  const [filtered, setFiltered] = useState([])

  useEffect(() => {
    fetch('/colleges.json')
      .then(res => res.json())
      .then(data => {
        setColleges(data)
        setFiltered(data)
      })
  }, [])

  const handleFilter = ({ exam, minRank, maxRank }) => {
    let result = [...colleges]

    if (exam) result = result.filter(c => c.exam === exam)

    if (minRank) result = result.filter(c => {
      const rankValue = parseInt(c.rank.match(/\d+/)?.[0])
      return rankValue >= parseInt(minRank)
    })

    if (maxRank) result = result.filter(c => {
      const rankValue = parseInt(c.rank.match(/\d+/)?.[0])
      return rankValue <= parseInt(maxRank)
    })

    setFiltered(result)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-12 px-4 sm:px-8 lg:px-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-8">
            Find the Best Colleges Based on Your Rank
        </h1>
        
      <FilterBar onFilter={handleFilter} />
      {filtered.length === 0 ? (
        <p className="text-gray-600">No colleges match your filters.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(college => (
            <CollegeCard key={college.id} data={college} />
          ))}
        </div>
      )}
    </div>
  )
}
