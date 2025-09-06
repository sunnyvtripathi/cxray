export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-6">cxray</h1>

      <div className="w-full max-w-2xl space-y-4">
        {/* Input box */}
        <textarea
          placeholder="Ask cxray a question..."
          className="w-full p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          rows={4}
        />

        {/* Run button */}
        <button
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Run cxray
        </button>

        {/* Results area */}
        <div className="mt-6 p-4 border rounded-lg min-h-[120px]">
          <p className="text-gray-500">Results will appear here...</p>
        </div>
      </div>
    </main>
  )
}
