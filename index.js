const express = require('express')
const mjml = require('./packages/mjml')

const { registerDependencies } = require('./packages/mjml-validator/lib')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3001
const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  )
  next()
})

/**
 * Override the validation parameters by specifying that
 * the mj-wrapper element CAN have another mj-wrapper as a child component.
 */
registerDependencies({
  'mj-wrapper': ['mj-wrapper', 'mj-hero', 'mj-raw', 'mj-section'],
  'mj-body': ['mj-raw', 'mj-section', 'mj-wrapper', 'mj-hero', 'mj-text'],
})

app.use(bodyParser.text())

app.get('/ping', (req, res) => {
  res.send('pong')
})
app.post('/', (req, res) => {
  console.log('running')
  if (req.body) {
    if (req.headers['content-type'] !== 'text/plain') {
      res
        .type('json')
        .status(400)
        .send(
          JSON.stringify({
            error: 'Only text/plain content-type is authorized.',
          }),
        )
      return
    }

    /**
     * Query params
     */
    const comments = req.query.comments === 'true'
    const beautify = req.query.beautify === 'true'
    const minify = req.query.minify === 'true'
    const validationLevel = req.query.validation || 'strict'

    try {
      const output = mjml(req.body, {
        keepComments: comments,
        beautify,
        minify,
        validationLevel,
      })

      res
        .type('html')
        .status(200)
        .send(output.html)
    } catch (e) {
      res
        .type('json')
        .status(422)
        .send(
          JSON.stringify({
            error: e.message,
          }),
        )
    }
  } else {
    res
      .type('json')
      .status(400)
      .send(
        JSON.stringify({
          error: 'Missing content on the body request.',
        }),
      )
  }
})

app.listen(PORT, () => {
  console.log(`MJML to HTML started on port ${PORT}`)
})
