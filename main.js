document.getElementById('orderForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  const order = Object.fromEntries(formData.entries());
  
  // Format the order message
  const ORDER_MESSAGE = `
🛒 New Order Received!

📦 Product: ${order.productName}
🔢 Quantity: ${order.quantity}
👤 Customer: ${order.customerName}
📞 Contact: ${order.contact}
📍 Delivery Address: ${order.address}
`;
  
  // Encode message for URL
  const encodedMessage = encodeURIComponent(ORDER_MESSAGE);
  
  // Telegram API URL
  const TELEGRAM_URL = `https://api.telegram.org/bot7757798650:AAGyQbbIcFMHH8OkaI-EXMqx18DXWclNfjU/sendMessage?chat_id=5665031779&text=${encodedMessage}`;
  
  try {
    const response = await fetch(TELEGRAM_URL);
    const data = await response.json();
    
    if (data.ok) {
      alert('Order sent successfully!');
      e.target.reset();
    } else {
      alert('Failed to send order. Try again.');
    }
  } catch (err) {
    alert('Error sending order.');
    console.error(err);
  }
});
