export default function TestSource() {
  const sourceCode = `
import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  // Navigate to the application
  await page.goto('http://example.com');
  
  // Click on the Products link
  await page.getByRole('link', { name: 'Products' }).click();
  
  // Verify we're on the products page
  await expect(page).toHaveURL('http://example.com/products');
  
  // Add an item to the cart
  await page.getByRole('button', { name: 'Add to cart' }).click();
  
  // Set the quantity
  await page.getByPlaceholder('Enter quantity').fill('2');
  
  // Proceed to checkout
  await page.getByRole('button', { name: 'Checkout' }).click();
  
  // Verify we're on the checkout page
  await expect(page).toHaveURL('http://example.com/checkout');
});
  `

  const lines = sourceCode.trim().split("\n")

  return (
    <div className="h-full overflow-auto bg-zinc-900 p-4 font-mono text-sm">
      <div className="flex justify-end mb-2">
        <button className="text-xs text-blue-400 hover:underline">Open in VSCode</button>
      </div>
      <div>
        {lines.map((line, index) => (
          <div key={index} className={`py-0.5 flex ${index === 11 ? "bg-blue-900/30" : ""}`}>
            <span className="text-zinc-500 w-8 text-right pr-2">{index + 1}</span>
            <span className="text-zinc-300">{line}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

