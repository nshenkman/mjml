import widthParser from 'mjml-core/lib/helpers/widthParser'

const klImage = [
  {
    key: 'alt',
    data: {
      type: 'string',
      css: [],
      attributes: [
        {
          target: 'img',
          key: 'alt',
        },
      ],
    },
  },
  {
    key: 'href',
    data: {
      type: 'string',
      css: [],
      attributes: [
        {
          target: 'img',
          key: 'href',
        },
      ],
    },
  },
  {
    key: 'name',
    data: {
      type: 'string',
      css: [],
      attributes: [
        {
          target: 'link',
          key: 'name',
        },
      ],
    },
  },
  {
    key: 'src',
    data: {
      type: 'string',
      css: [],
      attributes: [
        {
          target: 'img',
          key: 'href',
        },
      ],
    },
  },
  {
    key: 'srcset',
    data: {
      type: 'string',
      css: [],
      attributes: [
        {
          target: 'img',
          key: 'srcset',
        },
      ],
    },
  },
  {
    key: 'title',
    data: {
      type: 'string',
      css: [],
      attributes: [
        {
          target: 'img',
          key: 'title',
        },
      ],
    },
  },
  {
    key: 'rel',
    data: {
      type: 'string',
      css: [],
      attributes: [
        {
          target: 'link',
          key: 'rel',
        },
      ],
    },
  },
  {
    key: 'align',
    data: {
      type: 'enum(left,center,right)',
      css: [],
      attributes: [
        {
          target: 'container',
          key: 'align',
        },
      ],
      defaultData: 'center',
    },
  },
  {
    key: 'border',
    data: {
      type: 'string',
      css: [
        {
          target: 'img',
          key: 'border',
        },
      ],
      attributes: [],
      defaultData: '0',
    },
  },
  {
    key: 'border-bottom',
    data: {
      type: 'string',
      css: [
        {
          target: 'img',
          key: 'border-bottom',
        },
      ],
      attributes: [],
    },
  },
  {
    key: 'border-left',
    data: {
      type: 'string',
      css: [
        {
          target: 'img',
          key: 'border-left',
        },
      ],
      attributes: [],
    },
  },
  {
    key: 'border-right',
    data: {
      type: 'string',
      css: [
        {
          target: 'img',
          key: 'border-right',
        },
      ],
      attributes: [],
    },
  },
  {
    key: 'border-top',
    data: {
      type: 'string',
      css: [
        {
          target: 'img',
          key: 'border-top',
        },
      ],
      attributes: [],
    },
  },
  {
    key: 'border-radius',
    data: {
      type: 'unit(px,%){1,4}',
      css: [
        {
          target: 'img',
          key: 'border-radius',
        },
      ],
      attributes: [],
    },
  },
  {
    key: 'container-background-color',
    data: {
      type: 'color',
      css: [
        {
          target: 'container',
          key: 'background',
        },
      ],
      attributes: [],
    },
  },
  {
    key: 'fluid-on-mobile',
    data: {
      type: 'boolean',
      css: [],
      attributes: [
        {
          target: 'table',
          key: 'class',
          customValue: v => (v ? 'full-width-mobile' : null),
        },
        {
          target: 'td',
          key: 'class',
          customValue: v => (v ? 'full-width-mobile' : null),
        },
      ],
    },
  },
  {
    key: 'full-width',
    data: {
      type: 'boolean',
      css: [
        {
          target: 'img',
          key: 'max-width',
          customValue: v => (v ? '100%' : null),
        },
        {
          target: 'img',
          key: 'min-width',
          customValue: v => (v ? '100%' : null),
        },
        {
          target: 'table',
          key: 'max-width',
          customValue: v => (v ? '100%' : null),
        },
        {
          target: 'table',
          key: 'min-width',
          customValue: v => (v ? '100%' : null),
        },
        {
          target: 'table',
          key: 'width',
          customValue: v => {
            const { parsedWidth, unit } = widthParser(v)

            return v ? `${parsedWidth}${unit}` : null
          },
        },
      ],
      attributes: [],
    },
  },
  {
    key: 'padding',
    data: {
      type: 'unit(px,%){1,4}',
      css: [],
      attributes: [],
      defaultData: '10px 25px',
    },
  },
  {
    key: 'padding-bottom',
    data: {
      type: 'unit(px,%)',
      css: [],
      attributes: [],
    },
  },
  {
    key: 'padding-left',
    data: {
      type: 'unit(px,%)',
      css: [],
      attributes: [],
    },
  },
  {
    key: 'padding-right',
    data: {
      type: 'unit(px,%)',
      css: [],
      attributes: [],
    },
  },
  {
    key: 'padding-top',
    data: {
      type: 'unit(px,%)',
      css: [],
      attributes: [],
    },
  },
  {
    key: 'target',
    data: {
      type: 'string',
      css: [],
      attributes: [
        {
          target: 'link',
          key: 'target',
        },
      ],
      defaultData: '_blank',
    },
  },
  {
    key: 'width',
    data: {
      type: 'unit(px)',
      css: [],
      attributes: [],
    },
  },
  {
    key: 'height',
    data: {
      type: 'unit(px)',
      css: [],
      attributes: [],
      defaultData: 'auto',
    },
  },
]

export default klImage
