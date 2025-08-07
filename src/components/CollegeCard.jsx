export default function CollegeCard({ data }) {
  return (
    <div className="w-full border rounded-lg p-6 shadow hover:shadow-lg transition bg-white bg-opacity-99">
      {/* College Rank & Name */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
        <h2 className="text-xl font-bold text-blue-800">
          #{data.rank} - {data.name}
        </h2>
        <p className="text-sm text-gray-600">{data.location}</p>
      </div>

      {/* Filter Tags */}
      <div className="flex flex-wrap gap-2 text-sm text-gray-700 mt-2">
        <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded">Exam: {data.exam}</span>
        <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded">Dept: {data.department}</span>
        <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded">Structure: {data.structure}</span>
        <span className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded">Quota: {data.quota}</span>
        <span className="bg-pink-100 text-pink-800 px-2 py-0.5 rounded">Accreditation: {data.accreditation}</span>
        <span className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded">Category: {data.category}</span>
      </div>

      {/* External Links */}
      <div className="mt-4 flex flex-wrap gap-4 text-sm">
        {data.link && (
          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            🌐 Official Website
          </a>
        )}
        {data.career_link && (
          <a
            href={data.career_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:underline"
          >
            📘 Career360
          </a>
        )}
        {data.shiksha_link && (
          <a
            href={data.shiksha_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-600 hover:underline"
          >
            📗 Shiksha
          </a>
        )}
      </div>
    </div>
  )
}
