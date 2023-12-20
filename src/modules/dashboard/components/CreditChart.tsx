import { FC } from 'react'
import { Line } from 'react-chartjs-2'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const options: any = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
      display: false,
    },
  },
  interaction: {
    mode: 'index',
    intersect: false,
  },
  scales: {
    x: {
      grid: {
        drawBorder: false,
        display: false,
      },
      border: {},
    },
    y: {
      grid: {
        color: '#F1F5F9',
        display: false,
      },
      border: {
        display: false,
      },
    },
  },
}
interface CharProp {
  period: number
}
const CreditChart: FC<CharProp> = ({ period }) => {
  const labels = []

  for (let i = 0; i < period; i++) {
    const date = new Date()
    date.setDate(date.getDate() - i)
    const month = date.getMonth() + 1
    const day = date.getDate()
    if (day <= 0) {
      date.setMonth(date.getMonth() - 1)
      date.setDate(30 + day)
    }
    const formattedDate = `${month}/${day}`
    labels.push(formattedDate)
  }

  const data = {
    labels,
    datasets: [
      {
        data: labels.reverse().map(() => Math.floor(Math.random() * 100)),
        fill: true,
        backgroundColor: (context: any) => {
          const ctx = context.chart.ctx
          const gradient = ctx.createLinearGradient(
            0,
            0,
            0,
            context.chart.height
          )
          gradient.addColorStop(0, '#00AEEFBF')
          gradient.addColorStop(1, '#20213600')
          return gradient
        },
        borderColor: '#00AEEF',
        maxBarThickness: 30,
        borderRadius: 10,
        categoryPercentage: 0.4,
        barPercentage: 1.0,
        pointBackgroundColor: '#00AEEF',
        pointRadius: 6,
      },
    ],
  }
  return <Line options={options} data={data} height="100%" />
}

export default CreditChart
