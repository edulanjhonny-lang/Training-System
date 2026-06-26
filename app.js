const state = {
  currentUser: null,
  week: 1,
};

const youtube = (query) => `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;

const curriculum = {
  website: {
    name: "Website/SEO Track",
    goal: "Produce clean website deliverables with basic SEO and client-ready QA.",
    lessons: [
      {
        day: 1,
        week: 1,
        weekday: "Monday",
        title: "Agency Standards and Website Workflow",
        video: youtube("website design agency workflow tutorial client brief sitemap wireframe"),
        task: "Create a one-page project brief from a sample business: goal, pages, CTA, target audience, style references.",
        output: "Project brief document link",
        qa: ["Brief has clear goal", "Pages are listed", "CTA is specific", "Target customer is described"],
      },
      {
        day: 2,
        week: 1,
        weekday: "Tuesday",
        title: "Figma Basics for Layout Planning",
        video: youtube("Figma tutorial for beginners website design layout"),
        task: "Recreate a simple homepage wireframe with hero, services, testimonials, and contact CTA.",
        output: "Figma wireframe link",
        qa: ["Sections are aligned", "Spacing is consistent", "CTA is visible", "Desktop layout is readable"],
      },
      {
        day: 3,
        week: 1,
        weekday: "Wednesday",
        title: "Conversion-Focused Homepage Structure",
        video: youtube("high converting landing page structure website design tutorial"),
        task: "Write the section outline and copy blocks for a service business homepage.",
        output: "Homepage copy outline",
        qa: ["Hero explains offer", "Benefits are clear", "Trust section exists", "CTA repeats naturally"],
      },
      {
        day: 4,
        week: 1,
        weekday: "Thursday",
        title: "Responsive Design Basics",
        video: youtube("responsive web design tutorial for beginners mobile layout"),
        task: "Create desktop and mobile versions of the same homepage wireframe.",
        output: "Desktop and mobile layout link",
        qa: ["Mobile has no overflow", "Text is readable", "Buttons are easy to tap", "Section order still makes sense"],
      },
      {
        day: 5,
        week: 1,
        weekday: "Friday",
        title: "Website QA Fundamentals",
        video: youtube("website quality assurance checklist responsive forms links SEO tutorial"),
        task: "Audit a sample website and list 15 issues with suggested fixes.",
        output: "Website QA report",
        qa: ["Issues are specific", "Mobile is checked", "Links/forms are checked", "SEO basics are included"],
      },
      {
        day: 6,
        week: 2,
        weekday: "Monday",
        title: "WordPress and Elementor Page Build Basics",
        video: youtube("Elementor WordPress tutorial for beginners build homepage"),
        task: "Build a simple service page in WordPress/Elementor or recreate it in your preferred builder.",
        output: "Page preview link or screen recording",
        qa: ["Hero is complete", "Spacing is clean", "Buttons work", "Mobile view is checked"],
      },
      {
        day: 7,
        week: 2,
        weekday: "Tuesday",
        title: "Visual Hierarchy and Spacing",
        video: youtube("visual hierarchy website design spacing typography tutorial"),
        task: "Improve a messy landing page layout by fixing typography, spacing, section rhythm, and CTA hierarchy.",
        output: "Before and after screenshot",
        qa: ["Heading hierarchy is clear", "Spacing is consistent", "CTA stands out", "Design feels less crowded"],
      },
      {
        day: 8,
        week: 2,
        weekday: "Wednesday",
        title: "On-Page SEO Basics",
        video: youtube("on page SEO tutorial title tag meta description headings internal links"),
        task: "Create SEO title, meta description, H1/H2 structure, and internal link plan for a service page.",
        output: "On-page SEO checklist",
        qa: ["Title is under 60 chars", "Meta is persuasive", "H1 is unique", "Keywords are natural"],
      },
      {
        day: 9,
        week: 2,
        weekday: "Thursday",
        title: "Local SEO Page Structure",
        video: youtube("local SEO landing page tutorial service area page"),
        task: "Plan a local service landing page for one city with trust signals and FAQ section.",
        output: "Local SEO page outline",
        qa: ["City intent is clear", "Services are specific", "FAQ answers objections", "NAP details are considered"],
      },
      {
        day: 10,
        week: 2,
        weekday: "Friday",
        title: "Speed, Images, and Basic Technical Checks",
        video: youtube("website speed optimization images performance basics tutorial"),
        task: "Audit page speed basics and prepare an image optimization checklist.",
        output: "Speed and image QA checklist",
        qa: ["Large images identified", "Lazy loading considered", "Core pages checked", "Fixes are prioritized"],
      },
      {
        day: 11,
        week: 3,
        weekday: "Monday",
        title: "Client Brief Simulation",
        video: youtube("how to turn client brief into website design sitemap wireframe"),
        task: "Turn a sample client brief into sitemap, page goals, and homepage wireframe.",
        output: "Brief-to-wireframe package",
        qa: ["Sitemap matches goal", "Homepage sections support conversion", "Missing info is listed", "Next actions are clear"],
      },
      {
        day: 12,
        week: 3,
        weekday: "Tuesday",
        title: "Design a Full Homepage Mockup",
        video: youtube("Figma website design full homepage tutorial"),
        task: "Create a polished homepage mockup for a local service business.",
        output: "Figma homepage mockup",
        qa: ["Brand style is consistent", "Hero is strong", "Sections are complete", "Mobile considerations are noted"],
      },
      {
        day: 13,
        week: 3,
        weekday: "Wednesday",
        title: "Build From Mockup",
        video: youtube("convert Figma design to WordPress Elementor tutorial"),
        task: "Build the homepage mockup in your preferred builder or HTML/CSS.",
        output: "Working page link",
        qa: ["Matches mockup closely", "Buttons work", "Images are optimized", "Mobile is clean"],
      },
      {
        day: 14,
        week: 3,
        weekday: "Thursday",
        title: "Revision Handling",
        video: youtube("how to handle client website design revisions professionally"),
        task: "Apply a list of 10 simulated client revisions without breaking the layout.",
        output: "Revision log and updated page",
        qa: ["All revisions are logged", "Scope changes are flagged", "Layout still works", "No old issues returned"],
      },
      {
        day: 15,
        week: 3,
        weekday: "Friday",
        title: "Pre-Delivery Website QA",
        video: youtube("website launch checklist QA forms mobile SEO analytics tutorial"),
        task: "Run a full QA pass on your built page and submit the final QA report.",
        output: "Final QA report",
        qa: ["Mobile checked", "Forms/links checked", "SEO basics checked", "Issues have fixes"],
      },
      {
        day: 16,
        week: 4,
        weekday: "Monday",
        title: "Capstone Brief",
        video: youtube("website design project from client brief to launch tutorial"),
        task: "Start a full mini-project for a simulated client: brief, sitemap, homepage strategy.",
        output: "Capstone brief package",
        qa: ["Goal is clear", "Audience is clear", "Pages are justified", "Timeline is realistic"],
      },
      {
        day: 17,
        week: 4,
        weekday: "Tuesday",
        title: "Capstone Design",
        video: youtube("modern service business website design Figma tutorial"),
        task: "Design the capstone homepage and one inner service section.",
        output: "Capstone design link",
        qa: ["Design fits business", "CTA is obvious", "Trust elements exist", "Spacing is professional"],
      },
      {
        day: 18,
        week: 4,
        weekday: "Wednesday",
        title: "Capstone Build",
        video: youtube("build business website with Elementor step by step tutorial"),
        task: "Build the capstone homepage and prepare mobile view.",
        output: "Capstone page link",
        qa: ["Desktop works", "Mobile works", "CTA and forms work", "No obvious layout breaks"],
      },
      {
        day: 19,
        week: 4,
        weekday: "Thursday",
        title: "Capstone SEO and QA",
        video: youtube("on page SEO checklist website launch checklist tutorial"),
        task: "Add on-page SEO plan and complete a final QA report.",
        output: "SEO and QA package",
        qa: ["Title/meta done", "Headings checked", "Images checked", "Launch blockers listed"],
      },
      {
        day: 20,
        week: 4,
        weekday: "Friday",
        title: "Final Presentation and Handoff",
        video: youtube("website handoff to client tutorial project presentation"),
        task: "Record a 5-minute walkthrough explaining the work, QA results, and next steps.",
        output: "Walkthrough video and final files",
        qa: ["Explains decisions", "Mentions QA", "Files are organized", "Ready for graduation review"],
      },
    ],
  },
  video: {
    name: "Video Editing Track",
    goal: "Produce clean short-form and client-ready video edits with strong pacing, audio, captions, and exports.",
    lessons: [
      {
        day: 1,
        week: 1,
        weekday: "Monday",
        title: "Agency Video Workflow and File Organization",
        video: youtube("video editing workflow file organization tutorial for client projects"),
        task: "Create a folder structure for raw clips, audio, graphics, exports, and revisions.",
        output: "Folder screenshot or Drive link",
        qa: ["Folders are clear", "Files are named properly", "Revision folder exists", "Export folder exists"],
      },
      {
        day: 2,
        week: 1,
        weekday: "Tuesday",
        title: "Editing Tool Basics",
        video: youtube("CapCut desktop tutorial for beginners video editing full course"),
        task: "Create a 30-second basic cut from sample clips with clean trims.",
        output: "Exported video link",
        qa: ["No dead air", "Cuts are clean", "Timeline is organized", "Export plays correctly"],
      },
      {
        day: 3,
        week: 1,
        weekday: "Wednesday",
        title: "Hooks and Pacing",
        video: youtube("short form video editing hooks pacing retention tutorial"),
        task: "Edit 3 different first-five-second hooks from the same footage.",
        output: "Three hook versions",
        qa: ["Hook starts fast", "No slow intro", "Best version is explained", "Viewer benefit is clear"],
      },
      {
        day: 4,
        week: 1,
        weekday: "Thursday",
        title: "Audio Cleanup and Music Balance",
        video: youtube("video editing audio levels music voice balance tutorial"),
        task: "Edit a clip with voice, background music, and simple audio leveling.",
        output: "Audio-balanced video",
        qa: ["Voice is clear", "Music is not too loud", "No harsh volume jumps", "Export is clean"],
      },
      {
        day: 5,
        week: 1,
        weekday: "Friday",
        title: "Captions and Readability",
        video: youtube("automatic captions video editing tutorial readable subtitles short form"),
        task: "Add captions to a 30-second clip using readable style and correct timing.",
        output: "Captioned video",
        qa: ["Captions are synced", "Text is readable", "No spelling errors", "Captions do not cover key visuals"],
      },
      {
        day: 6,
        week: 2,
        weekday: "Monday",
        title: "Short-Form Social Edit",
        video: youtube("edit viral reels shorts tiktok video tutorial capcut premiere pro"),
        task: "Create a 30 to 45-second vertical reel with hook, cuts, captions, and music.",
        output: "Vertical reel export",
        qa: ["9:16 format", "Strong first 3 seconds", "Captions readable", "Pacing is tight"],
      },
      {
        day: 7,
        week: 2,
        weekday: "Tuesday",
        title: "B-Roll and Visual Interest",
        video: youtube("how to use b roll in video editing tutorial"),
        task: "Add relevant B-roll to support a talking-head video.",
        output: "B-roll edit",
        qa: ["B-roll matches topic", "Cuts feel natural", "No random filler", "Main message remains clear"],
      },
      {
        day: 8,
        week: 2,
        weekday: "Wednesday",
        title: "Basic Motion Graphics",
        video: youtube("simple motion graphics video editing tutorial text callouts"),
        task: "Add 3 simple callouts or text animations without making the video crowded.",
        output: "Motion graphics sample",
        qa: ["Graphics support message", "Animation is smooth", "Style is consistent", "No clutter"],
      },
      {
        day: 9,
        week: 2,
        weekday: "Thursday",
        title: "Color Correction Basics",
        video: youtube("color correction tutorial for beginners video editing"),
        task: "Correct exposure, white balance, and contrast on a short clip.",
        output: "Before and after video or screenshots",
        qa: ["Skin tones look natural", "Exposure is balanced", "Before/after is shown", "No over-saturation"],
      },
      {
        day: 10,
        week: 2,
        weekday: "Friday",
        title: "Export Settings and Versioning",
        video: youtube("best export settings for Instagram Reels YouTube Shorts video editing"),
        task: "Export one edit in 9:16, 16:9, and 1:1 formats with proper filenames.",
        output: "Three export links",
        qa: ["All formats correct", "No cropping mistakes", "Names are clear", "Quality is acceptable"],
      },
      {
        day: 11,
        week: 3,
        weekday: "Monday",
        title: "Client Brief Simulation",
        video: youtube("how to edit video from client brief tutorial"),
        task: "Turn a sample client brief into an editing plan: style, hook, length, assets, and deadline.",
        output: "Editing plan document",
        qa: ["Style is defined", "Hook is planned", "Assets are listed", "Questions are identified"],
      },
      {
        day: 12,
        week: 3,
        weekday: "Tuesday",
        title: "Talking-Head Edit",
        video: youtube("talking head video editing tutorial jump cuts captions b roll"),
        task: "Edit a talking-head clip with jump cuts, B-roll, captions, and music.",
        output: "Talking-head edit",
        qa: ["Message is clear", "Cuts are clean", "Captions are correct", "B-roll adds value"],
      },
      {
        day: 13,
        week: 3,
        weekday: "Wednesday",
        title: "Ad Creative Edit",
        video: youtube("video ad editing tutorial product service ad structure"),
        task: "Create a 20 to 30-second service ad with hook, problem, solution, proof, and CTA.",
        output: "Ad creative video",
        qa: ["Ad has clear structure", "CTA is included", "Pacing is strong", "Branding is consistent"],
      },
      {
        day: 14,
        week: 3,
        weekday: "Thursday",
        title: "Revision Handling",
        video: youtube("video editing client revisions workflow tutorial"),
        task: "Apply 8 simulated revision notes and create a revision log.",
        output: "Updated video and revision log",
        qa: ["All notes addressed", "Changes are documented", "No new mistakes", "Export is labeled v2"],
      },
      {
        day: 15,
        week: 3,
        weekday: "Friday",
        title: "Video QA Checklist",
        video: youtube("video editing quality control checklist audio captions export tutorial"),
        task: "Run QA on your Week 3 ad creative and submit a final checklist.",
        output: "QA checklist and corrected export",
        qa: ["Audio checked", "Captions checked", "Export checked", "Hook and CTA checked"],
      },
      {
        day: 16,
        week: 4,
        weekday: "Monday",
        title: "Capstone Brief",
        video: youtube("short form video campaign editing workflow tutorial"),
        task: "Start a capstone project: create a plan for 3 short-form videos from one client brief.",
        output: "Capstone editing plan",
        qa: ["Three angles planned", "Assets listed", "Style guide noted", "Deadline is realistic"],
      },
      {
        day: 17,
        week: 4,
        weekday: "Tuesday",
        title: "Capstone Edit 1",
        video: youtube("edit high retention short form video tutorial capcut premiere pro"),
        task: "Create video 1 with a strong educational or problem-aware hook.",
        output: "Capstone video 1",
        qa: ["Hook is strong", "Captions are clean", "Audio is balanced", "CTA is included"],
      },
      {
        day: 18,
        week: 4,
        weekday: "Wednesday",
        title: "Capstone Edit 2",
        video: youtube("social media video editing b roll captions pacing tutorial"),
        task: "Create video 2 with different angle, pacing, B-roll, and caption treatment.",
        output: "Capstone video 2",
        qa: ["Distinct from video 1", "Visual interest is strong", "Branding is consistent", "Export is correct"],
      },
      {
        day: 19,
        week: 4,
        weekday: "Thursday",
        title: "Capstone Edit 3 and QA",
        video: youtube("final video editing checklist before delivery tutorial"),
        task: "Create video 3 and run QA on all capstone videos.",
        output: "Three videos plus QA checklist",
        qa: ["All videos checked", "Formats correct", "No caption errors", "Files organized"],
      },
      {
        day: 20,
        week: 4,
        weekday: "Friday",
        title: "Final Presentation and Handoff",
        video: youtube("video editing project handoff client presentation tutorial"),
        task: "Record a 5-minute walkthrough explaining your edits, decisions, files, and QA results.",
        output: "Walkthrough video and final files",
        qa: ["Explains decisions", "Shows file organization", "Mentions QA", "Ready for graduation review"],
      },
    ],
  },
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
  const response = await fetch(path, {
    cache: "no-store",
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
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

function filterLocalTrainees(filters = {}) {
  let trainees = store.trainees;
  if (filters.email) {
    trainees = trainees.filter((trainee) => trainee.email === normalizeEmail(filters.email));
  }
  return trainees;
}

function filterLocalSubmissions(filters = {}) {
  let submissions = store.submissions;
  if (filters.traineeId) {
    submissions = submissions.filter((submission) => submission.traineeId === filters.traineeId);
  }
  return submissions;
}

async function getTrainees(filters = {}) {
  const query = new URLSearchParams(filters).toString();
  try {
    return await apiRequest(`/api/trainees${query ? `?${query}` : ""}`);
  } catch (error) {
    if (!canUseLocalFallback(error)) throw error;
    return filterLocalTrainees(filters);
  }
}

async function getTraineeByEmail(email) {
  const matches = await getTrainees({ email });
  return matches[0] || null;
}

async function createTrainee(trainee) {
  try {
    return await apiRequest("/api/trainees", {
      method: "POST",
      body: JSON.stringify(trainee),
    });
  } catch (error) {
    if (!canUseLocalFallback(error)) throw error;
    store.trainees = [...store.trainees, trainee];
    return trainee;
  }
}

async function getSubmissions(filters = {}) {
  const query = new URLSearchParams(filters).toString();
  try {
    return await apiRequest(`/api/submissions${query ? `?${query}` : ""}`);
  } catch (error) {
    if (!canUseLocalFallback(error)) throw error;
    return filterLocalSubmissions(filters);
  }
}

async function upsertSubmission(submission) {
  try {
    return await apiRequest("/api/submissions", {
      method: "POST",
      body: JSON.stringify(submission),
    });
  } catch {
    const submissions = store.submissions.filter((item) => !(
      item.traineeId === submission.traineeId && item.lessonId === submission.lessonId
    ));
    store.submissions = [...submissions, submission];
    return submission;
  }
}

function $(selector) {
  return document.querySelector(selector);
}

function $all(selector) {
  return [...document.querySelectorAll(selector)];
}

function setView(name) {
  $all(".view").forEach((view) => view.classList.remove("active"));
  $(`#${name}View`).classList.add("active");
  $all(".nav-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.view === name);
  });

  const titles = {
    home: ["Training Operating System", "Register trainees, approve access, assign a track, and run daily lessons."],
    register: ["Trainee Registration", "Applicants wait for your approval before seeing lessons."],
    login: ["Trainee Login", "Approved subcontractors can continue their 4-week training."],
    training: ["Training Dashboard", "Daily lessons, tutorial links, submissions, and progress."],
  };
  $("#pageTitle").textContent = titles[name][0];
  $("#pageSubtitle").textContent = titles[name][1];
}

