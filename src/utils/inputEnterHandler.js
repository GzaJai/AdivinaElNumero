export const inputHandler = (run)=>{
  const input = document.getElementById("player-number");
  input.addEventListener("keydown", function (e) {
      if (e.code === "Enter") {
          run(e);
      }
  });
}