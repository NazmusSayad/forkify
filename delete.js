console.clear()
const fs = require("fs")
// directory path
const dirs = ["dist", ".parcel-cache"]

dirs.forEach((dir) => {
  if (!fs.existsSync(dir)) return

  // delete directory recursively
  fs.rm(dir, { recursive: true }, (err) => {
    if (err) {
      throw err
    }

    console.log(`${dir} is deleted!`)
  })
})