function normalizeEmail(email) {
  return email.trim().toLowerCase();
}

async function registerTrainee(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const email = normalizeEmail(form.get("email"));
  const existingTrainee = await getTraineeByEmail(email);

  if (existingTrainee) {
    $("#registerNotice").textContent = "This email is already registered.";
    return;
  }

  const trainee = {
    id: crypto.randomUUID(),
    name: form.get("name").trim(),
    email,
    track: form.get("track"),
    level: form.get("level"),
    portfolio: form.get("portfolio").trim(),
    status: "pending",
    createdAt: new Date().toISOString(),
  };

  await createTrainee(trainee);
  event.target.reset();
  $("#registerNotice").textContent = "Registration submitted. Admin approval is required before training access.";
}

async function loginTrainee(event) {
  event.preventDefault();
  const email = normalizeEmail(new FormData(event.target).get("email"));
  const trainee = await getTraineeByEmail(email);

  if (!trainee) {
    $("#loginNotice").textContent = "No registration found for this email.";
    return;
  }

  if (trainee.status !== "approved") {
    $("#loginNotice").textContent = `Your current status is ${trainee.status}. Please wait for admin approval.`;
    return;
  }

  state.currentUser = trainee;
  state.week = 1;
  $("#sessionChip").textContent = `${trainee.name} - ${curriculum[trainee.track].name}`;
  await renderTraining();
  setView("training");
}

