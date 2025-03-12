export default function TestActions() {
  const actions = [
    {
      time: "0.2s",
      action: "Click",
      target: "page.getByRole('link', { name: 'Products' })",
      duration: "54ms",
    },
    {
      time: "0.5s",
      action: "Navigate",
      target: "http://example.com/products",
      duration: "320ms",
    },
    {
      time: "1.2s",
      action: "Click",
      target: "page.getByRole('button', { name: 'Add to cart' })",
      duration: "62ms",
    },
    {
      time: "1.8s",
      action: "Fill",
      target: "page.getByPlaceholder('Enter quantity')",
      value: "2",
      duration: "45ms",
    },
    {
      time: "2.1s",
      action: "Click",
      target: "page.getByRole('button', { name: 'Checkout' })",
      duration: "58ms",
    },
  ]

  return (
    <div className="h-full overflow-auto">
      <div className="p-2">
        {actions.map((action, index) => (
          <div
            key={index}
            className={`p-3 border-l-2 ${index === 2 ? "border-blue-500 bg-blue-900/20" : "border-transparent"} hover:bg-zinc-800 mb-1 rounded`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-xs text-zinc-400 w-10">{action.time}</span>
                <span className="font-medium text-sm">{action.action}</span>
              </div>
              <span className="text-xs text-zinc-400">{action.duration}</span>
            </div>
            <div className="mt-1 text-sm text-zinc-300 font-mono pl-10">
              {action.target}
              {action.value && <span className="text-green-400">, "{action.value}"</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

