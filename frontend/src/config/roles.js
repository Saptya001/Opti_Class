// Define roles and permissions

export const ROLES = {
  ADMIN: "admin",
  TEACHER: "teacher",
  STUDENT: "student",
};

export const ROLE_PERMISSIONS = {
  [ROLES.ADMIN]: ["manage_users", "manage_timetable", "view_reports"],
  [ROLES.TEACHER]: ["view_timetable", "update_class"],
  [ROLES.STUDENT]: ["view_timetable"],
};

// Helper function
export const hasPermission = (role, permission) => {
  return ROLE_PERMISSIONS[role]?.includes(permission) || false;
};
