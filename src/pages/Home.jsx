import { useEffect, useState } from 'react'
import CollegeCard from '../components/CollegeCard'
import FilterPanel from '../components/FilterPanel'
import TrueFocus from '../components/TrueFocus';

export default function Home() {
  const [colleges, setColleges] = useState([])
  const [filtered, setFiltered] = useState([])

  const [searchTerm, setSearchTerm] = useState('')
  const [filters, setFilters] = useState({
    exam: '',
    department: '',
    structure: '',
    quota: '',
    accreditation: '',
    category: '',
    minRank: '',
    maxRank: ''
  })

  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}colleges.json`)
      .then(res => res.json())
      .then(data => {
        setColleges(data)
        setFiltered(data)
      })
  }, [])

  useEffect(() => {
    let result = [...colleges]

    // Search filter
    if (searchTerm) {
      result = result.filter(college =>
        college.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Dropdown + rank filters
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        if (key === 'minRank') {
          result = result.filter(college => {
            const rankValue = parseInt(college.rank?.match(/\d+/)?.[0])
            return rankValue >= parseInt(value)
          })
        } else if (key === 'maxRank') {
          result = result.filter(college => {
            const rankValue = parseInt(college.rank?.match(/\d+/)?.[0])
            return rankValue <= parseInt(value)
          })
        } else {
          result = result.filter(college => college[key] === value)
        }
      }
    })

    // Assign dynamic rank based on order
    result = result.map((college, index) => ({
      ...college,
      rank: index + 1
    }))

    setFiltered(result)
  }, [searchTerm, filters, colleges])

  return (
    <div className="min-h-screen py-12 px-4 sm:px-8 lg:px-16 bg-transparent">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-blue-4000 mb-8">
        <TrueFocus 
            sentence="For You"
            manualMode={false}
            blurAmount={5}
            borderColor="red"
            animationDuration={2}
            pauseBetweenAnimations={1}
        />
      </h1>

      {/* Combined filters: search + dropdown + rank */}
      <FilterPanel
        onSearch={(val) => setSearchTerm(val)}
        onFilter={(updatedFilters) => setFilters(updatedFilters)}
      />

      {/* College list */}
      {filtered.length === 0 ? (
        <p className="text-gray-600">No colleges match your filters.</p>
      ) : (
        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
          {filtered.map(college => (
            <CollegeCard key={college.id} data={college} />
          ))}
        </div>
      )}
    </div>
  )
}
