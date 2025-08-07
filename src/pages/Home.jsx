// src/pages/Home.jsx
import { useEffect, useState } from 'react'
import CollegeCard from '../components/CollegeCard'

export default function Home() {
  const [colleges, setColleges] = useState([])

  useEffect(() => {
    fetch('/colleges.json')
      .then(res => res.json())
      .then(data => setColleges(data))
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Explore Colleges</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {colleges.map(college => (
          <CollegeCard key={college.id} data={college} />
        ))}
      </div>
    </div>
  )
}
