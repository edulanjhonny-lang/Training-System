const state = {
  currentUser: null,
  week: 1,
};

const youtube = (query) => `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;

const curriculum = {
  website: {
    name: "Website/SEO Track",
    goal: "Produce clean WordPress, Elementor, GHL, Shopify, WooCommerce, AI builder, and SEO outputs that pass internal QA.",
    lessons: [
      {
        day: 1,
        week: 1,
        weekday: "Monday",
        title: "WordPress and Elementor Workspace Setup",
        video: youtube("WordPress Elementor tutorial for beginners site settings global colors fonts containers"),
        reference: "https://elementor.com/",
        task: "Set up a practice WordPress site, install Elementor, set global colors/fonts, create a page structure, and document the exact setup steps in a short SOP.",
        output: "Setup SOP link plus screenshot of Elementor global settings",
        qa: ["WordPress and Elementor are ready", "Global colors and fonts are set", "Page structure is organized", "SOP is clear enough to repeat"],
      },
      {
        day: 2,
        week: 1,
        weekday: "Tuesday",
        title: "Elementor Header Build",
        video: youtube("Elementor header tutorial WordPress nav logo button responsive"),
        reference: "https://www.shopify.com/",
        task: "Recreate a clean header with logo, navigation, CTA button, sticky behavior, mobile menu, and spacing rules.",
        output: "Header preview link plus screenshot desktop/mobile",
        qa: ["Logo and nav align correctly", "CTA button is visible", "Mobile menu works", "Sticky header does not overlap content"],
      },
      {
        day: 3,
        week: 1,
        weekday: "Wednesday",
        title: "Elementor Footer Build",
        video: youtube("Elementor footer tutorial WordPress footer links columns copyright responsive"),
        reference: "https://www.webflow.com/",
        task: "Build a footer with logo area, link columns, contact block, social links, copyright row, and mobile stacking.",
        output: "Footer preview link plus short SOP",
        qa: ["Footer has clean columns", "Links are grouped logically", "Mobile layout stacks cleanly", "Spacing matches the reference style"],
      },
      {
        day: 4,
        week: 1,
        weekday: "Thursday",
        title: "Elementor Homepage Sections",
        video: youtube("Elementor homepage tutorial hero services testimonials CTA sections"),
        reference: "https://www.apple.com/iphone/",
        task: "Create a homepage with hero, benefits, services/features, proof section, FAQ, and final CTA. Use containers, not messy nested sections.",
        output: "Homepage preview link",
        qa: ["Hero is clear above the fold", "Sections have consistent spacing", "Containers are organized", "CTA appears naturally more than once"],
      },
      {
        day: 5,
        week: 1,
        weekday: "Friday",
        title: "Elementor Responsive QA",
        video: youtube("Elementor responsive design tutorial mobile tablet desktop breakpoints"),
        reference: "https://www.airbnb.com/",
        task: "Run responsive QA on the homepage. Fix desktop, tablet, and mobile spacing, font sizes, button widths, and section order.",
        output: "Before/after screenshots plus QA checklist",
        qa: ["No horizontal overflow", "Text is readable on mobile", "Buttons are easy to tap", "Before/after proof is submitted"],
      },
      {
        day: 6,
        week: 2,
        weekday: "Monday",
        title: "Elementor Landing Page From Reference",
        video: youtube("Elementor landing page tutorial high converting service page"),
        reference: "https://www.clickfunnels.com/",
        task: "Recreate a funnel-style landing page layout: hero, problem, solution, benefits, proof, FAQ, and CTA. Write a mini SOP explaining each section purpose.",
        output: "Landing page link plus section SOP",
        qa: ["Reference structure is recognizable", "Each section has a purpose", "CTA flow is clear", "Mobile is checked"],
      },
      {
        day: 7,
        week: 2,
        weekday: "Tuesday",
        title: "GHL Funnel Page Basics",
        video: youtube("GoHighLevel funnel builder tutorial landing page form calendar"),
        reference: "https://www.gohighlevel.com/",
        task: "Build a simple GHL funnel page with headline, subheadline, form section, thank-you step, and tracking notes.",
        output: "GHL funnel preview link plus screenshot",
        qa: ["Funnel has at least 2 steps", "Form is connected", "Thank-you step works", "Layout is mobile-friendly"],
      },
      {
        day: 8,
        week: 2,
        weekday: "Wednesday",
        title: "GHL Forms, Calendar, and Automation",
        video: youtube("GoHighLevel workflow automation tutorial form calendar email SMS"),
        reference: "https://www.gohighlevel.com/features/workflow-automation",
        task: "Create a GHL form/calendar flow and one automation: form submitted -> internal notification -> tag/contact update -> follow-up message draft.",
        output: "Workflow screenshot plus automation SOP",
        qa: ["Trigger is correct", "Actions are in the right order", "Test contact is documented", "SOP explains how to test"],
      },
      {
        day: 9,
        week: 2,
        weekday: "Thursday",
        title: "WooCommerce Store Setup",
        video: youtube("WooCommerce tutorial for beginners product shop cart checkout Elementor"),
        reference: "https://woocommerce.com/",
        task: "Set up WooCommerce basics: store settings, one product, product categories, shop page, cart, checkout, and test order notes.",
        output: "WooCommerce setup screenshots plus checklist",
        qa: ["Product page is complete", "Shop/cart/checkout pages exist", "Test order flow is documented", "Images and prices are clean"],
      },
      {
        day: 10,
        week: 2,
        weekday: "Friday",
        title: "Shopify Theme and Product Page Basics",
        video: youtube("Shopify theme editor tutorial product page collections navigation"),
        reference: "https://www.allbirds.com/",
        task: "Create a Shopify practice layout: homepage sections, navigation, one collection, one product page, and basic product content rules.",
        output: "Shopify preview screenshots plus product page checklist",
        qa: ["Theme sections are arranged cleanly", "Product page has strong images/content", "Navigation is simple", "Mobile view is checked"],
      },
      {
        day: 11,
        week: 3,
        weekday: "Monday",
        title: "Lovable AI Website Template Workflow",
        video: youtube("Lovable AI website builder tutorial landing page prompt"),
        reference: "https://lovable.dev/",
        task: "Generate a simple website template in Lovable using a structured prompt. Export screenshots and document what prompt produced the best layout.",
        output: "Lovable template screenshots plus prompt SOP",
        qa: ["Prompt is specific", "Layout has complete sections", "Design is not generic", "Reusable prompt is documented"],
      },
      {
        day: 12,
        week: 3,
        weekday: "Tuesday",
        title: "Readdy.ai Template Workflow",
        video: youtube("Readdy AI website builder tutorial landing page"),
        reference: "https://readdy.ai/",
        task: "Create a website template in Readdy.ai from a business description. Save the prompt, screenshot the best sections, and list which sections should be rebuilt in Elementor.",
        output: "Readdy.ai screenshots plus rebuild plan",
        qa: ["Prompt is reusable", "Best sections are identified", "Weak sections are noted", "Elementor rebuild plan is clear"],
      },
      {
        day: 13,
        week: 3,
        weekday: "Wednesday",
        title: "AI Template to Elementor Rebuild",
        video: youtube("convert AI website design to WordPress Elementor tutorial"),
        reference: "https://www.readdy.ai/",
        task: "Pick one AI-generated template section set and rebuild it in Elementor with real containers, editable text, buttons, and responsive spacing.",
        output: "Elementor rebuild link plus AI reference screenshot",
        qa: ["Rebuild follows the reference", "Text is editable", "Spacing is clean", "Mobile layout is not broken"],
      },
      {
        day: 14,
        week: 3,
        weekday: "Thursday",
        title: "On-Page SEO SOP",
        video: youtube("on page SEO tutorial title meta description headings internal links image alt text"),
        reference: "https://ahrefs.com/blog/on-page-seo/",
        task: "Create on-page SEO for one practice page: title, meta description, H1/H2 map, internal links, image alt text, slug, and keyword placement.",
        output: "On-page SEO checklist plus page screenshot",
        qa: ["Title and meta are complete", "Only one H1 exists", "Headings are logical", "Keywords are natural"],
      },
      {
        day: 15,
        week: 3,
        weekday: "Friday",
        title: "Local SEO SOP",
        video: youtube("local SEO tutorial Google Business Profile citations service area pages"),
        reference: "https://www.brightlocal.com/learn/local-seo/",
        task: "Create a local SEO plan for a sample business: GBP checklist, NAP consistency, location page outline, service keywords, and citation list.",
        output: "Local SEO SOP document",
        qa: ["NAP format is consistent", "Location page outline is complete", "GBP tasks are listed", "Citations are relevant"],
      },
      {
        day: 16,
        week: 4,
        weekday: "Monday",
        title: "Off-Page SEO and Backlink SOP",
        video: youtube("off page SEO backlink building tutorial citations guest post HARO directory"),
        reference: "https://ahrefs.com/blog/link-building/",
        task: "Create an off-page SEO task list: backlink prospects, directory/citation targets, outreach template, anchor text notes, and tracking sheet.",
        output: "Off-page SEO tracker link",
        qa: ["Prospects are relevant", "Anchor text is not spammy", "Tracking columns are complete", "Tasks are realistic"],
      },
      {
        day: 17,
        week: 4,
        weekday: "Tuesday",
        title: "Technical SEO and Speed QA",
        video: youtube("technical SEO audit tutorial page speed schema sitemap robots core web vitals"),
        reference: "https://pagespeed.web.dev/",
        task: "Run technical QA on a practice site: page speed, image sizes, sitemap/robots notes, broken links, mobile view, and basic schema checklist.",
        output: "Technical SEO QA report",
        qa: ["Speed issues are listed", "Image issues are identified", "Mobile issues are documented", "Fix priorities are ranked"],
      },
      {
        day: 18,
        week: 4,
        weekday: "Wednesday",
        title: "Capstone Part 1: AI Template and Elementor Build",
        video: youtube("Elementor complete website tutorial header footer homepage responsive"),
        reference: "https://readdy.ai/",
        task: "Create an AI website template, choose the strongest homepage direction, then rebuild header, footer, hero, and 3 core sections in Elementor.",
        output: "Capstone build link plus AI reference screenshot",
        qa: ["Header/footer are complete", "Hero and sections match the chosen direction", "Responsive layout works", "Files/screenshots are organized"],
      },
      {
        day: 19,
        week: 4,
        weekday: "Thursday",
        title: "Capstone Part 2: Funnel or Store Add-On",
        video: youtube("GoHighLevel funnel automation tutorial OR Shopify product page tutorial"),
        reference: "https://www.gohighlevel.com/",
        task: "Add one production add-on: either a GHL funnel with automation, a WooCommerce product flow, or a Shopify product page. Document exact setup steps.",
        output: "Add-on preview plus setup SOP",
        qa: ["Chosen add-on works", "Steps are documented", "Test action is recorded", "Mobile layout is checked"],
      },
      {
        day: 20,
        week: 4,
        weekday: "Friday",
        title: "Capstone Part 3: SEO, QA, and Internal Walkthrough",
        video: youtube("website QA checklist on page SEO launch checklist Elementor"),
        reference: "https://www.semrush.com/blog/on-page-seo-checklist/",
        task: "Complete on-page SEO, local/off-page plan, technical QA, and record a 5-minute internal walkthrough explaining the build and fixes.",
        output: "Final capstone package: page link, SEO checklist, QA report, walkthrough video",
        qa: ["SEO checklist is complete", "QA report has fixes/priorities", "Walkthrough is clear", "Ready for internal production review"],
      },
    ],
  },
  video: {
    name: "Video Editing Track",
    goal: "Produce clean CapCut short-form edits with strong hooks, pacing, captions, audio, branding, and export discipline.",
    lessons: [
      {
        day: 1,
        week: 1,
        weekday: "Monday",
        title: "CapCut Workspace and File Organization",
        video: youtube("CapCut desktop tutorial for beginners file organization project settings"),
        reference: youtube("CapCut short form edit example clean captions pacing"),
        task: "Create a clean folder structure for raw clips, audio, captions, graphics, exports, and revisions. Open CapCut and set up one organized project.",
        output: "Folder screenshot or Drive link",
        qa: ["Folders are clear", "Files are named properly", "Revision folder exists", "Export folder exists"],
      },
      {
        day: 2,
        week: 1,
        weekday: "Tuesday",
        title: "Basic Cut, Trim, and Timeline Discipline",
        video: youtube("CapCut desktop basic editing trim split timeline tutorial"),
        reference: youtube("before after CapCut basic talking head edit example"),
        task: "Create a 30-second rough cut from sample clips. Remove dead air, arrange clips, and keep the timeline clean.",
        output: "Exported video link",
        qa: ["No dead air", "Cuts are clean", "Timeline is organized", "Export plays correctly"],
      },
      {
        day: 3,
        week: 1,
        weekday: "Wednesday",
        title: "Hooks and First 3 Seconds",
        video: youtube("CapCut hooks tutorial short form retention first 3 seconds"),
        reference: youtube("viral reel hook examples business video editing"),
        task: "Edit 3 hook versions from the same footage: direct statement, question hook, and pattern-interrupt hook.",
        output: "Three hook versions",
        qa: ["Hook starts fast", "No slow intro", "Best version is explained", "Viewer benefit is clear"],
      },
      {
        day: 4,
        week: 1,
        weekday: "Thursday",
        title: "Audio Cleanup and Music Balance in CapCut",
        video: youtube("CapCut audio editing tutorial noise reduction voice music balance"),
        reference: youtube("CapCut talking head edit clean audio example"),
        task: "Edit one talking-head clip with noise reduction, voice clarity, background music, and smooth volume changes.",
        output: "Audio-balanced video",
        qa: ["Voice is clear", "Music is not too loud", "No harsh volume jumps", "Export is clean"],
      },
      {
        day: 5,
        week: 1,
        weekday: "Friday",
        title: "Auto Captions and Caption Styling",
        video: youtube("CapCut auto captions tutorial subtitle style short form"),
        reference: youtube("Alex Hormozi style captions CapCut example"),
        task: "Add captions to a 30-second clip. Create 2 caption styles: clean professional and bold social style.",
        output: "Captioned video",
        qa: ["Captions are synced", "Text is readable", "No spelling errors", "Captions do not cover key visuals"],
      },
      {
        day: 6,
        week: 2,
        weekday: "Monday",
        title: "Vertical Reel Edit",
        video: youtube("CapCut viral reels tutorial hook captions music pacing"),
        reference: youtube("high retention Instagram reel edit example captions b roll"),
        task: "Create a 30 to 45-second 9:16 reel with hook, tight cuts, captions, music, and a simple CTA.",
        output: "Vertical reel export",
        qa: ["9:16 format", "Strong first 3 seconds", "Captions readable", "Pacing is tight"],
      },
      {
        day: 7,
        week: 2,
        weekday: "Tuesday",
        title: "B-Roll and Visual Interest",
        video: youtube("CapCut b roll tutorial talking head video edit"),
        reference: youtube("talking head b roll edit example short form"),
        task: "Add relevant B-roll to support a talking-head video. Use B-roll only when it supports the message.",
        output: "B-roll edit",
        qa: ["B-roll matches topic", "Cuts feel natural", "No random filler", "Main message remains clear"],
      },
      {
        day: 8,
        week: 2,
        weekday: "Wednesday",
        title: "Text Callouts, Stickers, and Simple Motion",
        video: youtube("CapCut text animation callout tutorial keyframes"),
        reference: youtube("CapCut text callout animation examples"),
        task: "Add 3 simple callouts or text animations. Use keyframes lightly and avoid clutter.",
        output: "Motion graphics sample",
        qa: ["Graphics support message", "Animation is smooth", "Style is consistent", "No clutter"],
      },
      {
        day: 9,
        week: 2,
        weekday: "Thursday",
        title: "Color Correction in CapCut",
        video: youtube("CapCut color correction tutorial exposure contrast white balance"),
        reference: youtube("CapCut before after color grading example"),
        task: "Correct exposure, white balance, contrast, saturation, and skin tone on a short clip.",
        output: "Before and after video or screenshots",
        qa: ["Skin tones look natural", "Exposure is balanced", "Before/after is shown", "No over-saturation"],
      },
      {
        day: 10,
        week: 2,
        weekday: "Friday",
        title: "Export Settings and Versioning",
        video: youtube("CapCut best export settings Instagram Reels YouTube Shorts TikTok"),
        reference: youtube("CapCut export quality settings tutorial"),
        task: "Export one edit in 9:16, 16:9, and 1:1 formats with proper filenames and version notes.",
        output: "Three export links",
        qa: ["All formats correct", "No cropping mistakes", "Names are clear", "Quality is acceptable"],
      },
      {
        day: 11,
        week: 3,
        weekday: "Monday",
        title: "Editing Plan From Internal Instructions",
        video: youtube("video editing plan workflow short form content structure"),
        reference: youtube("short form content editing plan examples"),
        task: "Turn internal instructions into an editing plan: style, hook, length, assets needed, caption style, and deadline.",
        output: "Editing plan document",
        qa: ["Style is defined", "Hook is planned", "Assets are listed", "Questions are identified"],
      },
      {
        day: 12,
        week: 3,
        weekday: "Tuesday",
        title: "Talking-Head Edit in CapCut",
        video: youtube("CapCut talking head edit tutorial jump cuts captions b roll"),
        reference: youtube("professional talking head short form edit example"),
        task: "Edit a talking-head clip with jump cuts, B-roll, captions, zooms, and music.",
        output: "Talking-head edit",
        qa: ["Message is clear", "Cuts are clean", "Captions are correct", "B-roll adds value"],
      },
      {
        day: 13,
        week: 3,
        weekday: "Wednesday",
        title: "UGC-Style Ad Edit",
        video: youtube("CapCut UGC ad editing tutorial hook problem solution CTA"),
        reference: youtube("UGC ad examples short form video"),
        task: "Create a 20 to 30-second UGC-style ad with hook, problem, solution, proof, and CTA.",
        output: "Ad creative video",
        qa: ["Ad has clear structure", "CTA is included", "Pacing is strong", "Branding is consistent"],
      },
      {
        day: 14,
        week: 3,
        weekday: "Thursday",
        title: "Revision Log and Controlled Fixes",
        video: youtube("video editing revision workflow version control tutorial"),
        reference: youtube("video editing revision notes examples"),
        task: "Apply 8 simulated revision notes and create a revision log without breaking approved parts of the edit.",
        output: "Updated video and revision log",
        qa: ["All notes addressed", "Changes are documented", "No new mistakes", "Export is labeled v2"],
      },
      {
        day: 15,
        week: 3,
        weekday: "Friday",
        title: "CapCut Video QA Checklist",
        video: youtube("video editing quality control checklist captions audio export"),
        reference: youtube("short form video QA checklist examples"),
        task: "Run QA on your Week 3 ad creative and submit a final checklist.",
        output: "QA checklist and corrected export",
        qa: ["Audio checked", "Captions checked", "Export checked", "Hook and CTA checked"],
      },
      {
        day: 16,
        week: 4,
        weekday: "Monday",
        title: "Capstone Plan: 3 Short-Form Videos",
        video: youtube("short form video content batch editing workflow CapCut"),
        reference: youtube("3 short form video campaign examples"),
        task: "Create a capstone plan for 3 short-form videos from one set of internal instructions: educational, proof/authority, and CTA angle.",
        output: "Capstone editing plan",
        qa: ["Three angles planned", "Assets listed", "Style guide noted", "Deadline is realistic"],
      },
      {
        day: 17,
        week: 4,
        weekday: "Tuesday",
        title: "Capstone Edit 1",
        video: youtube("CapCut high retention short form edit tutorial captions b roll"),
        reference: youtube("educational reel edit example captions b roll"),
        task: "Create video 1 with a strong educational or problem-aware hook.",
        output: "Capstone video 1",
        qa: ["Hook is strong", "Captions are clean", "Audio is balanced", "CTA is included"],
      },
      {
        day: 18,
        week: 4,
        weekday: "Wednesday",
        title: "Capstone Edit 2",
        video: youtube("CapCut social media edit tutorial b roll captions pacing"),
        reference: youtube("authority proof short form video edit example"),
        task: "Create video 2 with different angle, pacing, B-roll, and caption treatment.",
        output: "Capstone video 2",
        qa: ["Distinct from video 1", "Visual interest is strong", "Branding is consistent", "Export is correct"],
      },
      {
        day: 19,
        week: 4,
        weekday: "Thursday",
        title: "Capstone Edit 3 and QA",
        video: youtube("CapCut final editing checklist captions audio export"),
        reference: youtube("CTA short form video edit example"),
        task: "Create video 3 and run QA on all capstone videos.",
        output: "Three videos plus QA checklist",
        qa: ["All videos checked", "Formats correct", "No caption errors", "Files organized"],
      },
      {
        day: 20,
        week: 4,
        weekday: "Friday",
        title: "Final Internal Walkthrough",
        video: youtube("video editing portfolio walkthrough explain editing decisions"),
        reference: youtube("video editing breakdown short form edit walkthrough"),
        task: "Record a 5-minute internal walkthrough explaining your edits, decisions, file organization, and QA results.",
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
          ${lesson.reference ? `<a class="secondary tiny-btn" href="${lesson.reference}" target="_blank" rel="noreferrer">Open Reference</a>` : ""}
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
