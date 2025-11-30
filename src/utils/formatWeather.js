module.exports = {
  current(raw) {
    const w = raw.records.location[0];
    return {
      city: w.locationName,
      temp: w.weatherElement[4].time[0].parameter.parameterName,
      rain: w.weatherElement[1].time[0].parameter.parameterName,
      desc: w.weatherElement[0].time[0].parameter.parameterName
    };
  },
  week(raw) { return raw; },
  hourly(raw) { return raw; }
};
