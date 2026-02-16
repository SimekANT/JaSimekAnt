document.addEventListener("DOMContentLoaded", () => {
  fetch("profile.json")
    .then(response => {
      if (!response.ok) throw new Error("Nelze načíst profile.json");
      return response.json();
    })
    .then(data => {

      // Jméno
      const nameEl = document.querySelector("#name");
      if (nameEl) nameEl.textContent = data.name;

      // Skills
      const skillsList = document.querySelector("#skills");
      if (skillsList && Array.isArray(data.skills)) {
        skillsList.innerHTML = "";
        data.skills.forEach(skill => {
          const li = document.createElement("li");
          li.innerHTML = `<span class="prompt">&gt;</span> ${skill}`;
          skillsList.appendChild(li);
        });
      }

      // Interests
      const interestsContainer = document.querySelector("#interests-content");
      if (interestsContainer && Array.isArray(data.interests)) {
        interestsContainer.innerHTML = "";
        data.interests.forEach(interest => {
          const p = document.createElement("p");
          p.innerHTML = `<span class="prompt">$</span> ${interest}`;
          interestsContainer.appendChild(p);
        });
      }

      // Projects
      const projectsContainer = document.querySelector("#projects-content");
      if (projectsContainer && Array.isArray(data.projects)) {
        projectsContainer.innerHTML = "";
        data.projects.forEach(project => {
          const div = document.createElement("div");
          div.classList.add("project");
          div.innerHTML = `
            <p><span class="prompt">[PROJECT]</span> <strong>${project.title}</strong></p>
            <p>${project.description}</p>
            <p>Link: <a href="${project.link}" target="_blank">${project.link}</a></p>
          `;
          projectsContainer.appendChild(div);
        });
      }

    })
    .catch(error => {
      console.error("❌ Chyba aplikace:", error);
    });
});
