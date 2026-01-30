export async function getTopicTranslation(text: string): Promise<string> {
  const API_KEY = "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";
  
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
        "HTTP-Referer": "http://localhost:19006",
        "X-Title": "English Topics App"
      },
      body: JSON.stringify({
        model: "google/gemma-2-9b-it",
        messages: [
          {
            role: "system",
            content: "Ти професійний перекладач. Перекладай тексти з англійської на українську максимально точно, зберігаючи академічний стиль."
          },
          {
            role: "user",
            content: `Переклади наступний текст з англійської на українську. Збережи всі терміни та структуру:

${text}

Переклад на українську:`
          }
        ],
        temperature: 0.3,
        max_tokens: 1000
      }),
    });

    console.log("Request sent, status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Помилка API:", response.status, errorText);
      throw new Error(`API error ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    console.log("Response received");

    if (!data.choices || !data.choices[0]) {
      throw new Error("No response received");
    }

    const translation = data.choices[0].message.content.trim();
    console.log("Translation successful");
    
    return translation;

  } catch (error: any) {
    console.error("Critical error:", error.message);
    
    if (error.message.includes("Failed to fetch") || error.message.includes("NetworkError")) {
      return `Помилка мережі. Перевірте підключення до інтернету.
      
              Проблема: Не вдалося підключитися до AI сервісу.
              Рішення: Переконайтесь, що є інтернет і спробуйте знову.`;
    }
    
    return `AI тимчасово недоступний. 
            Помилка: ${error.message || "Невідома помилка"}.
            Спробуйте пізніше.`;
  }
}