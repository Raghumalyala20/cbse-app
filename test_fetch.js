const apiKey = "AIzaSyBCqWtMsoiP3F31apJfU3c5VjNONcOBB7E";

async function testFetch() {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const data = {
        contents: [{
            parts: [{ text: "Hello, world!" }]
        }]
    };

    try {
        console.log("Sending request to:", url);
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            console.error(`Error: ${response.status} ${response.statusText}`);
            const errorText = await response.text();
            console.error("Error details:", errorText);
            return;
        }

        const json = await response.json();
        console.log("Success!");
        console.log(JSON.stringify(json, null, 2));
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

testFetch();
