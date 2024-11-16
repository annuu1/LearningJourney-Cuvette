document.addEventListener('DOMContentLoaded', function() {
    const holdingsData = [
      { symbol: 'AAPL', company: 'Apple Inc.', quantity: 100, avgPrice: 150.00, currentPrice: 175.00 },
      // Add more holdings data here...
    ];
  
    const assetAllocationData = [
      { name: 'Stocks', data: [44] },
      { name: 'Bonds', data: [35] },
      { name: 'Mutual Funds', data: [20] },
      { name: 'Gold', data: [10] }
    ];
  
    const portfolioPerformanceData = [
      { x: 'Jan 2023', y: 10000 },
      { x: 'Feb 2023', y: 10500 },
      // Add more performance data...
    ];
  
    renderHoldingsTable(holdingsData);
    renderAssetAllocationChart(assetAllocationData);
    renderPortfolioPerformanceChart(portfolioPerformanceData);
  });
  
  function renderHoldingsTable(data) {
    const table = document.querySelector('.holdings table');
    table.innerHTML = `
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Company</th>
          <th>Quantity</th>
          <th>Avg. Price</th>
          <th>Current Price</th>
          <th>Value</th>
          <th>P/L</th>
        </tr>
   </thead>
      <tbody>
        ${data.map(holding => `
          <tr>
            <td>${holding.symbol}</td>
            <td>${holding.company}</td>
            <td>${holding.quantity}</td>
            <td>₹${holding.avgPrice}</td>
            <td>₹${holding.currentPrice}</td>
            <td>₹${holding.quantity * holding.currentPrice}</td>
            <td class="${holding.currentPrice > holding.avgPrice ? 'profit' : 'loss'}">₹${holding.quantity * (holding.currentPrice - holding.avgPrice)}</td>
          </tr>
        `).join('')}
      </tbody>
    `;
  }
  
  function renderAssetAllocationChart(data) {
    const chart = new ApexCharts(document.getElementById('assetAllocationChart'), {
      chart: {
        type: 'donut'
      },
      series: data.map(item => item.data[0]),
      labels: data.map(item => item.name),
      colors: ['#007bff', '#ff69b4', '#32cd32', '#ffd700'],
      plotOptions: {
        pie: {
          donut: {
            size: '60%'
          }
        }
      }
    });
    chart.render();
  }
  
  function renderPortfolioPerformanceChart(data) {
    const chart = new ApexCharts(document.getElementById('portfolioPerformanceChart'), {
      chart: {
        type: 'line'
      },
      series: [{
        name: 'Portfolio Value',
        data: data.map(item => item.y)
      }],
      xaxis: {
        categories: data.map(item => item.x)
      },
      yaxis: {
        title: {
          text: 'Portfolio Value (₹)'
        }
      }
    });
    chart.render();
  }