async function renderTraining() {
  const trainee = state.currentUser;
  if (!trainee) return;

  const track = curriculum[trainee.track];
  const submissions = await getSubmissions({ traineeId: trainee.id });
  const completedIds = new Set(submissions.filter((submission) => submission.status !== "Draft").map((submission) => submission.lessonId));
  const completed = completedIds.size;
  const percentage = Math.round((completed / track.lessons.length) * 100);

  $("#trainingName").textContent = `Welcome, ${trainee.name}`;
  $("#trainingMeta").textContent = `${track.name}: ${track.goal}`;
  $("#progressText").textContent = `${completed}/${track.lessons.length} complete`;
  $("#progressFill").style.width = `${percentage}%`;

  $("#weekTabs").innerHTML = [1, 2, 3, 4].map((week) => `
    <button class="${week === state.week ? "active" : ""}" data-week="${week}">Week ${week}</button>
  `).join("");

  $all("[data-week]").forEach((button) => {
    button.addEventListener("click", () => {
      state.week = Number(button.dataset.week);
      renderTraining();
    });
  });

  const lessons = track.lessons.filter((lesson) => lesson.week === state.week);
  $("#lessonList").innerHTML = lessons.map((lesson) => {
    const lessonId = `${trainee.track}-${lesson.day}`;
    const submission = submissions.find((item) => item.lessonId === lessonId);
    const status = submission ? submission.status : "Not submitted";

    return `
      <article class="lesson-card">
        <div class="lesson-top">
          <div class="lesson-title">
            <span>Day ${lesson.day} - ${lesson.weekday}</span>
            <strong>${lesson.title}</strong>
          </div>
          <span class="pill ${status.toLowerCase()}">${status}</span>
        </div>
        <p><strong>Task:</strong> ${lesson.task}</p>
        <p><strong>Required output:</strong> ${lesson.output}</p>
        <ul class="qa-list">
          ${lesson.qa.map((item) => `<li>${item}</li>`).join("")}
        </ul>
        <div class="lesson-actions">
          <a class="secondary tiny-btn" href="${lesson.video}" target="_blank" rel="noreferrer">Open YouTube Tutorial</a>
          <button class="primary tiny-btn" data-select-lesson="${lessonId}">Submit This Lesson</button>
        </div>
      </article>
    `;
  }).join("");

  $all("[data-select-lesson]").forEach((button) => {
    button.addEventListener("click", () => selectLesson(button.dataset.selectLesson));
  });
}

