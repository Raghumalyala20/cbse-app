# 🤖 AI Chatbot Setup Instructions

Your chatbot now has **AI superpowers**! It uses Google's Gemini API (free tier) with automatic fallback to keyword search.

## Current Status

✅ **Working now**: Keyword search (offline, always works)  
⚙️ **Optional upgrade**: AI-powered responses (smarter, needs API key)

## How to Enable AI (Optional - Free!)

### Step 1: Get Free API Key

1. Go to **[Google AI Studio](https://aistudio.google.com/app/apikey)**
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy the key (starts with `AIza...`)

### Step 2: Add API Key to Your App

1. In your project folder, create a file named `.env.local`
2. Add this line:
   ```
   GEMINI_API_KEY=your_api_key_here
   ```
3. Replace `your_api_key_here` with the key you copied

### Step 3: Restart Server

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

## How It Works

### With API Key (AI Mode)
- 🧠 Uses Google Gemini AI
- ✨ Smarter, understands context
- 💬 Can explain topics not in syllabus
- 📊 Free tier: 1,500 requests/day
- Shows: **"✨ Powered by AI"**

### Without API Key (Offline Mode)
- 🔍 Uses keyword search
- 💾 Works offline
- 📚 Searches your syllabus content
- ♾️ Unlimited requests
- Shows: **"Using offline search"**

### Automatic Fallback
If API fails (quota exceeded, network error, etc.), it automatically switches to keyword search!

## Testing

Ask the chatbot:
- "What is perimeter?" (AI will explain even though it's not in Class 9)
- "Explain Newton's laws" (Should find Force chapter)
- "What is Heron's formula?" (Should find Math Chapter 10)

## Free Tier Limits

- **15 requests per minute**
- **1,500 requests per day**
- Perfect for personal use or small classes!

## Troubleshooting

**Chatbot shows "Using offline search"?**
- Check if `.env.local` file exists
- Check if API key is correct
- Restart the dev server

**Getting errors?**
- Make sure `.env.local` is in the root folder (same level as `package.json`)
- Don't commit `.env.local` to GitHub (it's in `.gitignore`)

## Cost

**Completely FREE** for up to 1,500 requests/day! 🎉

No credit card required for the free tier.
