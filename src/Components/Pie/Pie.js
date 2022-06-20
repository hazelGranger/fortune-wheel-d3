import * as d3 from 'd3'
import PieContainer from './PieContainer'
import PieSlice from './PieSlice'

export default function Pie({ 
    pieData, 
    valueAttribute, 
    textAttribute, 
    width, 
    innerRadius, 
    outerRadius,
    cornerRadius,
    padRadius,
    spinToAngle
})
{ 
      const pieArcData = d3.pie().value(d => d[valueAttribute])(pieData);
  
      const arcPie = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .padRadius(padRadius)
      .padAngle(2 / padRadius)
      .cornerRadius(cornerRadius);

      const colors = ['#63cfb2', '#b5d373', '#f6c451', '#e1533d' , '#a477bb'];
    return(
        <PieContainer
            viewBox={"-320 -320 640 640" }
            style={{
              maxWidth: width, 
              transition: 'transform ease-out 3s', 
              transform: `rotate(${spinToAngle}deg)`
            }} 
            textAnchor="middle" 
            fontFamily="sans-serif"
        >
            {
              pieArcData.map((d, i) => (
                <PieSlice
                  key={i}
                  d={arcPie(d)}
                  textTransform={`translate(${arcPie.centroid(d).join(",")}) rotate(${(d.endAngle + d.startAngle) / 2 * 180 / Math.PI - 90 })`}
                  name={d.data[textAttribute]}
                  desp={d.value}
                  color={colors[i%colors.length]}
                />
              ))
            }
        </PieContainer>
    )
}