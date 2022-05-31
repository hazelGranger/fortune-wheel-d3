export default function PieContainer({ viewBox, style, textAnchor, fontFamily, children})
{
    return (
        <svg viewBox={viewBox} style={style} textAnchor={textAnchor} fontFamily={fontFamily}>
            {
                children
            }
        </svg>
    )
}