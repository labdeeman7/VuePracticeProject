const Utility = {
  parseVueData: parseVueData,
  buildValidationRules: buildValidationRules
}

function parseVueData(data) {
  return JSON.parse(JSON.stringify(data))
} //parseVueData

function buildValidationRules(rules) {
  let rulesObject = {}

  for (ruleKey in rules) {
    switch (ruleKey) {
      case 'required':
        rulesObject.required = rules[ruleKey]
          ? value => !!value || 'Required.'
          : null
        break

      case 'max':
        rulesObject.counter = value =>
          value.length <= rules[ruleKey] || `Max ${rules[ruleKey]} characters`
        break

      case 'email':
        rulesObject.email = value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        }
        break

      default:
        break
    }
  }

  return rulesObject
} //buildValidationRules

export default Utility
