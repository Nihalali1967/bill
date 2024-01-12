import React, { useState } from 'react';
import './App.css'; // Import your Tailwind CSS styles

function App() {
  // Array of product objects with names and prices
  const products = [
    { name: 'SM-450', price: 29 },
    { name: 'SM-950', price: 58 },
    { name: 'TM-400', price: 22 },
    { name: 'TM-475', price: 26 },
    { name: 'CURD', price: 25 },
    { name: 'MASALA-MOR', price: 16 },
    { name: 'MOR-(SMALL)', price: 22 },
    { name: 'MOR-(LARGE)', price: 35 },
  ];

  // State to store quantity for each product
  const [quantities, setQuantities] = useState(Array(products.length).fill(0));

  // State for entered amount
  const [enteredAmount, setEnteredAmount] = useState(0);

  // State for shop name
  const [shopName, setShopName] = useState('');

  const handleQuantityChange = (index, value) => {
    const newQuantities = [...quantities];
    newQuantities[index] = value;
    setQuantities(newQuantities);
  };

  // Function to calculate total for each row
  const calculateTotal = (index) => {
    return quantities[index] * products[index].price;
  };

  // Function to calculate overall total
  const calculateOverallTotal = () => {
    return quantities.reduce((total, quantity, index) => {
      return total + quantity * products[index].price;
    }, 0);
  };

  // Function to handle amount input
  const handleAmountChange = (e) => {
    setEnteredAmount(parseInt(e.target.value, 10) || 0);
  };

  // Function to handle shop name input
  const handleShopNameChange = (e) => {
    setShopName(e.target.value);
  };

  // Function to calculate result (Overall Total - Entered Amount)
  const calculateResult = () => {
    return calculateOverallTotal() - enteredAmount;
  };

  // Function to handle form submission
  const handleSubmit = () => {
    // You can perform any action here on form submission
    console.log('Form submitted!');
    console.log('Shop Name:', shopName);
    console.log('Products:', products);
    console.log('Quantities:', quantities);
    console.log('Entered Amount:', enteredAmount);
    console.log('Overall Total:', calculateOverallTotal());
    console.log('Result:', calculateResult());
  
    // Reset quantities, enteredAmount, and shopName to their initial values
    setQuantities(Array(products.length).fill(0));
    setEnteredAmount(0);
    setShopName('');
  };

  return (
    <div className="flex flex-col items-center">
      {/* Shop Name Textbox */}
      <div className="mt-4">
        
        <input
          type="text"
          placeholder="Enter shop name"
          value={shopName}
          onChange={handleShopNameChange}
          className="w-48 px-2 py-1 border rounded"
        />
      </div>

     
      <table className="min-w-full bg-white rounded-md overflow-hidden">
       <thead className="bg-blue-500 text-white">
          <tr>
            <th className="text-left py-2 px-4">Name</th>
            <th className="text-right py-2 px-4">Price</th>
            <th className="text-right py-2 px-4">Qty</th>
            <th className="text-right py-2 px-4">Total</th>
          </tr>
        </thead>
        <tbody>
  {products.map((product, index) => (
    <tr key={index} className="border-b">
      <td className="py-2 px-4 font-bold">{product.name}</td>
      <td className="py-2 px-4 text-right">{product.price}</td>
      <td className="py-2 px-4 text-right">
        <input
          type="number"
          min="0"
          value={quantities[index]}
          onChange={(e) => handleQuantityChange(index, parseInt(e.target.value, 10) || 0)}
          className="w-16 px-2 py-1 border rounded"
        />
      </td>
      <td className="py-2 px-4 text-right">{calculateTotal(index)}</td>
    </tr>
  ))}
</tbody>
        <tfoot className="bg-blue-500 text-white">
          <tr>
            <td colSpan="3" className="py-2 px-4 text-right font-bold">
              Overall Total:
            </td>
            <td className="py-2 px-4 text-right font-bold">{calculateOverallTotal()}</td>
          </tr>
        </tfoot>
      </table>


      {/* Enter Amount and Result Boxes */}
      <div className="flex flex-col items-center mt-4">
        <label className="block mb-2 text-blue-600">Enter Amount:</label>
        <div className="flex items-center mb-2">
          <input
            type="number"
            min="0"
            value={enteredAmount}
            onChange={handleAmountChange}
            className="w-16 px-2 py-1 border rounded mr-2"
          />
          <label className="text-blue-600">Result:</label>
          <input
            type="text"
            value={calculateResult()}
            readOnly
            className="w-16 px-2 py-1 border rounded bg-gray-200 ml-2"
          />
        </div>

        {/* Submit Button */}
         <div className="flex flex-col items-center">
      {/* Your existing component code here */}

      {/* Submit Button */}
      <div className="flex justify-end mt-4">
  <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
    REFRESH
  </button>
</div>
    </div>
      </div>
    </div>
  );
}

export default App;
