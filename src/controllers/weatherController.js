const cwaService = require('../services/cwaService');
const locationService = require('../services/locationService');
const formatWeather = require('../utils/formatWeather');

module.exports = {
  async getWeatherByCity(req, res) {
    try {
      const { city } = req.query;
      const raw = await cwaService.getCurrentWeather(city);
      res.json(formatWeather.current(raw));
    } catch (e) { res.status(500).json({ error: e.message }); }
  },
  async getWeatherByGeo(req, res) {
    try {
      const { lat, lon } = req.query;
      const city = locationService.getNearestCity(lat, lon);
      const raw = await cwaService.getCurrentWeather(city);
      res.json(formatWeather.current(raw));
    } catch (e) { res.status(500).json({ error: e.message }); }
  },
  async getWeekForecast(req, res) {
    try {
      const { city } = req.query;
      const raw = await cwaService.getWeekForecast(city);
      res.json(formatWeather.week(raw));
    } catch (e) { res.status(500).json({ error: e.message }); }
  },
  async getHourlyForecast(req, res) {
    try {
      const { city } = req.query;
      const raw = await cwaService.getHourlyForecast(city);
      res.json(formatWeather.hourly(raw));
    } catch (e) { res.status(500).json({ error: e.message }); }
  }
};
