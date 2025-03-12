export default function TestNetwork() {
  const requests = [
    {
      url: "http://example.com",
      method: "GET",
      status: 200,
      type: "document",
      size: "15.4 KB",
      time: "0.15s",
      duration: "150ms",
    },
    {
      url: "http://example.com/styles.css",
      method: "GET",
      status: 200,
      type: "stylesheet",
      size: "5.2 KB",
      time: "0.18s",
      duration: "45ms",
    },
    {
      url: "http://example.com/main.js",
      method: "GET",
      status: 200,
      type: "script",
      size: "32.1 KB",
      time: "0.22s",
      duration: "120ms",
    },
    {
      url: "http://example.com/api/user",
      method: "GET",
      status: 200,
      type: "fetch",
      size: "0.8 KB",
      time: "0.35s",
      duration: "85ms",
    },
    {
      url: "http://example.com/products",
      method: "GET",
      status: 200,
      type: "document",
      size: "18.7 KB",
      time: "0.8s",
      duration: "320ms",
    },
    {
      url: "http://example.com/api/products",
      method: "GET",
      status: 200,
      type: "fetch",
      size: "24.3 KB",
      time: "1.1s",
      duration: "110ms",
    },
    {
      url: "http://example.com/api/cart",
      method: "POST",
      status: 201,
      type: "fetch",
      size: "0.4 KB",
      time: "1.3s",
      duration: "95ms",
    },
    {
      url: "http://example.com/images/product-3.jpg",
      method: "GET",
      status: 404,
      type: "image",
      size: "0 KB",
      time: "0.9s",
      duration: "65ms",
    },
    {
      url: "http://example.com/api/cart/update",
      method: "PUT",
      status: 200,
      type: "fetch",
      size: "0.3 KB",
      time: "1.9s",
      duration: "75ms",
    },
    {
      url: "http://example.com/checkout",
      method: "GET",
      status: 200,
      type: "document",
      size: "12.6 KB",
      time: "2.4s",
      duration: "280ms",
    },
  ]

  return (
    <div className="h-full overflow-auto">
      <div className="text-xs">
        <div className="grid grid-cols-[1fr,80px,80px,100px,80px,80px] bg-zinc-800 py-2 px-3 sticky top-0">
          <div>Request</div>
          <div>Status</div>
          <div>Method</div>
          <div>Type</div>
          <div>Size</div>
          <div>Time</div>
        </div>

        {requests.map((request, index) => (
          <div
            key={index}
            className="grid grid-cols-[1fr,80px,80px,100px,80px,80px] py-2 px-3 hover:bg-zinc-800 border-t border-zinc-800"
          >
            <div className="truncate text-blue-400">{request.url}</div>
            <div className={request.status >= 400 ? "text-red-400" : "text-green-400"}>{request.status}</div>
            <div>{request.method}</div>
            <div>{request.type}</div>
            <div>{request.size}</div>
            <div className="flex items-center">
              <span className="mr-2">{request.time}</span>
              <span className="text-zinc-500">({request.duration})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

