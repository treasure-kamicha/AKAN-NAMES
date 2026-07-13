document.getElementById("akanForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const birthdate = document.getElementById("birthdate").value;
    const gender = document.querySelector('input[name="gender"]:checked');

    if (!birthdate || !gender) {
        alert("Please select your birth date and gender.");
        return;
    }

    const date = new Date(birthdate);
    const dayIndex = date.getDay();

    const maleNames = [
        "Kwasi", "Kwadwo", "Kwabena", "Kwaku",
        "Yaw", "Kofi", "Kwame"
    ];

    const femaleNames = [
        "Akosua", "Adwoa", "Abenaa", "Akua",
        "Yaa", "Afua", "Ama"
    ];

    const days = [
        "Sunday", "Monday", "Tuesday",
        "Wednesday", "Thursday", "Friday", "Saturday"
    ];

    const akanName = gender.value === "male"
        ? maleNames[dayIndex]
        : femaleNames[dayIndex];

    document.getElementById("result").innerHTML =
        `You were born on <strong>${days[dayIndex]}</strong>.<br>Your Akan name is <strong>${akanName}</strong>.`;
});