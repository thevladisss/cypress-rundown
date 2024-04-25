import notifier from "node-notifier";


export const onBeforeRun = (details: Cypress.BeforeRunDetails) => {
  notifier.notify({
    title: "Cypress",
    message: "Running tests",
  })
}

export const onAfterRun = (results: Cypress.AfterRunDetails) => {

  if (results.totalFailed > 0) {

    notifier.notify({
      title: "Cypress",
      message: `Tests failed. \nTotal failed: ${results.totalFailed} / ${results.totalTests}.`,
      actions: [
        "Re-run failed", "Rerun all"
      ],
      sound: true
    })

  }
  else {
    notifier.notify({
      title: "Cypress",
      message: "Tests finished running",
    })
  }
}
