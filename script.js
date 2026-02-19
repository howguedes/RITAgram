const likeBtns = document.querySelectorAll(".likeBtn");

likeBtns.forEach(button => {
  let liked = false;

  button.addEventListener("click", () => {
    liked = !liked;
    button.textContent = liked ? "❤️" : "🤍";
  });
});
