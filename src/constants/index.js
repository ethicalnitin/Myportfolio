// All site copy lives here so the portfolio and the resume (tools/resume.html)
// can be kept in step. Every claim below should be one you can defend in an
// interview; if a number changes, change it in both places.

export const PROFILE = {
  name: "Nitin Srivastava",
  role: "Backend engineer",
  stack: "Node.js · Java / Spring Boot",
  location: "Gurugram, India",
  email: "srivastava.nitin0908@gmail.com",
  github: "https://github.com/ethicalnitin",
  linkedin: "https://www.linkedin.com/in/ethicalnitin",
  leetcode: "https://leetcode.com/raptormafia",
  resume: "/Nitin_Srivastava_Resume.pdf",
  source: "https://github.com/ethicalnitin/Myportfolio",
};

export const HERO = {
  intro:
    "I build backend services: APIs, data models, and integrations with systems that were never designed to be integrated. I was the sole backend developer of Jurident, an AI legal-tech platform for Indian lawyers, and I'm now a Software Engineer at LTIMindtree, analysing application network traffic on a Google security engagement.",
  facts: [
    { term: "Now", detail: "Software Engineer, LTIMindtree", sub: "Sep 2025 – present" },
    { term: "Previously", detail: "Sole backend developer, Jurident", sub: "Valsco Technology · Jan – Aug 2025" },
    { term: "Recognition", detail: "MSME Hackathon winner", sub: "Jurident team · 95% government grant" },
    { term: "Looking for", detail: "Backend and full-stack SDE roles", sub: "Node.js or Java / Spring Boot" },
  ],
};

