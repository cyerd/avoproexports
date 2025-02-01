import { franc } from "franc-min";
import langs from "langs";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ error: "Text is required" });
  }

  try {
    const langCode = franc(text); // Detect language code
    if (langCode === "und") {
      return res.status(400).json({ error: "Could not detect language" });
    }

    const language = langs.where("3", langCode); // Get full language name
    res.status(200).json({ language: language.name, isoCode: langCode });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Detection failed" });
  }
}
