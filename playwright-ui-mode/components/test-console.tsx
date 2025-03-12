export default function TestConsole() {
  const logs = [
    { type: "browser", level: "info", message: "Navigation to http://example.com started", time: "0.1s" },
    { type: "browser", level: "info", message: "Navigation to http://example.com completed", time: "0.15s" },
    { type: "test", level: "info", message: "Clicking on Products link", time: "0.2s" },
    { type: "browser", level: "info", message: "Navigation to http://example.com/products started", time: "0.5s" },
    { type: "browser", level: "info", message: "Navigation to http://example.com/products completed", time: "0.8s" },
    { type: "browser", level: "warn", message: "Resource loading failed: /images/product-3.jpg", time: "0.9s" },
    { type: "test", level: "info", message: "Adding item to cart", time: "1.2s" },
    { type: "browser", level: "info", message: "Cart updated: 1 item", time: "1.3s" },
    { type: "test", level: "info", message: "Setting quantity to 2", time: "1.8s" },
    { type: "browser", level: "info", message: "Cart updated: 2 items", time: "1.9s" },
    { type: "test", level: "info", message: "Proceeding to checkout", time: "2.1s" },
    { type: "browser", level: "info", message: "Navigation to http://example.com/checkout started", time: "2.2s" },
    { type: "browser", level: "info", message: "Navigation to http://example.com/checkout completed", time: "2.4s" },
  ]

  return (
    <div className="h-full overflow-auto">
      <div className="p-2">
        {logs.map((log, index) => (
          <div key={index} className="py-1 px-2 hover:bg-zinc-800 flex items-start">
            <span className="text-xs text-zinc-400 w-10">{log.time}</span>
            <div className="flex-1">
              <div className="flex items-center">
                <span
                  className={`text-xs px-1.5 py-0.5 rounded mr-2 ${
                    log.type === "browser" ? "bg-purple-900/30 text-purple-400" : "bg-blue-900/30 text-blue-400"
                  }`}
                >
                  {log.type}
                </span>
                <span className={`text-xs ${log.level === "warn" ? "text-yellow-400" : "text-zinc-300"}`}>
                  {log.message}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

