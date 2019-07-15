import { klButton } from 'kl-types'
import KlBodyComponent from 'kl-body-component'

export default class KlButton extends KlBodyComponent {
  static endingTag = true
  static componentName = 'kl-button'
  static componentData = klButton

  static allowedAttributes = klButton.reduce(
    (acc, { key, data: { type } }) => ({
      ...acc,
      [key]: type,
    }),
    { id: 'string' },
  )

  static defaultAttributes = klButton.reduce(
    (acc, { key, data: { dataDefault } }) =>
      dataDefault
        ? {
            ...acc,
            [key]: dataDefault,
          }
        : acc,
    {},
  )

  static defaultCSSStyles = {
    table: {
      'border-collapse': 'separate',
      'line-height': '100%',
    },
    td: {
      cursor: 'auto',
    },
    content: {
      Margin: '0',
    },
  }

  static defaultHTMLAttributes = {
    table: {
      border: '0',
      cellpadding: '0',
      cellspacing: '0',
      role: 'presentation',
    },
    td: {
      align: 'center',
      role: 'presentation',
    },
  }

  render() {
    const tag = this.getAttribute('href') ? 'a' : 'p'

    return `
      <table
        ${this.htmlAttributes({ style: 'table' })}
      >
        <tr>
          <td
            ${this.htmlAttributes({ style: 'td' })}
          >
            <${tag}
              ${this.htmlAttributes({
                style: 'content',
                target: tag === 'a' ? this.getAttribute('target') : undefined,
              })}
            >
              ${this.getContent()}
            </${tag}>
          </td>
        </tr>
      </table>
    `
  }
}
