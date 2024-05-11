export const enum UserRole {
    admin = "admin",
    editor = "editor",
    guest = "guest",
  }
  type Description = "Admin User" | "Editor User" | "Guest User";
  type UserDerscription = Record<UserRole, Description>;
  
  const RoleDescription: UserDerscription = {
    admin: "Admin User",
    editor: "Editor User",
    guest: "Guest User",
  };