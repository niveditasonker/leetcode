/*
Description¶
Design and implement a method which returns Top K cities for a given weather attribute.

attributes:

pressure, humidity, temp
*/

const weatherData = [
    {'city': 'Seattle', 'pressure': 1000, 'humidity': 81, temp: 65},
    {'city': 'Boston', 'pressure': 888, 'humidity': 71, temp: 45},
    {'city': 'Austin', 'pressure': 745, 'humidity': 61, temp: 88},
    {'city': 'San Francisco', 'pressure': 1025, 'humidity': 51, temp: 75},
    {'city': 'Chicago', 'pressure': 985, 'humidity': 91, temp: 35},
    {'city': 'Toronto', 'pressure': 123, 'humidity': 75, temp: 40},
    
    ]
    
    // generic helper function sort the weatherData
    
    function getTopKCities(weather, attribute, k){
        
        const sortedData = weather.sort((a,b) => b[attribute]-a[attribute]).slice(0,k);
        
        
        return sortedData;
        
    }
    
    // cities with max pressure: San Francisco, Seattle, Chicago
    
    
    const isExpected = (weatherData, attribute, k, expectedArr) => {
        
        const getCities = getTopKCities(weatherData, 'pressure', 3);
        const ans = false;
    
        for (let i=0; i<getCities.length; i++){
            if (getCities[i]['city'] !== expectedArr[i]){
                ans =  false;
            }
        }
        ans =  true;
        
        return ans ? 'Pass' : 'Fail';
    }
    
    console.log('returns true if getCities is equal to expectedAns', isExpected(weatherData, 'pressure', 3, ['San Francisco', 'Seattle', 'Chicago'] ));
    console.log('returns true if getCities is equal to expectedAns', isExpected(weatherData, 'humidity', 2, ['San Francisco', 'Seattle', 'Chicago']));
    console.log('returns true if getCities is equal to expectedAns', isExpected(weatherData, 'temp', 4, ['San Francisco', 'Seattle', 'Chicago']));
    

    console.assert()
    
    // to get top 2 cities with temp