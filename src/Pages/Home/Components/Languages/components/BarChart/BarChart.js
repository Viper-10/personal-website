import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  BarElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const BarChart = () => {
  const data = {
    labels: [
      "C++",
      "Java",
      "Spring,Jax-rs",
      "Javascript",
      "React js",
      "HTML,CSS",
      "SQL",
    ],
    datasets: [
      {
        label: "Languages and Frameworks",
        data: [80, 90, 75, 90, 90, 95, 75],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 1,
        barThickness: 35,
      },
    ],
  };

  const options = {
    scaleFontColor: "red",
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = "Score: ";

            if (context.parsed.y !== null) {
              label += context.parsed.y;
            }
            return label;
          },
        },
      },
    },
    elements: {
      bar: {
        borderRadius: 4,
      },
    },

    scales: {
      x: {
        grid: {
          display: false,
          borderColor: "#fff",
        },
        ticks: {
          color: "#eee",
        },
      },

      y: {
        grid: {
          display: false,
          borderColor: "#fff",
        },
        ticks: {
          color: "#eee",
        },
        min: 0,
        max: 100,
      },
    },
  };

  return (
    <div style={{ maxWidth: "600px", marginTop: "75px" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
