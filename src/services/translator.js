export async function translateText(text, targetLanguage) {
  if (targetLanguage === "en") {
    return text;
  }

  try {
    const response = await fetch("YOUR_TRANSLATION_API_URL", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: text,
        targetLanguage: targetLanguage,
      }),
    });

    if (!response.ok) {
      throw new Error("Translation failed");
    }

    const data = await response.json();

    return data.translatedText;
  } catch (error) {
    console.error("Translation error:", error);
    return text;
  }
}