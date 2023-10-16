document.addEventListener("DOMContentLoaded", function () {
  const getAdviceButton = document.getElementById("getAdvice");
  const adviceIdResult = document.getElementById("id");
  const adviceResult = document.getElementById("advice");

  function fetchAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(({ slip }) => {
        const { id, advice } = slip;

        adviceIdResult.textContent = `ADVICE #${id}`;
        adviceResult.textContent = `“${advice}”`;
      })
      .catch((error) => {
        adviceResult.textContent = "Error: " + error;
      });
  }

  fetchAdvice();

  getAdviceButton.addEventListener("click", function () {
    fetchAdvice();
  });
});
