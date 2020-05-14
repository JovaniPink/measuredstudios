import { select } from 'd3';
import React, { useEffect, useRef, useState } from 'react';

function LineGraph() {
  const [data, setData] = useState([25, 30, 45, 60, 20]);
  const svgRef = useRef();
  useEffect(() => {
    const svg = select(svgRef.current);
    svg
      .selectAll('circle')
      .data(data)
      .join('circle')
      .attr('r', (value) => value)
      .attr('cx', (value) => value * 2)
      .attr('cy', (value) => value * 2)
      .attr('stroke', 'red');
  }, [data]);
  return (
    <>
      <svg ref={svgRef} style={{
          display: 'block',
          width: '100%',
          height: '300px',
          background: '#f7f7f7',
          overflow: 'visible',
        }} />
      <br />
      <button onClick={() => setData(data.map((value) => value + 5))}>
        Update data
      </button>
      <button onClick={() => setData(data.filter((value) => value < 35))}>
        Filter data
      </button>
    </>
  );
}

export default LineGraph;
