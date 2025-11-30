module.exports = {
  async safeFetch(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error('CWA API error');
    return await res.json();
  }
};
