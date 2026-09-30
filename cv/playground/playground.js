(() => {
  "use strict";

  const storageKey = "pkm.playground.v1";
  const corners = ["lab", "map", "music", "postcard"];
  const palettes = {
    ember: { background: "#f2e5d2", ink: "#382820", accent: "#bb5b32" },
    ocean: { background: "#e0ebee", ink: "#203e4b", accent: "#286a82" },
    moss: { background: "#e6eadb", ink: "#344638", accent: "#57734a" },
  };
  const sessions = [
    { id: "mina", name: "Mina", day: "Tuesday", start: 1110, end: 1155 },
    { id: "kofi", name: "Kofi", day: "Thursday", start: 1095, end: 1140 },
    { id: "lina", name: "Lina", day: "Thursday", start: 1110, end: 1140 },
    { id: "eli", name: "Eli", day: "Thursday", start: 1140, end: 1185 },
    { id: "ayo", name: "Ayo", day: "Thursday", start: 1110, end: 1155 },
    { id: "noor", name: "Noor", day: "Friday", start: 1110, end: 1155 },
    { id: "theo", name: "Theo", day: "Thursday", start: 1050, end: 1095 },
    { id: "ama", name: "Ama", day: "Thursday", start: 1125, end: 1170 },
  ];
  const $ = (id) => document.getElementById(id);
  let state = { completed: false, explored: [], palette: "ember" };
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    if (saved && typeof saved === "object") {
      state.completed = saved.completed === true;
      state.explored = Array.isArray(saved.explored)
        ? [...new Set(saved.explored.filter((corner) => corners.includes(corner)))] : [];
      if (Object.hasOwn(palettes, saved.palette)) state.palette = saved.palette;
    }
  } catch { /* Exploring still works when local storage is unavailable. */ }

  const filters = { day: false, window: false, duration: false };
  const openers = new WeakMap();
  let currentDialog = null;
  let gameWon = state.completed;
  let exporting = false;
  const downloadUrls = new Set();

  function save() {
    try { localStorage.setItem(storageKey, JSON.stringify(state)); }
    catch { /* Names and export images never enter storage. */ }
  }

  function renderProgress() {
    const progress = $("room-progress");
    if (progress) progress.textContent = `${state.explored.length} of 4 corners explored`;
    document.querySelectorAll("[data-open]").forEach((button) => {
      button.dataset.explored = String(state.explored.includes(button.dataset.open));
    });
    if ($("lab-object-label")) $("lab-object-label").textContent = state.completed ? "Lab · completed" : "Clarity Lab";
  }

  function openCorner(corner, opener) {
    if (!corners.includes(corner)) return;
    const dialog = $(`${corner}-dialog`);
    if (!dialog || typeof dialog.showModal !== "function") return;
    // A link inside a dialog returns to that corner's room button on close.
    const parentDialog = opener?.closest("dialog");
    const returnTarget = parentDialog ? openers.get(parentDialog) : opener;
    if (currentDialog === dialog && dialog.open) return;
    if (currentDialog?.open) currentDialog.close();
    openers.set(dialog, returnTarget || document.activeElement);
    dialog.showModal();
    currentDialog = dialog;
    dialog.querySelector("[data-close]")?.focus({ preventScroll: true });
    dialog.scrollTop = 0;
    if (!state.explored.includes(corner)) {
      state.explored.push(corner);
      save();
      renderProgress();
    }
    if (corner === "music") renderMusic();
    if (corner === "postcard") renderPostcard();
  }

  document.querySelectorAll("dialog").forEach((dialog) => {
    dialog.addEventListener("keydown", (event) => {
      if (event.key !== "Tab" || !dialog.open) return;
      const controls = Array.from(dialog.querySelectorAll(
        'a[href], button, input, select, textarea, [tabindex]'
      )).filter((element) => !element.disabled && element.tabIndex >= 0
        && element.getClientRects().length && getComputedStyle(element).visibility !== "hidden");
      const first = controls[0];
      const last = controls.at(-1);
      if (!first) {
        event.preventDefault();
        dialog.focus();
      } else if (event.shiftKey && (document.activeElement === first || !controls.includes(document.activeElement))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && (document.activeElement === last || !controls.includes(document.activeElement))) {
        event.preventDefault();
        first.focus();
      }
    });
    dialog.addEventListener("close", () => {
      if (currentDialog === dialog) currentDialog = null;
      const opener = openers.get(dialog);
      // Closing one corner to open another should not steal the new focus.
      if (!document.querySelector("dialog[open]") && opener?.isConnected) opener.focus();
    });
    dialog.addEventListener("click", (event) => {
      if (event.target !== dialog || event.detail === 0) return;
      const bounds = dialog.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right
        || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    });
  });

  function time(minutes) {
    return `${String(Math.floor(minutes / 60)).padStart(2, "0")}:${String(minutes % 60).padStart(2, "0")}`;
  }

  function matches(session) {
    return (!filters.day || session.day === "Thursday")
      && (!filters.window || (session.start >= 1110 && session.end <= 1155))
      && (!filters.duration || session.end - session.start >= 45);
  }

  function renderSessions() {
    const list = $("sessions");
    if (!list) return;
    const visible = sessions.filter(matches);
    list.replaceChildren(...visible.map((session) => {
      const row = document.createElement("li");
      row.className = "session-row";
      const button = document.createElement("button");
      button.type = "button";
      button.dataset.session = session.id;
      const name = document.createElement("span");
      name.className = "session-name";
      name.textContent = session.name;
      const schedule = document.createElement("span");
      schedule.className = "session-time";
      schedule.textContent = `${session.day} · ${time(session.start)}–${time(session.end)} GMT`;
      const duration = document.createElement("span");
      duration.className = "session-duration";
      duration.textContent = `${session.end - session.start} min`;
      button.append(name, schedule, duration);
      row.append(button);
      return row;
    }));
    if ($("session-count")) $("session-count").textContent = `${visible.length} ${visible.length === 1 ? "session" : "sessions"} to explore`;
    document.querySelectorAll("[data-filter]").forEach((button) => {
      button.setAttribute("aria-pressed", String(filters[button.dataset.filter] === true));
    });
    if ($("lab-play")) $("lab-play").hidden = gameWon;
    if ($("lab-result")) $("lab-result").hidden = !gameWon;
  }

  function chooseSession(id) {
    const session = sessions.find((item) => item.id === id);
    if (!session || gameWon) return;
    const feedback = $("lab-feedback");
    let mismatch = "";
    if (session.day !== "Thursday") mismatch = `${session.name}'s session is on ${session.day}. You need Thursday. Try another slot.`;
    else if (session.start < 1110) mismatch = `${session.name}'s session starts before your 18:30 availability. Look for one entirely inside your window.`;
    else if (session.end > 1155) mismatch = `${session.name}'s session finishes after your 19:15 availability. Look for one entirely inside your window.`;
    else if (session.end - session.start < 45) mismatch = `${session.name}'s session fits your window, but lasts only ${session.end - session.start} minutes. You need at least 45 minutes.`;
    if (mismatch) {
      if (feedback) feedback.textContent = mismatch;
      return;
    }
    gameWon = true;
    state.completed = true;
    save();
    renderProgress();
    if (feedback) feedback.textContent = "Ayo fits all three: Thursday, inside your window, and 45 minutes. Tangle untangled.";
    renderSessions();
    renderPostcard();
    const result = $("lab-result");
    if (result) {
      result.setAttribute("tabindex", "-1");
      result.focus();
    }
  }

  function replay() {
    gameWon = false;
    Object.keys(filters).forEach((key) => { filters[key] = false; });
    if ($("lab-feedback")) $("lab-feedback").textContent = "Fresh page, same tangle. Your earned postcard stamp is safe.";
    renderSessions();
    $("sessions")?.querySelector("button")?.focus();
  }

  function renderMusic() {
    const savedMusic = $("saved-music");
    if (!savedMusic) return;
    savedMusic.hidden = true;
    try {
      const saved = JSON.parse(localStorage.getItem("pkm.spotify.snapshot.v2"));
      const track = saved?.snapshot?.track;
      if (!track || typeof track.name !== "string" || !track.name.trim()) return;
      $("saved-track-title").textContent = track.name;
      $("saved-track-artists").textContent = Array.isArray(track.artists)
        ? track.artists.filter((artist) => typeof artist === "string").join(", ") : "";
      const link = $("saved-track-link");
      link.hidden = true;
      link.removeAttribute("href");
      if (typeof track.url === "string") {
        try {
          const url = new URL(track.url);
          if (url.protocol === "https:" && url.hostname === "open.spotify.com" && !url.username && !url.password && !url.port) {
            link.href = url.href;
            link.rel = "noopener noreferrer";
            link.hidden = false;
          }
        } catch { /* A saved song is still readable without a valid link. */ }
      }
      savedMusic.hidden = false;
    } catch { /* This corner never requests new listening data. */ }
  }

  function postcardContent() {
    const name = ($("postcard-name")?.value || "").trim().slice(0, 28);
    const choice = $("postcard-message")?.value || "default";
    const messages = {
      default: state.completed ? "I made room for a clearer next step." : "A little curiosity goes a long way.",
      clarity: "I made room for a clearer next step.",
      curiosity: "A little curiosity goes a long way.",
      explore: "There is always another corner to explore.",
    };
    return {
      message: messages[choice] || messages.default,
      recipient: name ? `For ${name}` : "For the curious",
      stamp: state.completed ? "The calendar tangle · untangled" : "A postcard from PKM Playground",
    };
  }

  function renderPostcard() {
    const palette = palettes[state.palette];
    const content = postcardContent();
    $("card-background")?.setAttribute("fill", palette.background);
    $("card-accent")?.setAttribute("fill", palette.background);
    $("card-accent")?.setAttribute("stroke", palette.accent);
    $("card-line")?.setAttribute("stroke", palette.ink);
    $("card-footer-line")?.setAttribute("stroke", palette.ink);
    ["card-heading", "card-message", "card-recipient", "card-stamp", "card-site"].forEach((id) => {
      const element = $(id);
      if (!element) return;
      const key = id.replace("card-", "");
      if (id === "card-message") {
        let measure = null;
        try { measure = document.createElement("canvas").getContext("2d"); }
        catch { /* A printable preview does not depend on export support. */ }
        if (measure) measure.font = "76px Georgia, serif";
        const lines = textLines(content.message, measure, 1280);
        element.replaceChildren(...lines.map((line, index) => {
          const span = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
          span.setAttribute("x", "120");
          span.setAttribute("y", String(420 + index * 96));
          span.textContent = line;
          return span;
        }));
      } else if (content[key]) element.textContent = content[key];
      element.setAttribute("fill", palette.ink);
    });
    document.querySelectorAll("[data-palette]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.palette === state.palette));
    });
    const preview = $("postcard-preview");
    if (preview) preview.setAttribute("aria-label", `${content.message} ${content.recipient}. ${content.stamp}. ${state.palette} palette.`);
  }

  function textLines(value, context, width) {
    const words = value.split(/\s+/);
    const lines = [];
    let line = "";
    for (const word of words) {
      const next = line ? `${line} ${word}` : word;
      const measured = context ? context.measureText(next).width : next.length * 40;
      if (line && measured > width) {
        lines.push(line);
        line = word;
      } else line = next;
    }
    lines.push(line);
    return lines;
  }

  async function exportPostcard() {
    if (exporting) return;
    const button = $("download-postcard");
    const status = $("export-status");
    exporting = true;
    if (button) button.disabled = true;
    if (status) status.textContent = "Making your postcard…";
    try {
      const canvas = document.createElement("canvas");
      canvas.width = 1600;
      canvas.height = 1000;
      const context = canvas.getContext("2d");
      if (!context || typeof canvas.toBlob !== "function") throw new Error("Canvas export unavailable");
      const palette = palettes[state.palette];
      const content = postcardContent();
      context.fillStyle = palette.background;
      context.fillRect(0, 0, 1600, 1000);
      context.strokeStyle = palette.ink;
      context.lineWidth = 3;
      context.beginPath();
      if (typeof context.roundRect === "function") context.roundRect(55, 55, 1490, 890, 28);
      else context.rect(55, 55, 1490, 890);
      context.stroke();
      context.strokeStyle = palette.accent;
      context.beginPath();
      context.moveTo(1120, 150);
      context.lineTo(1260, 250);
      context.lineTo(1120, 350);
      context.stroke();
      [[1120, 150, 12], [1260, 250, 28], [1120, 350, 12]].forEach(([x, y, radius]) => {
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fillStyle = palette.background;
        context.fill();
        context.stroke();
      });
      context.fillStyle = palette.ink;
      context.font = "24px sans-serif";
      if ("letterSpacing" in context) context.letterSpacing = "4px";
      context.fillText("A LITTLE CLARITY, FROM PAPA KOJO", 120, 190);
      if ("letterSpacing" in context) context.letterSpacing = "0px";
      context.font = "76px Georgia, serif";
      textLines(content.message, context, 1280).forEach((line, index) => context.fillText(line, 120, 420 + index * 96));
      context.font = "32px sans-serif";
      context.fillText(content.recipient, 120, 700, 1360);
      context.strokeStyle = palette.ink;
      context.lineWidth = 2;
      context.beginPath();
      context.moveTo(120, 790);
      context.lineTo(1480, 790);
      context.stroke();
      context.font = "24px sans-serif";
      context.fillText(content.stamp, 120, 850);
      context.fillText("pkm.hayalows.com/playground", 1040, 850);
      const blob = await new Promise((resolve, reject) => {
        const timeout = window.setTimeout(() => reject(new Error("Export took too long")), 10000);
        try {
          canvas.toBlob((result) => {
            window.clearTimeout(timeout);
            if (result) resolve(result);
            else reject(new Error("Image export failed"));
          }, "image/png");
        } catch (error) {
          window.clearTimeout(timeout);
          reject(error);
        }
      });
      const url = URL.createObjectURL(blob);
      downloadUrls.add(url);
      const link = document.createElement("a");
      link.href = url;
      link.download = "pkm-playground-postcard.png";
      document.body.append(link);
      try { link.click(); }
      finally { link.remove(); }
      // Keep the object alive while the browser hands it to its download manager.
      window.setTimeout(() => {
        URL.revokeObjectURL(url);
        downloadUrls.delete(url);
      }, 60000);
      if (status) status.textContent = "Your PNG postcard is ready. Check your browser’s downloads.";
    } catch {
      if (status) status.textContent = "Your browser couldn’t save the postcard. Your preview is still here — try downloading again.";
    } finally {
      exporting = false;
      if (button) button.disabled = false;
    }
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    if (button.hasAttribute("data-open")) openCorner(button.dataset.open, button);
    else if (button.hasAttribute("data-start-lab")) openCorner("lab", button);
    else if (button.hasAttribute("data-close")) button.closest("dialog")?.close();
    else if (button.hasAttribute("data-filter")) {
      const key = button.dataset.filter;
      if (!Object.hasOwn(filters, key)) return;
      filters[key] = !filters[key];
      if ($("lab-feedback")) $("lab-feedback").textContent = "";
      renderSessions();
    } else if (button.hasAttribute("data-session")) chooseSession(button.dataset.session);
    else if (button.hasAttribute("data-replay")) replay();
    else if (button.hasAttribute("data-palette")) {
      if (!Object.hasOwn(palettes, button.dataset.palette)) return;
      state.palette = button.dataset.palette;
      save();
      renderPostcard();
    } else if (button.id === "download-postcard") exportPostcard();
  });
  $("postcard-name")?.addEventListener("input", renderPostcard);
  $("postcard-message")?.addEventListener("change", renderPostcard);
  window.addEventListener("pagehide", () => {
    downloadUrls.forEach((url) => URL.revokeObjectURL(url));
    downloadUrls.clear();
  });

  renderProgress();
  renderSessions();
  renderPostcard();
  document.querySelectorAll("[data-open]").forEach((button) => { button.disabled = false; });
})();
