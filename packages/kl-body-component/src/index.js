import { BodyComponent } from 'mjml-core'

const convertTargetsToData = ({ targets, defaultData = {} }) =>
  targets.reduce(
    (acc, { target, key }) => ({
      ...acc,
      [target]: key,
    }),
    defaultData,
  )

export default class KlBodyComponent extends BodyComponent {
  static dataComponent = []
  static name = ''

  static requiredAttributes = {
    id: 'string',
  }

  static allowedAttributes = this.constructor.dataComponent.reduce(
    (acc, { key, data: { type } }) => ({
      ...acc,
      [key]: type,
    }),
    this.constructor.requiredAttributes,
  )

  static defaultAttributes = this.constructor.dataComponent.reduce(
    (acc, { key, data: { dataDefault } }) =>
      dataDefault
        ? {
            ...acc,
            [key]: dataDefault,
          }
        : acc,
    {},
  )

  static dataCSSStyles = this.constructor.dataComponent.reduce(
    (acc, { data: { css } }) =>
      css.length
        ? {
            ...acc,
            ...convertTargetsToData({ targets: css }),
          }
        : acc,
    {},
  )

  static dataHTMLAttributes = this.constructor.dataComponent.reduce(
    (acc, { data: { attributes } }) =>
      attributes.length
        ? {
            ...acc,
            ...convertTargetsToData({ targets: attributes }),
          }
        : acc,
    {},
  )

  getStyles() {
    const dataStyles = Object.keys(this.constructor.dataCSSStyles).reduce(
      (acc, value) =>
        this.getAttribute(value) !== undefined
          ? {
              ...acc,
              [acc]: this.getAttribute(value),
            }
          : acc,
      {},
    )

    return { ...this.constructor.defaultCSSStyles, ...dataStyles }
  }

  getAttributes() {
    const dataAttributes = Object.keys(
      this.constructor.dataHTMLAttributes,
    ).reduce(
      (acc, value) =>
        this.getAttribute(value) !== undefined
          ? {
              ...acc,
              [acc]: this.getAttribute(value),
            }
          : acc,
      {},
    )

    return { ...this.constructor.defaultHTMLAttributes, ...dataAttributes }
  }

  htmlAttributes(attributes) {
    return super.htmlAttributes({
      id: `${this.getAttribute('id')}-${this.constructor
        .name}-${attributes.style}`,
      ...this.getAttributes(),
      ...attributes,
    })
  }
}
