const ADMIN_EMAILS = ["edulanjhonny@gmail.com", "celinecabanez@gmail.com"];
let adminSession = null;

const curriculumNames = {
  website: "Website/SEO Track",
  video: "Video Editing Track",
};

const store = {
  get trainees() {
    return JSON.parse(localStorage.getItem("trainees") || "[]");
  },
  set trainees(value) {
    localStorage.setItem("trainees", JSON.stringify(value));
  },
  get submissions() {
    return JSON.parse(localStorage.getItem("submissions") || "[]");
  },
  set submissions(value) {
    localStorage.setItem("submissions", JSON.stringify(value));
  },
};

async function apiRequest(path, options = {}) {
  const adminHeaders = adminSession
    ? {
      "x-admin-email": adminSession.email,
      "x-admin-pin": adminSession.pin,
    }
    : {};

  const response = await fetch(path, {
    cache: "no-store",
    headers: { "Content-Type": "application/json", ...adminHeaders, ...(options.headers || {}) },
    ...options,
  });

  if (!response.ok) {
    const error = new Error(`Request failed: ${response.status}`);
    error.status = response.status;
    throw error;
  }

  return response.json();
}

function canUseLocalFallback(error) {
  return !error.status;
}

async function getTrainees() {
  try {
    return await apiRequest("/api/trainees");
  } catch (error) {
    if (!canUseLocalFallback(error)) throw error;
    return store.trainees;
  }
}

async function getSubmissions() {
  try {
    return await apiRequest("/api/submissions");
  } catch (error) {
    if (!canUseLocalFallback(error)) throw error;
    return store.submissions;
  }
}

async function setTraineeStatus(id, status) {
  try {
    return await apiRequest(`/api/trainees/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    });
  } catch (error) {
    if (!canUseLocalFallback(error)) throw error;
    store.trainees = store.trainees.map((trainee) => (
      trainee.id === id ? { ...trainee, status } : trainee
    ));
    return null;
  }
}

async function setSubmissionStatus(id, status) {
  try {
    return await apiRequest(`/api/submissions/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    });
  } catch (error) {
    if (!canUseLocalFallback(error)) throw error;
    store.submissions = store.submissions.map((submission) => (
      submission.id === id ? { ...submission, status } : submission
    ));
    return null;
  }
}

function $(selector) {
  return document.querySelector(selector);
}

function $all(selector) {
  return [...document.querySelectorAll(selector)];
}

function normalizeEmail(email) {
  return email.trim().toLowerCase();
}

async function adminLogin(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const email = normalizeEmail(form.get("email"));
  const pin = form.get("pin");

  if (!ADMIN_EMAILS.includes(email)) {
    $("#adminNotice").textContent = "This email is not allowed to access the admin dashboard.";
    return;
  }

  adminSession = { email, pin };

  try {
    await renderAdmin();
    $("#adminLock").classList.add("hidden");
    $("#adminDashboard").classList.remove("hidden");
    $("#sessionChip").textContent = `Admin: ${email}`;
    $("#adminNotice").textContent = "";
  } catch (error) {
    adminSession = null;
    $("#adminNotice").textContent = error.status === 401
      ? "Incorrect PIN or admin access rejected by the server."
      : "Admin login failed. Please check the database/API setup.";
  }
}

async function updateTraineeStatus(id, status) {
  await setTraineeStatus(id, status);
  await renderAdmin();
}

async function updateSubmissionStatus(id, status) {
  await setSubmissionStatus(id, status);
  await renderAdmin();
}

async function renderAdmin() {
  const applicantList = $("#applicantList");
  const submissionList = $("#submissionList");
  const trainees = await getTrainees();

  applicantList.innerHTML = trainees.length
    ? trainees.map((trainee) => `
      <div class="person-row">
        <div>
          <strong>${trainee.name}</strong>
          <p>${trainee.email}</p>
          <span class="pill ${trainee.status}">${trainee.status}</span>
          <span class="pill">${curriculumNames[trainee.track] || trainee.track}</span>
        </div>
        <p>Level: ${trainee.level}${trainee.portfolio ? `<br>Portfolio: <a href="${trainee.portfolio}" target="_blank" rel="noreferrer">Open link</a>` : ""}</p>
        <div class="row-actions">
          <button class="tiny-btn approve" data-approve="${trainee.id}">Approve</button>
          <button class="tiny-btn reject" data-reject="${trainee.id}">Reject</button>
        </div>
      </div>
    `).join("")
    : "<p>No applicants yet.</p>";

  const submissions = (await getSubmissions()).slice().reverse();
  submissionList.innerHTML = submissions.length
    ? submissions.map((submission) => {
      const trainee = trainees.find((item) => item.id === submission.traineeId);
      return `
        <div class="submission-row">
          <div>
            <strong>${trainee ? trainee.name : "Unknown trainee"}</strong>
            <p>${submission.lessonTitle}</p>
            <span class="pill">${submission.status}</span>
          </div>
          <p>${submission.reflection || "No reflection added."}</p>
          ${submission.link ? `<a href="${submission.link}" target="_blank" rel="noreferrer">Open submitted work</a>` : "<p>No link submitted.</p>"}
          <div class="row-actions">
            <button class="tiny-btn approve" data-submission-status="${submission.id}" data-status="Pass">Mark Pass</button>
            <button class="tiny-btn" data-submission-status="${submission.id}" data-status="Revise">Mark Revise</button>
            <button class="tiny-btn reject" data-submission-status="${submission.id}" data-status="Fail">Mark Fail</button>
          </div>
        </div>
      `;
    }).join("")
    : "<p>No submissions yet.</p>";

  $all("[data-approve]").forEach((button) => {
    button.addEventListener("click", () => updateTraineeStatus(button.dataset.approve, "approved"));
  });
  $all("[data-reject]").forEach((button) => {
    button.addEventListener("click", () => updateTraineeStatus(button.dataset.reject, "rejected"));
  });
  $all("[data-submission-status]").forEach((button) => {
    button.addEventListener("click", () => updateSubmissionStatus(button.dataset.submissionStatus, button.dataset.status));
  });
}

$("#adminForm").addEventListener("submit", adminLogin);
$("#refreshAdminBtn").addEventListener("click", renderAdmin);
window.addEventListener("storage", renderAdmin);
window.setInterval(() => {
  if (!$("#adminDashboard").classList.contains("hidden")) {
    renderAdmin().catch(() => {
      $("#sessionChip").textContent = "Admin refresh failed";
    });
  }
}, 3000);
