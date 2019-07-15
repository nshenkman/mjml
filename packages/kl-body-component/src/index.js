import { BodyComponent } from 'mjml-core'

const convertTargetsToData = ({ attributeKey, targets, defaultData = {} }) =>
  targets.reduce(
    (acc, { target, key }) => ({
      ...acc,
      [target]: acc[target]
        ? acc[target].concat({ attributeKey, key })
        : [{ attributeKey, key }],
    }),
    defaultData,
  )

export default class KlBodyComponent extends BodyComponent {
  static dataComponent = []
  static componentName = ''

  static requiredAttributes = {
    id: 'string',
  }

  dataCSSStyles = () =>
    this.constructor.componentData.reduce(
      (acc, { key, data: { css } }) =>
        css.length
          ? {
              ...acc,
              ...convertTargetsToData({
                attributeKey: key,
                targets: css,
                defaultData: acc,
              }),
            }
          : acc,
      {},
    )

  dataHTMLAttributes = () =>
    this.constructor.componentData.reduce(
      (acc, { key, data: { attributes } }) =>
        attributes.length
          ? {
              ...acc,
              ...convertTargetsToData({
                attributeKey: key,
                targets: attributes,
                defaultData: acc,
              }),
            }
          : acc,
      {},
    )

  getStyles() {
    const dataStylesKeys = this.dataCSSStyles()
    const dataStyles = Object.keys(dataStylesKeys).reduce((acc, dataKey) => {
      const keys = dataStylesKeys[dataKey]

      return {
        ...acc,
        [dataKey]: keys.reduce(
          (innerAcc, { attributeKey, key }) =>
            this.getAttribute(attributeKey) !== undefined
              ? {
                  ...innerAcc,
                  [key]: this.getAttribute(attributeKey),
                }
              : innerAcc,
          {},
        ),
      }
    }, {})

    return { ...this.constructor.defaultCSSStyles, ...dataStyles }
  }

  getAttributes() {
    const dataAttributeKeys = this.dataHTMLAttributes()
    const dataAttributes = Object.keys(
      dataAttributeKeys,
    ).reduce((acc, dataKey) => {
      const keys = dataAttributeKeys[dataKey]

      return {
        ...acc,
        [dataKey]: keys.reduce(
          (innerAcc, { attributeKey, key }) =>
            this.getAttribute(attributeKey) !== undefined
              ? {
                  ...innerAcc,
                  [key]: this.getAttribute(attributeKey),
                }
              : innerAcc,
          {},
        ),
      }
    }, {})

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
