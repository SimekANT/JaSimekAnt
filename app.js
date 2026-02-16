fetch("profile.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("Nelze načíst profile.json");
    }
    return response.json();
  })
  .then(data => {

    /* ===== JMÉNO ===== */
    const nameEl = document.querySelector("#name");
    if (nameEl) {
      nameEl.textContent = data.name;
    }

    /* ===== SKILLS ===== */
    const skillsList = document.querySelector("#skills");
    if (skillsList && Array.isArray(data.skills)) {
      skillsList.innerHTML = "";

      data.skills.forEach(skill => {
        const li = document.createElement("li");
        li.innerHTML = `<span class="prompt">&gt;</span> ${skill}`;
        skillsList.appendChild(li);
      });
    }

    /* ===== INTERESTS ===== */
    const interestsContainer = document.querySelector("#interests-content");
    if (interestsContainer && Array.isArray(data.interests)) {
      interestsContainer.innerHTML = "";

      data.interests.forEach(interest => {
        const p = document.createElement("p");
        p.innerHTML = `<span class="prompt">$</span> ${interest}`;
        interestsContainer.appendChild(p);
      });
    }

  })
  .catch(error => {
    console.error(" Chyba aplikace:", error);
  });
