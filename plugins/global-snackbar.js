import Config from '../services/Config'

export default ({ app, store }, inject) => {
  // Set the function directly on the context.app object
  inject('myInjectedFunction', string =>
    console.log(store.state.globalSnackbarSettings)
  )

  inject('showSnackBar', settings => {
    store.commit(Config.mutations.global.SHOW_SNACKBAR, settings)

    setTimeout(() => {
      store.commit(Config.mutations.global.HIDE_SNACKBAR)
    }, settings.timeout)
  })
}
