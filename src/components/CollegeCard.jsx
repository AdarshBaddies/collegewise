// src/components/CollegeCard.jsx
export default function CollegeCard({ data }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <h2 className="text-lg font-semibold mb-1">{data.name}</h2>
      <p className="text-sm text-gray-600">{data.location}</p>
      <p className="text-sm text-gray-500">Exam: {data.exam} | Rank: {data.rank}</p>
      <a href={data.link} className="text-blue-500 underline mt-2 block" target="_blank">View More</a>
    </div>
  )
}
