import {
  DataStyleConfig,
  DisplayConfig,
  EffectsConfig,
  FontsConfig,
  MailchimpConfig,
  ProtectedRoutesConfig,
  RoutesConfig,
  SameAsConfig,
  SchemaConfig,
  SocialSharingConfig,
  StyleConfig,
} from "@/types";
import { home } from "./index";

import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

// ------------------------------
// Fonts
// ------------------------------
const heading = GeistSans;
const body = GeistSans;
const label = GeistSans;
const code = GeistMono;

const fonts: FontsConfig = {
  heading,
  body,
  label,
  code,
};

// ------------------------------
// Base URL and routes
// ------------------------------
const baseURL: string = "https://demo.magic-portfolio.com";

const routes: RoutesConfig = {
  "/": true,
  "/about": true,
  "/work": true,
  "/blog": true,
  "/gallery": true,
};

const display: DisplayConfig = {
  location: true,
  time: true,
  themeSwitcher: true,
};

const protectedRoutes: ProtectedRoutesConfig = {
  "/work/automate-design-handovers-with-a-figma-to-code-pipeline": true,
};

// ------------------------------
// Style configuration
// ------------------------------
const style: StyleConfig = {
  theme: "system",
  neutral: "gray",
  brand: "cyan",
  accent: "red",
  solid: "contrast",
  solidStyle: "flat",
  border: "playful",
  surface: "translucent",
  transition: "all",
  scaling: "100",
};

// ------------------------------
// Chart/Data style
// ------------------------------
const dataStyle: DataStyleConfig = {
  variant: "gradient",
  mode: "categorical",
  height: 24,
  axis: { stroke: "var(--neutral-alpha-weak)" },
  tick: { fill: "var(--neutral-on-background-weak)", fontSize: 11, line: false },
};

// ------------------------------
// Effects
// ------------------------------
const effects: EffectsConfig = {
  mask: { cursor: false, x: 50, y: 0, radius: 100 },
  gradient: { display: false, opacity: 100, x: 50, y: 60, width: 100, height: 50, tilt: 0, colorStart: "accent-background-strong", colorEnd: "page-background" },
  dots: { display: true, opacity: 40, size: "2", color: "brand-background-strong" },
  grid: { display: false, opacity: 100, color: "neutral-alpha-medium", width: "0.25rem", height: "0.25rem" },
  lines: { display: false, opacity: 100, color: "neutral-alpha-weak", size: "16", thickness: 1, angle: 45 },
};

// ------------------------------
// Mailchimp
// ------------------------------
const mailchimp: MailchimpConfig = {
  action: "https://url/subscribe/post?parameters",
  effects: {
    mask: { cursor: true, x: 50, y: 0, radius: 100 },
    gradient: { display: true, opacity: 90, x: 50, y: 0, width: 50, height: 50, tilt: 0, colorStart: "accent-background-strong", colorEnd: "static-transparent" },
    dots: { display: true, opacity: 20, size: "2", color: "brand-on-background-weak" },
    grid: { display: false, opacity: 100, color: "neutral-alpha-medium", width: "0.25rem", height: "0.25rem" },
    lines: { display: false, opacity: 100, color: "neutral-alpha-medium", size: "16", thickness: 1, angle: 90 },
  },
};

// ------------------------------
// Schema / SEO
// ------------------------------
const schema: SchemaConfig = {
  logo: "",
  type: "Organization",
  name: "MB",
  description: home.description,
  email: "boukouchmohamed7@gmail.com",
};

// ------------------------------
// Social links
// ------------------------------
const sameAs: SameAsConfig = {
  threads: "https://www.threads.com/@once_ui",
  linkedin: "https://www.linkedin.com/company/once-ui/",
  discord: "https://discord.com/invite/5EyAQ4eNdS",
};

// ------------------------------
// Social sharing
// ------------------------------
const socialSharing: SocialSharingConfig = {
  display: true,
  platforms: {
    x: true,
    linkedin: true,
    facebook: false,
    pinterest: false,
    whatsapp: false,
    reddit: false,
    telegram: false,
    email: true,
    copyLink: true,
  },
};

export {
  display,
  mailchimp,
  routes,
  protectedRoutes,
  baseURL,
  fonts,
  style,
  schema,
  sameAs,
  socialSharing,
  effects,
  dataStyle,
};
