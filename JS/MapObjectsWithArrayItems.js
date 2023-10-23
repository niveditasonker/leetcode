const videoData = [
    {
        "startTime": "2023-10-18T06:22:00.000",
        "endTime": "2023-10-18T06:31:54.000",
        "video": {
            // Video details
        }
    },
    {
      "startTime": "2023-10-18T19:14:40.000",
      "endTime": "2023-10-18T19:24:36.000",
      "video": {
        // Video details
      }
    },
    {
      "startTime": "2023-10-18T19:24:36.000",
      "endTime": "2023-10-18T19:35:29.000",
      "video": {
        // Video details
      }
    },
    {
      "startTime": "2023-10-18T19:35:29.000",
      "endTime": "2023-10-18T19:50:16.000",
      "video": {
        // Video details
      }
    }
  ];
  
  const timeArray = [
    '12 AM', '1 AM', '2 AM', '3 AM', '4 AM', '5 AM', '6 AM', '7 AM',
    '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM',
    '4 PM', '5 PM', '6 PM', '7 PM', '8 PM', '9 PM', '10 PM', '11 PM'
  ];
  
  // Initialize an empty result array
  const result = new Array(24);
  
  // Create a mapping of start and end times to their respective videos
  videoData.forEach((video) => {
    const startTime = new Date(video.startTime);
    const endTime = new Date(video.endTime);
  
    // Find the index of the start time in the timeArray
    const startIndex = startTime.getHours();
  
    // Find the index of the end time in the timeArray
    const endIndex = endTime.getHours();
    console.log(startIndex, endIndex);
  
    // Associate the video with the corresponding time slots
    for (let i = startIndex; i <= endIndex; i++) {
      if (!result[i]) {
        result[i] = [];
      }
      result[i].push(video.video);
    }
  });
  
  // Now, the 'result' array contains the mapping of time slots to associated videos.
  console.log(result);
 