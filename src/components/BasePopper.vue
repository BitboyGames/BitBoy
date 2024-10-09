<script>
export default {
  name: 'BasePopper',
  data: () => ({
    left: '0px',
    top: '0px',
    component: null,
    on: {},
    props: {},
    attrs: {},
    className: ''
  }),
  render(h) {
    const { component, on, props, attrs, className, left, top } = this
    return h(component, {
      style: { left, top },
      on,
      props,
      attrs,
      class: className
    })
  }
}
</script>
