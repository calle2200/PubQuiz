$(document).ready(function () {

    // 🔹 Ladda sparade namn & poäng
    $(".team-row").each(function () {
        const row = $(this);
        const teamKey = row.data("team");

        // Lagnamn
        const savedName = sessionStorage.getItem("team_" + teamKey);
        if (savedName) {
            row.find(".team-name").text(savedName).removeClass("hidden");
            row.find(".team-input, .save-team").addClass("hidden");
        }

        // Poäng
        const savedPoints = sessionStorage.getItem("points_" + teamKey);
        row.find(".team-points").text(savedPoints ? savedPoints : 0);
    });

    // 🔹 Spara lagnamn
    $(".save-team").on("click", function () {
        const row = $(this).closest(".team-row");
        const input = row.find(".team-input");
        const nameSpan = row.find(".team-name");
        const teamKey = row.data("team");

        const teamName = input.val().trim();

        if (teamName !== "") {
            sessionStorage.setItem("team_" + teamKey, teamName);
            nameSpan.text(teamName).removeClass("hidden");
            input.addClass("hidden");
            $(this).addClass("hidden");
        }
    });

    // 🔹 Plus-knapp
    $(".plus-point").on("click", function () {
        const row = $(this).closest(".team-row");
        const teamKey = row.data("team");
        const pointsSpan = row.find(".team-points");

        let points = parseInt(pointsSpan.text(), 10);
        points++;

        pointsSpan.text(points);
        sessionStorage.setItem("points_" + teamKey, points);
    });

    // 🔹 Minus-knapp
    $(".minus-point").on("click", function () {
        const row = $(this).closest(".team-row");
        const teamKey = row.data("team");
        const pointsSpan = row.find(".team-points");

        let points = parseInt(pointsSpan.text(), 10);
        points--;

        pointsSpan.text(points);
        sessionStorage.setItem("points_" + teamKey, points);
    });

});


$(document).ready(function () {

    // 🔹 Funktion för att ladda todos från sessionStorage
    function loadTodos() {
        const todos = JSON.parse(sessionStorage.getItem("todos")) || [];
        $("#todo-list").empty(); // töm listan först

        todos.forEach(text => {
            const todoItem = $("<span>").addClass("todo-item").text(text);
            $("#todo-list").append(todoItem);
        });
    }

    // 🔹 Initial laddning
    loadTodos();

    // 🔹 Lägg till ny todo
    function addTodo() {
        const input = $("#todo-input");
        const text = input.val().trim();
        if (text === "") return;

        // Lägg till på sidan
        const todoItem = $("<span>").addClass("todo-item").text(text);
        $("#todo-list").append(todoItem);

        // Spara i sessionStorage
        const todos = JSON.parse(sessionStorage.getItem("todos")) || [];
        todos.push(text);
        sessionStorage.setItem("todos", JSON.stringify(todos));

        // Töm input
        input.val("");
    }

    $("#add-todo").on("click", addTodo);

    // Enter-tangent stöd
    $("#todo-input").on("keypress", function (e) {
        if (e.key === "Enter") addTodo();
    });

});
