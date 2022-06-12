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
    padRadius
})
{ 
      const pieArcData = d3.pie().value(d => d[valueAttribute])(pieData);
  
      const arcPie = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)
      .padRadius(padRadius)
      .padAngle(2 / padRadius)
      .cornerRadius(cornerRadius);

    return(
        <PieContainer
            viewBox={"-320 -320 640 640" }
            style={{maxWidth: width}} 
            textAnchor="middle" 
            fontFamily="sans-serif"
        >
            {
              pieArcData.map((d, i) => (
                <PieSlice
                  key={i}
                  d={arcPie(d)}
                  textTransform={`translate(${arcPie.centroid(d).join(",")})`}
                  name={d.data[textAttribute]}
                  desp={d.value}
                />
              ))
            }
        </PieContainer>
    )
}