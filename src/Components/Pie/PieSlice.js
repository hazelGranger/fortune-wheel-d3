export default function PieSlice({d, textTransform, name, desp})
{
    return (
        <g>
            <path fill="steelblue" d={d}></path>
            <text fill="white" transform={textTransform}>
                <tspan x="0" fontSize="24">{name}</tspan>
                <tspan x="0" fontSize="12" dy="1.3em">{desp}</tspan>
            </text>
        </g>
    )
}