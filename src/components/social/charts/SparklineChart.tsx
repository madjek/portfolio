import * as d3 from 'd3';
import { useEffect, useRef, useState } from 'react';

interface SparklineChartProps {
  data: number[];
  color: string;
  className?: string;
  aspectRatio?: number; // Optional aspect ratio (width/height)
}

export default function SparklineChart({
  data,
  color,
  className = '',
  aspectRatio = 4, // Default aspect ratio (4:1)
}: SparklineChartProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const calculatedHeight = containerWidth / aspectRatio;

        setDimensions({
          width: containerWidth,
          height: calculatedHeight,
        });
      }
    };

    // Initialize and set up resize observer
    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, [aspectRatio]);

  useEffect(() => {
    if (!svgRef.current || !data.length || dimensions.width === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const { width, height } = dimensions;
    const margin = {
      top: 2,
      right: 2,
      bottom: 2,
      left: 2,
    };
    const chartWidth = width - margin.left - margin.right;
    const chartHeight = height - margin.top - margin.bottom;
    const x = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, chartWidth]);
    const y = d3
      .scaleLinear()
      .domain([d3.min(data) || 0, d3.max(data) || 0])
      .range([chartHeight, 0])
      .nice();
    const line = d3
      .line<number>()
      .x((d, i) => x(i))
      .y((d) => y(d))
      .curve(d3.curveMonotoneX);
    const g = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);
    // Add gradient fill
    const gradientId = `sparkline-gradient-${color.replace('#', '')}`;
    const gradient = svg
      .append('defs')
      .append('linearGradient')
      .attr('id', gradientId)
      .attr('gradientUnits', 'userSpaceOnUse')
      .attr('x1', 0)
      .attr('y1', 0)
      .attr('x2', 0)
      .attr('y2', chartHeight);

    gradient
      .append('stop')
      .attr('offset', '0%')
      .attr('stop-color', color)
      .attr('stop-opacity', 0.15);

    gradient
      .append('stop')
      .attr('offset', '100%')
      .attr('stop-color', color)
      .attr('stop-opacity', 0);

    // Add area under line
    const area = d3
      .area<number>()
      .x((d, i) => x(i))
      .y0(chartHeight)
      .y1((d) => y(d))
      .curve(d3.curveMonotoneX);

    g.append('path')
      .datum(data)
      .attr('fill', `url(#${gradientId})`)
      .attr('d', area);

    // Add line path
    g.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', color)
      .attr('stroke-width', 1.5)
      .attr('stroke-linecap', 'round')
      .attr('stroke-linejoin', 'round')
      .attr('d', line);

    // Add end dot (only if there's enough space)
    if (chartWidth > 40) {
      g.append('circle')
        .attr('cx', x(data.length - 1))
        .attr('cy', y(data[data.length - 1]))
        .attr('r', 2)
        .attr('fill', color);
    }
  }, [data, color, dimensions]);

  return (
    <div ref={containerRef} className={`w-full ${className}`}>
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        preserveAspectRatio="none"
        className="overflow-visible"
      />
    </div>
  );
}
