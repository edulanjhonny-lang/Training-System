# Agency Training Portal

This folder contains a 4-week subcontractor training system for website/SEO and video editing trainees.

## Files

- `SOP.md` - full training process, rules, scoring, QA, and graduation criteria.
- `index.html` - trainee portal.
- `admin.html` - separate admin dashboard.
- `styles.css` - portal design.
- `app.js` - curriculum, registration, approval, login, submissions, and progress tracking.
- `admin.js` - admin-only approvals and submission review.
- `server.js` - local shared backend for registrations, approvals, and submissions.
- `data.json` - created automatically when the server runs.
- `api/` - Vercel serverless API for online deployment.
- `supabase-setup.sql` - database tables and security setup for Supabase.
- `vercel.json` - Vercel project settings.

## How to Use

Best local test link after running the shared server:

```text
http://127.0.0.1:8766/
```

Open the trainee portal file:

```text
index.html
```

Open the admin dashboard:

```text
admin.html
```

Admin PIN for this prototype:

```text
2468
```

Allowed admin emails:

```text
edulanjhonny@gmail.com
celinecabanez@gmail.com
```

## Main Flow

1. Trainee registers.
2. Admin opens the separate Admin Dashboard and enters an allowed admin email plus PIN.
3. Admin approves the trainee.
4. Trainee logs in using their registered email.
5. Trainee opens daily lessons, watches the YouTube tutorial link, completes the task, and submits output.
6. Admin reviews submissions and marks them Pass, Revise, or Fail.

## Applicant Approval

Every new trainee registration is saved as `pending` and appears in the Applicants section of `admin.html`.

If the admin dashboard is already open while someone registers, click `Refresh Lists` or wait a few seconds for the list to refresh.

For reliable admin population, use `server.js` so both trainee and admin pages read from the same shared data file. Opening the HTML files directly uses browser local storage as a fallback only.

## Important Note

For online company use, deploy this folder to Vercel and connect it to Supabase. The browser does not need the Supabase service role key; only the Vercel API uses it as an environment variable.

## Free Deployment: Vercel + Supabase + Hostinger DNS

Use this folder as the Vercel project root:

```text
training-system
```

In Supabase:

1. Open your Supabase project.
2. Go to SQL Editor.
3. Paste and run the full contents of `supabase-setup.sql`.
4. Go to Project Settings > API.
5. Copy the Project URL.
6. Copy the `service_role` key. Keep this private.

In Vercel:

1. Import/deploy the `training-system` folder.
2. Add these Environment Variables:

```text
SUPABASE_URL=your Supabase Project URL
SUPABASE_SERVICE_ROLE_KEY=your Supabase service_role key
ADMIN_PIN=2468
ADMIN_EMAILS=edulanjhonny@gmail.com,celinecabanez@gmail.com
```

3. Add the custom domain:

```text
trainingsystem.embeds.store
```

In Hostinger DNS for `embeds.store`, add the DNS record Vercel shows. Usually it is:

```text
Type: CNAME
Name/Host: trainingsystem
Target/Value: cname.vercel-dns.com
```

Wait for DNS to verify in Vercel. After that, the live links will be:

```text
https://trainingsystem.embeds.store/index.html
https://trainingsystem.embeds.store/admin.html
```
