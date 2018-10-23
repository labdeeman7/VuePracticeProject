import UserService from '../services/UserService'
export const state = () => ({
  appname: 'ProcureEase',
  organizationId: null,
  user: UserService.getUserFromLocalStorage(),
  allusers: [],
  allroles: [],
  alldepartments: [],
  globalSnackbarSettings: {
    show: false
  },
  userInView: {},
  showViewUserDialog: false,
  userToEdit: {
    Roles: []
  },
  showEditUserDialog: false
})

export const getters = {
  isAuthenticated: state => {
    return !!state.user
  }
}

export const mutations = {
  SET_USER(state, userData) {
    state.user = userData
  },
  SET_ORGANIZATION_ID(state, Id) {
    state.organizationId = Id
  },
  LOAD_USERS(state, users) {
    state.allusers = users
  },
  LOAD_ROLES(state, roles) {
    state.allroles = roles
  },
  LOAD_DEPARTMENTS(state, departments) {
    state.alldepartments = departments
  },
  SHOW_SNACKBAR(state, settings) {
    state.globalSnackbarSettings = settings
  },
  HIDE_SNACKBAR(state) {
    state.globalSnackbarSettings = {
      show: false
    }
  },
  VIEW_USER(state, user) {
    state.showViewUserDialog = true
    state.userInView = user
  },
  CLOSE_VIEW_USER_DIALOG(state) {
    state.showViewUserDialog = false
    state.userInView = {}
  },
  OPEN_USER_EDIT_DIALOG(state, user) {
    state.showEditUserDialog = true
    state.userToEdit = user
  },
  CLOSE_USER_EDIT_DIALOG(state) {
    state.showEditUserDialog = false
  }
}
