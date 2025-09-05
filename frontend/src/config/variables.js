// Central place for environment variables & constants

const variables = {
  API_URL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
  APP_NAME: "OptiClass Scheduler",
  THEME_COLOR: "#2563eb", // Tailwind blue-600
};

export default variables;