export const CASE_STUDIES = [
  {
    id: "jurident",
    kind: "Case study · Production",
    title: "Jurident: the backend for an AI legal-tech platform",
    summary:
      "Jurident is an AI legal-tech platform for Indian lawyers, offering AI-assisted drafting, an in-app legal assistant and court-case lookups. As the only backend developer, I designed, built and deployed the whole backend: the API, the MongoDB data model, the integrations with court and bar-council records, and the OpenAI-based assistant.",
    meta: [
      { term: "Role", detail: "Sole backend developer" },
      { term: "When", detail: "Valsco Technology · Jan – Aug 2025" },
      { term: "Stack", detail: "Node.js, Express, MongoDB, Redis, OpenAI API, DigitalOcean" },
    ],
    links: [{ label: "jurident.com", href: "https://jurident.com" }],
    sourceNote: "Source is proprietary. I'm happy to walk through the design in an interview.",
    sections: [
      {
        heading: "System context",
        system: {
          client: { name: "Jurident web app", note: "lawyers" },
          core: { name: "Jurident API", note: "Node.js / Express on DigitalOcean · built and run by me" },
          deps: [
            { name: "MongoDB", note: "core data model, indexed for the hot queries" },
            { name: "Redis", note: "cache for repeated reads" },
            { name: "OpenAI API", note: "JuriAssistance, the in-app assistant" },
            { name: "eCourts portals", note: "High Court and District Court case status · no public API", external: true },
            { name: "Bar Council of Delhi register", note: "advocate enrolment check · no API", external: true },
          ],
        },
      },
      {
        heading: "The hard part: court records without an API",
        paragraphs: [
          "Lawyers want the current status of their High Court and District Court cases. That data sits behind the government eCourts portals, which offer no public API. Every lookup is a form submission tied to a session cookie and gated by an image CAPTCHA.",
          "I built the lookup as a two-step relay. The backend fetches the CAPTCHA inside a portal session and hands both the image and the session to the lawyer. Once they answer it, the backend replays that same session for the case query and returns clean JSON.",
        ],
        trace: {
          caption: "Case-status lookup, simplified.",
          lanes: ["Browser", "Jurident API", "eCourts portal"],
          steps: [
            { from: 0, to: 1, label: "POST /captcha/highcourt", detail: "sends any portal cookies it already holds" },
            { from: 1, to: 2, label: "GET CAPTCHA image", detail: "inside the same portal session" },
            { from: 2, to: 1, label: "image + Set-Cookie", detail: "portal issues or refreshes the session id", response: true },
            { from: 1, to: 0, label: "{ captchaImage, cookies }", detail: "Base64 image; cookies parsed for the client to keep", response: true },
            { at: 0, label: "Lawyer reads and types the CAPTCHA" },
            { from: 0, to: 1, label: "POST /api/case", detail: "case details + CAPTCHA answer + cookies" },
            { from: 1, to: 2, label: "POST case query", detail: "replayed in the same portal session" },
            { from: 2, to: 1, label: "case data", response: true },
            { from: 1, to: 0, label: "normalised JSON", detail: "one stable shape for the frontend", response: true },
          ],
        },
        after:
          "The same submit-and-parse approach, using Cheerio to read HTML, powers advocate enrolment checks against the Bar Council of Delhi register. Together the lookups serve 500+ requests a day.",
      },
      {
        heading: "Decisions and trade-offs",
        decisions: [
          {
            decision: "Relay the CAPTCHA to the user instead of solving it",
            why: "The lookup stays a human action on the portal. The backend never tries to defeat the portal's bot protection.",
            tradeoff: "Each lookup costs an extra round-trip and a few seconds of the lawyer's attention.",
          },
          {
            decision: "The client holds the portal cookies, so the API stays stateless",
            why: "Any API instance can serve either step of a lookup without a shared session store.",
            tradeoff: "The client carries opaque third-party cookies, and the API must parse and pass them back correctly on every call.",
          },
          {
            decision: "Normalise portal responses into one JSON shape",
            why: "The frontend codes against a stable contract. When the portal changes, the fix lives in one parser.",
            tradeoff: "The parser is coupled to fields and markup the portal can change without notice.",
          },
          {
            decision: "Profile before indexing or caching",
            why: "Optimisation effort went to the endpoints that were actually slow.",
            tradeoff: "Cached reads can go stale, so every cached key needs an expiry.",
          },
        ],
      },
      {
        heading: "Other work on the platform",
        bullets: [
          "Built JuriAssistance, an in-app legal assistant on the OpenAI API that answers common user questions, so routine queries don't need a person.",
          "Profiled slow endpoints, then added MongoDB indexes for the slow query patterns and a Redis cache in front of repeated reads.",
          "Owned deployment on DigitalOcean and kept the service running as the only backend engineer.",
        ],
      },
      {
        heading: "What I'd change next time",
        bullets: [
          "Fixture tests for the parsers: save real portal responses and assert the parsed output, so a markup change fails CI instead of failing a lawyer's lookup.",
          "Keep portal cookies and request headers out of logs. My early prototype logged them in full while I was debugging the session flow.",
          "Rate-limit lookups per user, to protect the public portal and stop any one account from exhausting the integration.",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "Jurident is live at jurident.com and serves 10,000+ lawyers. Our team won the MSME Hackathon with it, which brought a government grant covering 95% of project funding.",
        ],
      },
    ],
  },
  {
    id: "estateconnect",
    kind: "Case study · Training capstone",
    title: "EstateConnect: a Spring Boot and Angular real-estate platform",
    summary:
      "I built this during LTIMindtree's Java full-stack training. It covers property listings, buyer inquiries and feedback, with separate user and admin experiences. It's where I learned the Spring stack end to end, and the review notes below list what I'd fix before calling it production-ready.",
    meta: [
      { term: "Context", detail: "LTIMindtree Java full-stack training, 2025 – 26" },
      { term: "Scope", detail: "Backend and frontend" },
      { term: "Stack", detail: "Java 17, Spring Boot 3, Spring Security, Spring Data JPA, MySQL, Angular 16" },
    ],
    links: [],
    sections: [
      {
        heading: "API surface: 22 endpoints",
        endpoints: [
          { path: "/api/register · /api/login", count: 2, note: "BCrypt-hashed credentials; login returns a JWT" },
          { path: "/api/send-otp · /api/verify-otp", count: 2, note: "email OTP before an account is created" },
          { path: "/api/properties", count: 5, note: "create, read, list, update, delete" },
          { path: "/api/inquiries", count: 6, note: "CRUD plus inquiries by user" },
          { path: "/api/feedback", count: 6, note: "create, read, list, by user, delete, user lookup" },
          { path: "/api/ai/chat", count: 1, note: "Gemini-backed assistant" },
        ],
      },
      {
        heading: "How it's built",
        bullets: [
          "Layered design: controllers handle HTTP, services (interface plus implementation) hold the business rules, and Spring Data JPA repositories handle persistence.",
          "Five JPA/Hibernate entities. Inquiries and feedback each hold @ManyToOne references to a user and a property, and lookups such as findByEmail are derived queries.",
          "Domain exceptions map to explicit status codes, for example 409 for a duplicate listing and 400 for an invalid OTP.",
          "JWT authentication: a custom OncePerRequestFilter reads the Bearer token, validates it and populates the SecurityContext. Passwords are hashed with BCrypt, and an Angular HTTP interceptor attaches the token to every API call.",
          "Signup OTP: a SecureRandom 6-digit code sent with Spring Mail over SMTP/STARTTLS. It's valid for 5 minutes and deleted once used.",
          "An Angular 16 frontend with 23 components, including an admin inquiry dashboard (pending and high-priority views), property search with filters and price sorting, an EMI calculator and the Gemini assistant.",
        ],
      },
      {
        heading: "Review notes: what I'd fix next",
        bullets: [
          "The security filter chain ends in anyRequest().permitAll(). Tokens are validated when present but never required, so the user/admin split is enforced only in the Angular UI. The fix is route rules (permit the auth endpoints, require ADMIN for property writes, authenticate everything else) plus a STATELESS session policy.",
          "Error handling is per-controller: login answers 201 and unexpected failures answer 409. I'd move it into a @RestControllerAdvice that returns 401 for bad credentials and 500 for unexpected errors.",
          "The MockMvc tests in the repository came with the training platform. I'd add my own that assert 401 without a token and 403 when a user calls an admin route.",
          "OTP codes are stored in plain text with no attempt limit. I'd store a hash and cap attempts per code.",
        ],
      },
    ],
  },
];