function selectLesson(lessonId) {
  const trainee = state.currentUser;
  const lesson = curriculum[trainee.track].lessons.find((item) => `${trainee.track}-${item.day}` === lessonId);
  $("#lessonId").value = lessonId;
  $("#selectedLesson").value = `Day ${lesson.day}: ${lesson.title}`;
  $("#submissionNotice").textContent = "";
}

async function submitLesson(event) {
  event.preventDefault();
  const trainee = state.currentUser;
  if (!trainee) return;

  const form = new FormData(event.target);
  const lessonId = form.get("lessonId");
  if (!lessonId) {
    $("#submissionNotice").textContent = "Please select a lesson first.";
    return;
  }

  const lesson = curriculum[trainee.track].lessons.find((item) => `${trainee.track}-${item.day}` === lessonId);
  const submission = {
    id: crypto.randomUUID(),
    traineeId: trainee.id,
    lessonId,
    lessonTitle: `Day ${lesson.day}: ${lesson.title}`,
    link: form.get("link").trim(),
    reflection: form.get("reflection").trim(),
    status: "Submitted",
    createdAt: new Date().toISOString(),
  };

  await upsertSubmission(submission);
  event.target.reset();
  $("#submissionNotice").textContent = "Submitted. Admin can now review this lesson.";
  await renderTraining();
}

function init() {
  $all("[data-view]").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.view));
  });

  $all("[data-view-jump]").forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.viewJump));
  });

  $("#registerForm").addEventListener("submit", registerTrainee);
  $("#loginForm").addEventListener("submit", loginTrainee);
  $("#submissionForm").addEventListener("submit", submitLesson);
  $("#logoutBtn").addEventListener("click", () => {
    state.currentUser = null;
    $("#sessionChip").textContent = "Not logged in";
    setView("home");
  });
}

init();
