// src/services/cwaService.js
const fetch = require('node-fetch');
require('dotenv').config();

const API_BASE = "https://opendata.cwa.gov.tw/api/v1/rest/datastore";

/**
 * callCwaApi - 呼叫中央氣象署 API
 * @param {string} apiPath - 例如：F-C0032-001
 * @param {object} params - API 查詢參數
 */
async function callCwaApi(apiPath, params = {}) {
    const apiKey = process.env.CWA_API_KEY;

    const query = new URLSearchParams({
        Authorization: apiKey,
        ...params
    });

    const url = `${API_BASE}/${apiPath}?${query.toString()}`;

    const res = await fetch(url);
    if (!res.ok) {
        throw new Error(`CWA API Error: ${res.status}`);
    }

    return res.json();
}

module.exports = { callCwaApi };