export const EXPERIENCES = [
  {
    company: "LTIMindtree",
    role: "Software Engineer",
    period: "Sep 2025 – present",
    points: [
      "Google client engagement, application security analysis: I analyse ~10 applications a day, capturing and inspecting their network traffic and API calls with Wireshark and HTTP Toolkit to identify and report malicious behaviour.",
      "Completed LTIMindtree's Java full-stack training (Java 17, Spring Boot 3, Spring Security, Angular 16) and delivered the EstateConnect capstone.",
    ],
    caseStudy: { label: "EstateConnect case study", href: "#estateconnect" },
  },
  {
    company: "Valsco Technology",
    role: "Backend Developer · Jurident",
    period: "Jan 2025 – Aug 2025",
    points: [
      "Sole backend developer: designed, built and deployed the Node.js/Express + MongoDB backend on DigitalOcean for a platform serving 10,000+ lawyers.",
      "Built case-status lookups on the eCourts High Court and District Court portals, which have no public API, by relaying the portal session and CAPTCHA to the user. They handle 500+ lookups a day.",
      "Built JuriAssistance, an in-app legal assistant on the OpenAI API.",
      "Profiled slow endpoints and added MongoDB indexes and Redis caching for repeated reads.",
    ],
    caseStudy: { label: "Jurident case study", href: "#jurident" },
  },
];

// Skills paired with where they were actually used. No ratings or bars.
export const SKILLS = [
  { area: "Backend · Node", tools: "Node.js, Express, REST API design", where: "Jurident, in production" },
  { area: "Backend · Java", tools: "Java 17, Spring Boot 3, Spring Security, Spring Data JPA, Hibernate", where: "EstateConnect" },
  { area: "Data", tools: "MongoDB and indexing, Redis caching, MySQL", where: "Jurident; EstateConnect" },
  { area: "Auth & security", tools: "JWT, BCrypt, email OTP, Wireshark, HTTP Toolkit", where: "EstateConnect; LTIMindtree security engagement" },
  { area: "Integrations", tools: "Session and cookie handling, Cheerio HTML parsing, OpenAI API, Gemini API, SMTP", where: "Jurident; EstateConnect" },
  { area: "Frontend", tools: "React, Angular 16, TypeScript", where: "This site; EstateConnect" },
  { area: "Tooling", tools: "Git, GitHub, Postman, DigitalOcean", where: "Every project; DigitalOcean for Jurident" },
  { area: "Fundamentals", tools: "Data structures and algorithms in C++", where: "400+ LeetCode problems, peak rating 1733" },
];

export const BACKGROUND = [
  { term: "Education", detail: "B.Tech, Computer Science & Engineering", sub: "Graphic Era University, Dehradun · 2021 – 2025 · CGPA 7.9/10" },
  { term: "Recognition", detail: "MSME Hackathon winner", sub: "Jurident team · government grant covering 95% of project funding" },
  { term: "Problem solving", detail: "400+ LeetCode problems", sub: "Peak contest rating 1733", href: PROFILE.leetcode },
  { term: "Certifications", detail: "Generative AI (Google) · API Fundamentals (Postman)" },
];
