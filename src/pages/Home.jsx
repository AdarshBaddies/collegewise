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
    <div>
      <h1 className="text-2xl font-bold mb-4">Explore Colleges</h1>
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
