import * as d3 from 'd3';
import { useEffect, useRef, useState } from 'react';

interface HeatmapData {
  day: string;
  hour: string;
  value: number;
}

interface HeatmapChartProps {
  data: HeatmapData[];
  title?: string;
}

export default function HeatmapChart({ data, title }: HeatmapChartProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: Math.min(400, window.innerHeight * 0.5),
        });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (
      !svgRef.current ||
      !containerRef.current ||
      !data.length ||
      dimensions.width === 0
    )
      return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const container = d3.select(containerRef.current);
    container.select('.tooltip').remove();

    const tooltip = container
      .append('div')
      .attr('class', 'tooltip')
      .style('position', 'absolute')
      .style('background-color', '#1F2937')
      .style('color', '#F9FAFB')
      .style('padding', '8px')
      .style('border-radius', '4px')
      .style('pointer-events', 'none')
      .style('opacity', 0)
      .style('z-index', '10')
      .style('font-size', '14px');
    const margin = { top: 20, right: 20, bottom: 30, left: 40 };
    const width = dimensions.width - margin.left - margin.right;
    const height = dimensions.height - margin.top - margin.bottom;
    const days = Array.from(new Set(data.map((d) => d.day))).sort();
    const hours = Array.from(new Set(data.map((d) => d.hour))).sort(
      (a, b) => +a - +b,
    );
    const x = d3.scaleBand().domain(hours).range([0, width]).padding(0.05);
    const y = d3.scaleBand().domain(days).range([0, height]).padding(0.05);
    const colorScale = d3
      .scaleSequential()
      .interpolator(d3.interpolateInferno)
      .domain([0, d3.max(data, (d) => d.value) || 0]);
    const g = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Create cells
    g.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d) => x(d.hour) || 0)
      .attr('y', (d) => y(d.day) || 0)
      .attr('width', x.bandwidth())
      .attr('height', y.bandwidth())
      .attr('fill', (d) => colorScale(d.value))
      .attr('rx', 2)
      .attr('ry', 2)
      .on('mouseover', function (event, d) {
        d3.select(this).attr('stroke', '#ffffff').attr('stroke-width', 1.5);
        tooltip
          .style('opacity', 1)
          .html(`<strong>${d.day}</strong><br>${d.hour}:00<br>${d.value}`);
      })
      .on('mousemove', function (event) {
        const [xPos, yPos] = d3.pointer(event, containerRef.current);
        tooltip.style('left', `${xPos + 10}px`).style('top', `${yPos - 10}px`);
      })
      .on('mouseout', function () {
        d3.select(this).attr('stroke', 'none');
        tooltip.style('opacity', 0);
      });

    // Responsive axes
    const xAxis = g
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x).tickSize(0));
    const yAxis = g.append('g').call(d3.axisLeft(y).tickSize(0));

    // Adjust axis styling for mobile
    if (dimensions.width < 640) {
      // Show fewer ticks on mobile
      xAxis.call(d3.axisBottom(x).ticks(5));
      yAxis.call(d3.axisLeft(y).ticks(5));

      // Smaller text on mobile
      xAxis
        .selectAll('text')
        .style('font-size', '10px')
        .style('fill', '#9CA3AF');

      yAxis
        .selectAll('text')
        .style('font-size', '10px')
        .style('fill', '#9CA3AF');
    } else {
      xAxis
        .selectAll('text')
        .style('font-size', '12px')
        .style('fill', '#9CA3AF')
        .style('text-anchor', 'middle');

      yAxis
        .selectAll('text')
        .style('font-size', '12px')
        .style('fill', '#9CA3AF');
    }
  }, [data, dimensions]);

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-xl border border-gray-700 bg-gray-800 p-4 shadow-lg"
    >
      {title && <h3 className="mb-4 text-lg font-medium">{title}</h3>}
      <svg
        ref={svgRef}
        width="100%"
        height={dimensions.height}
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        preserveAspectRatio="xMinYMin meet"
      ></svg>
    </div>
  );
}
