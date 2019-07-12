const klButton = [
  {
    key: 'align',
    data: {
      type: 'enum(left,center,right)',
      attributes: [
        {
          target: 'td',
          key: 'align',
        },
      ],
      css: [],
      dataDefault: 'center',
    },
  },
  {
    key: 'background-color',
    data: {
      type: 'color',
      attributes: [
        {
          target: 'td',
          key: 'bgcolor',
        },
      ],
      css: [
        {
          target: 'td',
          key: 'background',
        },
        {
          target: 'content',
          key: 'background',
        },
      ],
      dataDefault: '#414141',
    },
  },
  {
    key: 'border-bottom',
    data: {
      type: 'string',
      attributes: [],
      css: [
        {
          target: 'td',
          key: 'border-bottom',
        },
      ],
    },
  },
  {
    key: 'border-left',
    data: {
      type: 'string',
      attributes: [],
      css: [
        {
          target: 'td',
          key: 'border-left',
        },
      ],
    },
  },
  {
    key: 'border-radius',
    data: {
      type: 'string',
      attributes: [],
      css: [
        {
          target: 'td',
          key: 'border-radius',
        },
      ],
      dataDefault: '3px',
    },
  },
  {
    key: 'border-right',
    data: {
      type: 'string',
      attributes: [],
      css: [
        {
          target: 'td',
          key: 'border-right',
        },
      ],
    },
  },
  {
    key: 'border-top',
    data: {
      type: 'string',
      attributes: [],
      css: [
        {
          target: 'td',
          key: 'border-top',
        },
      ],
    },
  },
  {
    key: 'border',
    data: {
      type: 'string',
      attributes: [],
      css: [
        {
          target: 'td',
          key: 'border',
        },
      ],
      dataDefault: 'none',
    },
  },
  {
    key: 'color',
    data: {
      type: 'color',
      attributes: [],
      css: [
        {
          target: 'content',
          key: 'color',
        },
      ],
      dataDefault: '#ffffff',
    },
  },
  {
    key: 'container-background-color',
    data: {
      type: 'color',
      attributes: [],
      css: [
        {
          target: 'container',
          key: 'background',
        },
      ],
    },
  },
  {
    key: 'font-family',
    data: {
      type: 'string',
      attributes: [],
      css: [
        {
          target: 'content',
          key: 'font-family',
        },
      ],
      dataDefault: 'Ubuntu, Helvetica, Arial, sans-serif',
    },
  },
  {
    key: 'font-size',
    data: {
      type: 'unit(px)',
      attributes: [],
      css: [
        {
          target: 'content',
          key: 'font-size',
        },
      ],
      dataDefault: '13px',
    },
  },
  {
    key: 'font-style',
    data: {
      type: 'string',
      attributes: [],
      css: [
        {
          target: 'content',
          key: 'font-style',
        },
      ],
    },
  },
  {
    key: 'font-weight',
    data: {
      type: 'string',
      attributes: [],
      css: [
        {
          target: 'content',
          key: 'font-weight',
        },
      ],
      dataDefault: 'normal',
    },
  },
  {
    key: 'height',
    data: {
      type: 'unit(px,%)',
      attributes: [],
      css: [
        {
          target: 'td',
          key: 'height',
        },
      ],
    },
  },
  {
    key: 'href',
    data: {
      type: 'string',
      attributes: [
        {
          target: 'content',
          key: 'href',
        },
      ],
      css: [],
    },
  },
  {
    key: 'name',
    data: {
      type: 'string',
      attributes: [
        {
          target: 'content',
          key: 'name',
        },
      ],
      css: [],
    },
  },
  {
    key: 'inner-padding',
    data: {
      type: 'unit(px,%)',
      attributes: [],
      css: [
        {
          target: 'td',
          key: 'padding',
        },
      ],
      dataDefault: '10px 25px',
    },
  },
  {
    key: 'line-height',
    data: {
      type: 'unit(px,%)',
      attributes: [],
      css: [
        {
          target: 'content',
          key: 'line-height',
        },
      ],
      dataDefault: '120%',
    },
  },
  {
    key: 'padding-bottom',
    data: {
      type: 'unit(px,%)',
      attributes: [],
      css: [
        {
          target: 'container',
          key: 'padding-bottom',
        },
      ],
    },
  },
  {
    key: 'padding-left',
    data: {
      type: 'unit(px,%)',
      attributes: [],
      css: [
        {
          target: 'container',
          key: 'padding-left',
        },
      ],
    },
  },
  {
    key: 'padding-right',
    data: {
      type: 'unit(px,%)',
      attributes: [],
      css: [
        {
          target: 'container',
          key: 'padding-right',
        },
      ],
    },
  },
  {
    key: 'padding-top',
    data: {
      type: 'unit(px,%)',
      attributes: [],
      css: [
        {
          target: 'container',
          key: 'padding-top',
        },
      ],
    },
  },
  {
    key: 'padding',
    data: {
      type: 'unit(px,%){1,4}',
      attributes: [],
      css: [
        {
          target: 'container',
          key: 'padding',
        },
      ],
      dataDefault: '10px 25px',
    },
  },
  {
    key: 'rel',
    data: {
      type: 'string',
      attributes: [
        {
          target: 'content',
          key: 'rel',
        },
      ],
      css: [],
    },
  },
  {
    key: 'target',
    data: {
      type: 'string',
      attributes: [
        {
          target: 'content',
          key: 'target',
        },
      ],
      css: [],
      dataDefault: '_blank',
    },
  },
  {
    key: 'text-decoration',
    data: {
      type: 'string',
      attributes: [],
      css: [
        {
          target: 'content',
          key: 'text-decoration',
        },
      ],
      dataDefault: 'none',
    },
  },
  {
    key: 'text-transform',
    data: {
      type: 'string',
      attributes: [],
      css: [
        {
          target: 'content',
          key: 'text-transform',
        },
      ],
      dataDefault: 'none',
    },
  },
  {
    key: 'vertical-align',
    data: {
      type: 'enum(top,bottom,middle)',
      attributes: [
        {
          target: 'td',
          key: 'valign',
        },
      ],
      css: [],
      dataDefault: 'middle',
    },
  },
  {
    key: 'text-align',
    data: {
      type: 'enum(left,right,center)',
      attributes: [],
      css: [
        {
          target: 'td',
          key: 'text-align',
        },
      ],
    },
  },
  {
    key: 'width',
    data: {
      type: 'unit(px,%)',
      attributes: [],
      css: [
        {
          target: 'table',
          key: 'width',
        },
      ],
    },
  },
]

export default klButton
