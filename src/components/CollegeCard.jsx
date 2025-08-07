export default function CollegeCard({ data }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-md transition bg-white">
      <h2 className="text-lg font-bold text-blue-700">{data.name}</h2>
      <p className="text-sm text-gray-600">{data.location}</p>
      <div className="mt-2 text-sm text-gray-500">
        <span className="inline-block mr-2 bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Exam: {data.exam}</span>
        <span className="inline-block bg-green-100 text-green-800 px-2 py-0.5 rounded">Rank: {data.rank}</span>
      </div>
      <a
        href={data.link}
        target="_blank"
        className="inline-block mt-3 text-blue-600 hover:underline text-sm"
      >
        Visit Website →
      </a>
    </div>
  )
}
