export default function Contact() {
  return (
    <div className="py-10 bg-theme-dark">
      <h1 className="text-4xl font-bold mb-10 text-center text-theme-light">Contact Me</h1>
      <div className="max-w-lg mx-auto bg-theme-medium rounded-xl shadow-lg p-8">
        <p className="mb-6 text-center text-theme-text">
          Feel free to reach out via the following platforms:
        </p>
        <ul className="space-y-4">
          <li className="flex items-center justify-center">
            <a
              href="https://github.com/tetn39"
              target="_blank"
              rel="noopener noreferrer"
              className="text-theme-accent hover:text-theme-light transition"
            >
              GitHub: tetn39
            </a>
          </li>
          <li className="flex items-center justify-center">
            <a
              href="https://x.com/tetn39"
              target="_blank"
              rel="noopener noreferrer"
              className="text-theme-accent hover:text-theme-light transition"
            >
              Twitter: @tetn39
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
