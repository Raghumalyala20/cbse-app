# How to Add YouTube Videos to Your App

Since I cannot verify which YouTube videos work, here's how **you** can add them:

## Step 1: Find a Video on YouTube

1. Go to YouTube and search for educational content (e.g., "Class 9 Number Systems CBSE")
2. Find a video you like
3. Copy the URL from the address bar

Example URL: `https://www.youtube.com/watch?v=ABC123XYZ`

## Step 2: Extract the Video ID

The video ID is the part after `watch?v=`

From `https://www.youtube.com/watch?v=ABC123XYZ`, the ID is: **ABC123XYZ**

## Step 3: Add to syllabus.ts

Open `data/syllabus.ts` and find the concept you want to add the video to.

Add the video to the `videos` array:

```typescript
videos: [
  { 
    id: "v1", 
    title: "Number Systems Explained", 
    url: "ABC123XYZ",  // ← Your video ID here
    duration: "25m",   // Optional
    channel: "Physics Wallah"  // Optional
  }
]
```

## Step 4: Test

1. Save the file
2. Refresh your browser (`Ctrl + Shift + R`)
3. Navigate to the concept
4. Click the video button
5. It will open YouTube in a new tab

## Recommended Channels for CBSE Class 9

- **Physics Wallah** - Comprehensive coverage
- **Vedantu** - Clear explanations
- **Magnet Brains** - Step-by-step teaching
- **Khan Academy** - Conceptual understanding
- **Unacademy** - Exam-focused

## Example: Complete Concept with Video

```typescript
{
  id: "intro-num-sys",
  title: "Introduction to Number Systems",
  videos: [
    { 
      id: "v1", 
      title: "Number Systems Full Chapter", 
      url: "YOUR_VIDEO_ID_HERE",
      duration: "1h 30m",
      channel: "Physics Wallah"
    }
  ],
  explanation: "Your explanation here...",
  // ... rest of content
}
```

## Note

The app will work perfectly once you add real video IDs. The textual content (explanations, examples, practice) is already there and working!
