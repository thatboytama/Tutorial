const username = document.querySelector("#username");
const password = document.querySelector("#password");
const form = document.querySelector("#login");

// window.localStorage.setItem("victor", JSON.stringify({ username: "james" }));

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const res = await fetch("/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
  });
  if (res.ok) {
    window.location.href = "/index.html";
  } else {
    console.log(await res.json());
  }
});
