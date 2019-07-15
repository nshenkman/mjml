import min from 'lodash/min'

import { BodyComponent } from 'kl-body-component'
import { klImage } from 'kl-types'

export default class MjImage extends BodyComponent {
  static tagOmission = true

  static componentName = 'kl-button'
  static componentData = klImage

  static allowedAttributes = klImage.reduce(
    (acc, { key, data: { type } }) => ({
      ...acc,
      [key]: type,
    }),
    { id: 'string' },
  )

  static defaultAttributes = klImage.reduce(
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
    img: {
      display: 'block',
      outline: 'none',
      'text-decoration': 'none',
      width: '100%',
    },
    table: {
      'border-collapse': 'collapse',
      'border-spacing': '0px',
    },
  }

  static defaultHTMLAttributes = {
    table: {
      border: '0',
      cellpadding: '0',
      cellspacing: '0',
      role: 'presentation',
    },
  }

  getStyles() {
    const width = this.getContentWidth()
    const fullWidth = this.getAttribute('full-width') === 'full-width'

    const { parsedWidth, unit } = widthParser(width)

    return {
      img: {
        border: this.getAttribute('border'),
        'border-left': this.getAttribute('left'),
        'border-right': this.getAttribute('right'),
        'border-top': this.getAttribute('top'),
        'border-bottom': this.getAttribute('bottom'),
        'border-radius': this.getAttribute('border-radius'),
        display: 'block',
        outline: 'none',
        'text-decoration': 'none',
        height: this.getAttribute('height'),
        'min-width': fullWidth ? '100%' : null,
        width: '100%',
        'max-width': fullWidth ? '100%' : null,
      },
      td: {
        width: fullWidth ? null : `${parsedWidth}${unit}`,
      },
      table: {
        'min-width': fullWidth ? '100%' : null,
        'max-width': fullWidth ? '100%' : null,
        width: fullWidth ? `${parsedWidth}${unit}` : null,
        'border-collapse': 'collapse',
        'border-spacing': '0px',
      },
    }
  }

  getContentWidth() {
    const width = this.getAttribute('width')
      ? parseInt(this.getAttribute('width'), 10)
      : Infinity

    const { box } = this.getBoxWidths()

    return min([box, width])
  }

  renderImage() {
    const height = this.getAttribute('height')

    const img = `
      <img
        ${this.htmlAttributes({
          alt: this.getAttribute('alt'),
          height: height && (height === 'auto' ? height : parseInt(height, 10)),
          src: this.getAttribute('src'),
          srcset: this.getAttribute('srcset'),
          style: 'img',
          title: this.getAttribute('title'),
          width: this.getContentWidth(),
        })}
      />
    `

    if (this.getAttribute('href')) {
      return `
        <a
          ${this.htmlAttributes({
            style: 'link',
            href: this.getAttribute('href'),
            target: this.getAttribute('target'),
            rel: this.getAttribute('rel'),
            name: this.getAttribute('name'),
          })}
        >
          ${img}
        </a>
      `
    }

    return img
  }

  headStyle = breakpoint => `
    @media only screen and (max-width:${breakpoint}) {
      table.full-width-mobile { width: 100% !important; }
      td.full-width-mobile { width: auto !important; }
    }
  `

  render() {
    return `
      <table
        ${this.htmlAttributes({
          border: '0',
          cellpadding: '0',
          cellspacing: '0',
          role: 'presentation',
          style: 'table',
          class: this.getAttribute('fluid-on-mobile')
            ? 'full-width-mobile'
            : null,
        })}
      >
        <tbody>
          <tr>
            <td ${this.htmlAttributes({
              style: 'td',
              class: this.getAttribute('fluid-on-mobile')
                ? 'full-width-mobile'
                : null,
            })}>
              ${this.renderImage()}
            </td>
          </tr>
        </tbody>
      </table>
    `
  }
}
