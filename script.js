// Load Chart.js
const script = document.createElement('script');
script.src = "https://cdn.jsdelivr.net/npm/chart.js";
document.head.appendChild(script);

script.onload = () => {
    // System Resource Usage Chart
    const ctx1 = document.getElementById('resourceUsageChart').getContext('2d');
    const resourceUsageChart = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['ThreatLocker', 'App Locker'],
            datasets: [{
                label: 'Resource Usage (%)',
                data: [5, 15], // ThreatLocker and App Locker resource usage
                backgroundColor: ['#007FA6', '#9CACC0']
            }]
        },
        options: {
            indexAxis: 'y',
            scales: {
                x: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Resource Usage (%)'
                    }
                }
            }
        }
    });

    // Customer Satisfaction Chart
    const ctx2 = document.getElementById('customerSatisfactionChart').getContext('2d');
    const customerSatisfactionChart = new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['ThreatLocker', 'App Locker'],
            datasets: [{
                label: 'Customer Satisfaction',
                data: [4.8, 3.6], // Satisfaction scores
                backgroundColor: ['#007FA6', '#9CACC0']
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Satisfaction Score (out of 5)'
                    }
                }
            }
        }
    });
};
