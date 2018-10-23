let base_url = "https://f978d8ae-3b54-48ed-bfb9-ab6b97aaecc9.mock.pstmn.io/";
let users_endpoint = `${base_url}Users/`;
const Config = {
  base_url: base_url,
  local_storage: {
    user: "pe-user"
  },
  base_colors: {
    error: "#d9534f",
    success: "#5cb85c",
    primary: "#428bca",
    info: "#5bc0de"
  },
  mutations: {
    global: {
      SET_USER: "SET_USER",
      SET_ORGANIZATION_ID: "SET_ORGANIZATION_ID",
      LOAD_USERS: "LOAD_USERS",
      LOAD_ROLES: "LOAD_ROLES",
      LOAD_DEPARTMENTS: "LOAD_DEPARTMENTS",
      SHOW_SNACKBAR: "SHOW_SNACKBAR",
      HIDE_SNACKBAR: "HIDE_SNACKBAR",
      VIEW_USER: "VIEW_USER",
      CLOSE_VIEW_USER_DIALOG: "CLOSE_VIEW_USER_DIALOG",
      OPEN_USER_EDIT_DIALOG: "OPEN_USER_EDIT_DIALOG",
      CLOSE_USER_EDIT_DIALOG: "CLOSE_USER_EDIT_DIALOG"
    },
    roles: {
      LOAD_PERMISSIONS: "LOAD_PERMISSIONS",
      VIEW_ROLE: "VIEW_ROLE",
      CLOSE_VIEW_ROLE_DIALOG: "CLOSE_VIEW_ROLE_DIALOG",
      OPEN_ROLE_EDIT_DIALOG: "OPEN_ROLE_EDIT_DIALOG",
      CLOSE_ROLE_EDIT_DIALOG: "CLOSE_ROLE_EDIT_DIALOG"
    }
  },
  end_points: {
    login: `${users_endpoint}Login`,
    all_users: `${users_endpoint}GetAllUsers`,
    all_roles: `${users_endpoint}GetAllRoles`,
    all_departments: `${base_url}Departments`,
    add_user: `${users_endpoint}Add`,
    edit_user: `${users_endpoint}EditUser`
  }
};

export default Config;
