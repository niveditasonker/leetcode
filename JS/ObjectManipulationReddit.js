const data = {
    "2023-10-19": {
      web: { pageViews: 15000, uniqueVisitors: 8000 },
      iOS: { pageViews: 12000, uniqueVisitors: 6000 },
      Android: { pageViews: 10000, uniqueVisitors: 5000 },
    },
    "2023-10-20": {
      web: { pageViews: 16000, uniqueVisitors: 8500 },
      iOS: { pageViews: 13000, uniqueVisitors: 6200 },
      Android: { pageViews: 11000, uniqueVisitors: 5300 },
    },
    // ... more dates and data ...
  };
  
  // Step 1: Get the most recent 7 dates
  const recentDates = Object.keys(data).sort().slice(-7);
  
  // Step 2: Calculate total page views for those dates
  const totalPageViews = recentDates.reduce((total, date) => {
    const platforms = Object.keys(data[date]);
    const datePageViews = platforms.reduce((platformTotal, platform) => {
      return platformTotal + data[date][platform].pageViews;
    }, 0);
    return total + datePageViews;
  }, 0);

// Initialize the totalPageViews to 0
let totalPageViews2 = 0;

// Iterate through the recent dates
for (const date of recentDates) {
  // Initialize the datePageViews for the current date to 0
  let datePageViews = 0;
  
  // Iterate through platforms for the current date
  for (const platform of Object.values(data[date])) {
    // Add the pageViews of the current platform to datePageViews
    datePageViews += platform.pageViews;
  }
  
  // Add datePageViews to the totalPageViews
  totalPageViews2 += datePageViews;
}
console.log("Total Page Views for the Most Recent 7 Dates:", totalPageViews2);

// Now, totalPageViews contains the total page views for the recent 7 dates

  
  console.log("Total Page Views for the Most Recent 7 Dates:", totalPageViews);
  
  // Step 3: Find the platforms with the most and least page views for those dates
  const platformPageViews = {};
  
  recentDates.forEach((date) => {
    Object.keys(data[date]).forEach((platform) => {
      if (!platformPageViews[platform]) {
        platformPageViews[platform] = 0;
      }
      platformPageViews[platform] += data[date][platform].pageViews;
    });
  });
  
  const mostPageViewsPlatform = Object.keys(platformPageViews).reduce((a, b) =>
    platformPageViews[a] > platformPageViews[b] ? a : b
  );
  const leastPageViewsPlatform = Object.keys(platformPageViews).reduce((a, b) =>
    platformPageViews[a] < platformPageViews[b] ? a : b
  );
  
  console.log("Platform with Most Page Views:", mostPageViewsPlatform);
  console.log("Platform with Least Page Views:", leastPageViewsPlatform);
  