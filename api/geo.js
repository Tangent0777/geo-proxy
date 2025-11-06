export default async function handler(req, res) {
  try {
    const geoRes = await fetch("https://ipwho.org/json/");
    const data = await geoRes.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("Geo lookup failed:", err);
    res.status(500).json({ error: "Geo lookup failed" });
  }
}
