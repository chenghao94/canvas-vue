import * as d3 from 'd3'
export default class Graph {
  constructor (svg, { tables, models, outputs, pages, links }) {
    this.svg = svg
    this.tables = tables
    this.models = models
    this.outputs = outputs
    this.pages = pages
    this.links = links
    this.svgWidth = 1000
    this.svgHeight = 0
    this.rectWidth = 120 // 宽度
    this.rectHeight = 60 // 高度
    this.initHeight()
    this.draw()
  }
  initHeight () {
    this.svgHeight = this.tables.length * (this.rectHeight + 15) + 15
  }
  draw () {
    this.drawTables()
    this.drawModels()
    this.drawOutputs()
    this.drawPages()
    this.drawLinks()
  }
  drawTables () {
    this.drawRects(this.tables, '#409eff', 35)
  }
  drawModels () {
    this.drawRects(this.models, '#67c23a', 255)
  }
  drawOutputs () {
    this.drawRects(this.outputs, '#909399', 475)
  }
  drawPages () {
    this.drawRects(this.pages, '#f56c6c', 695)
  }
  drawLinks () {
    let g = this.svg.append('g')
    this.links.forEach(link => {
      let [from, to] = [this.svg.select('#' + link.source), this.svg.select('#' + link.target)]
      let d = d3.path()
      d.moveTo(+from.attr('x2'), +from.attr('y2'))
      d.lineTo(+to.attr('x1'), +to.attr('y1'))
      g.append('path').attr('d', d).attr('stroke', '#000').attr('stroke-width', 1)
    })
  }

  // X 为偏移量
  drawRects (list, color, X) {
    let g = this.svg.append('g')
    let length = list.length
    g.selectAll('rect').data(list).enter().append('rect').attr('fill', color).attr('id', (d, i) => d.id)
      .attr('width', this.rectWidth).attr('height', this.rectHeight).attr('x', X).attr('y', (d, i) => this.getY(length, i))
      .attr('x1', X).attr('y1', (d, i) => this.getY(length, i) + this.rectHeight / 2)
      .attr('x2', X + this.rectWidth).attr('y2', (d, i) => this.getY(length, i) + this.rectHeight / 2)
    g.selectAll('text').data(list).enter().append('text').attr('fill', '#fff')
      .text(d => d.name).attr('x', X + 15).attr('y', (d, i) => 35 + this.getY(length, i))
  }
  getY (length, i) {
    let margin = (this.svgHeight - this.rectHeight * length) / (length + 1)
    return margin * (i + 1) + this.rectHeight * i
  }
}
