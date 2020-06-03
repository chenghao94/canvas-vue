export default class SDK {
  constructor (flow = { nodes: [], links: [] }) {
    this.flow = flow
    this.scale = 1
    this.inited = true
  }
}
