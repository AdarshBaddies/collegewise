export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-100">
      <h1 className="text-3xl font-bold mb-4 text-yellow-400">About CollegeWise</h1>

      <section className="mb-6">
        <p className="text-lg">
          <strong>CollegeWise</strong> is a free, ad-free, and user-friendly platform built to help students explore and compare colleges across India. Whether you’re preparing for engineering, medical, or other higher education courses, our filters and insights make your college search simple and distraction-free.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-yellow-300 mb-2">🎯 Why We Built This</h2>
        <p>
          Most college search websites today are filled with ads, confusing filters, or paywalls. We wanted to create something simple, accessible, and fast — especially for students from rural or low-income backgrounds who need quick answers without distractions.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-yellow-300 mb-2">🔍 Features</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Search and filter colleges based on your needs</li>
          <li>No login or account required</li>
          <li>Fast, mobile-friendly design</li>
          <li>External links to trusted sources like Careers360, Shiksha, etc.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-yellow-300 mb-2">🤝 Become a Sponsor</h2>
        <p className="mb-2">
          Want your college featured at the top of our homepage? We offer a <strong>monthly sponsor slot</strong> to highlight one institute as our official partner.
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>Your logo and message appear above all other content</li>
          <li>Clickable link to your official website</li>
          <li>Appears on every visit to our homepage for a full month</li>
        </ul>
        <p className="mt-2">
          To become a sponsor, please contact us at: <a href="mailto:collegewise.contact@gmail.com" className="text-yellow-400 hover:underline">collegewise.contact@gmail.com</a>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-yellow-300 mb-2">📌 Note</h2>
        <p>
          This is a passion project created by a recent Computer Science graduate to help students just like you. We’re constantly improving the site — feedback and support are always welcome!
        </p>
      </section>
    </div>
  );
}
