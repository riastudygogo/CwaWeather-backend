// src/services/fetchWeather.js
const { callCwaApi } = require('./cwaService');

/**
 * 取得某城市的天氣資料（F-C0032-001）
 */
module.exports = async function fetchWeather(city) {
    // 呼叫中央氣象署 API
    const data = await callCwaApi("F-C0032-001");

    const locations = data.records.location;
    const result = locations.find(l => l.locationName === city);

    return result || { message: 'City not found' };
};
