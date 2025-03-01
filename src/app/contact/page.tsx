export default function Contact() {
  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold mb-10 text-center">Contact Me</h1>
      <div className="max-w-lg mx-auto bg-gray-800 rounded-xl shadow-lg p-8">
        <p className="text-gray-300 mb-6 text-center">
          Feel free to reach out via the following platforms:
        </p>
        <ul className="space-y-4">
          <li className="flex items-center justify-center">
            <a
              href="https://github.com/tetn39"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition"
            >
              GitHub: tetn39
            </a>
          </li>
          <li className="flex items-center justify-center">
            <a
              href="https://x.com/tetn39"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition"
            >
              Twitter: @tetn39
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
