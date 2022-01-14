#!/usr/bin/env node

const a = process.argv.slice(2)
const refresh = a.includes('--refresh') && a.splice(a.indexOf('--refresh'), 1)
const name = a[0]
require('is-name-taken').isTaken(process.argv[2], { optimistic: !refresh }).then(res => {
  if (typeof res === 'string') {
    console.error('package name exists as:', res)
    process.exit(1)
  } else if (res === true) {
    console.error('package name is invalid:', name)
    process.exit(1)
  } else if (res === false) {
    console.log('package name available:', name)
    process.exit(0)
  } else {
    console.log('something weird happened:', res)
    process.exit(1)
  }
})
