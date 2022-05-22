import react from "react";
import Bar from './Bar.js'
import './Chart.css'

const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const maxVal = Math.max(...dataPointValues)

    return <div className="chart">
        {props.dataPoints.map( (dataPoint) => (
            <Bar 
                key={dataPoint.label}
                value={dataPoint.value} 
                maxValue={maxVal} 
                label={dataPoint.label}
            />
        ))}
    </div>
}

export default Chart