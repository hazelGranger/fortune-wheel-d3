export default function PieSlice({d, textTransform, name, desp, color})
{
    return (
        <g>
            <path fill={color} d={d}></path>
            <text fill="white" transform={textTransform}>
                <tspan x="0" fontSize="26" fontWeight="bold">{name}</tspan>
            </text>
        </g>
    )
}