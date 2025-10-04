// 1. शुरुआती काउंट सेट करें
let count = 0;
const targetCount = 108;

// 2. HTML एलिमेंट्स को पहचानें
const counterDisplay = document.getElementById('counterDisplay');
const clickButton = document.getElementById('clickButton');

// 3. आवाज़ (Audio) तैयार करें
// सुनिश्चित करें कि success.mp3 फ़ाइल आपके प्रोजेक्ट फ़ोल्डर में है।
const successAudio = new Audio('success.mp3'); 

// 4. बटन क्लिक हैंडलर
clickButton.addEventListener('click', () => {
    // अगर काउंट 108 से कम है, तभी बढ़ाएँ
    if (count < targetCount) {
        count++; // काउंट को एक से बढ़ाएँ
        counterDisplay.textContent = count; // स्क्रीन पर अपडेट करें
    }

    // 5. 108 की जाँच करें और आवाज़ चलाएँ
    if (count === targetCount) {
        // यह सुनिश्चित करने के लिए कि आवाज़ केवल एक बार चले
        if (successAudio.paused) { 
            successAudio.play(); // आवाज़ चलाओ!
            alert("काउंट 108 पर पहुँच गया है! 🎉 \n\nDeveloper: Spark aka Ravi"); 
            clickButton.disabled = true; // बटन को डिसएबल कर दें ताकि ज़्यादा क्लिक न हों
            clickButton.textContent = "लक्ष्य पूरा!";
        }
    }
});
