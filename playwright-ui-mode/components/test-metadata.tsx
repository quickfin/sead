export default function TestMetadata() {
  const metadata = [
    { label: "Browser", value: "Chromium 123.0.6312.58" },
    { label: "Operating System", value: "Windows 11" },
    { label: "Viewport Size", value: "1280 × 720" },
    { label: "Device Scale Factor", value: "1" },
    { label: "Color Scheme", value: "light" },
    { label: "Has Touch", value: "false" },
    { label: "Is Mobile", value: "false" },
    { label: "Test Duration", value: "2.5s" },
    { label: "Test Status", value: "Passed" },
    { label: "Test File", value: "example.spec.ts" },
    { label: "Project", value: "chromium" },
    { label: "Retry", value: "0" },
  ]

  return (
    <div className="h-full overflow-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        {metadata.map((item, index) => (
          <div key={index} className="border border-zinc-700 rounded-md p-3">
            <div className="text-xs text-zinc-400 mb-1">{item.label}</div>
            <div className="text-sm">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

