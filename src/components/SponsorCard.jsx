import TextType from '../components/TextType';

export default function SponsorCard({ data }) {
  return (
    <div className="border border-white-400 rounded-lg p-4 shadow-xl bg-blue-300 mb-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-3">
        <TextType 
            text={["Meet Our Supporter", "Meet Your Sponsor"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="&#128640;"
        />
        
        </h2>
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <img
          src={data.image}
          alt={data.name}
          className="w-32 h-32 object-cover rounded-md"
        />
        <div>
          <h3 className="text-xl text-gray-700 font-bold">{data.name}</h3>
          <p className="text-lg text-gray-700">{data.description}</p>
          <p className="text-lg text-gray-600">{data.location}</p>
          <a
            href={data.website}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
}
