import axios from "axios"

export const askAi = async (messages) => {
  try {
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      throw new Error("Messages array is empty.")
    }

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "google/gemini-2.0-flash-exp:free", // ✅ Free!
        messages: messages
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`, // ✅ Key add!
          'HTTP-Referer': 'http://localhost:5173',
          'X-Title': 'InterviewIQ'
        }
      }
    )

    const content = response?.data?.choices?.[0]?.message?.content

    if (!content || !content.trim()) {
      throw new Error("AI returned empty response.")
    }

    return content

  } catch (error) {
    console.error("OpenRouter Error:", error.response?.data || error.message)
    throw new Error("OpenRouter API Error")
  }
}