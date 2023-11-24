// @ts-nocheck

import { useState } from "react";
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
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Grid, useMediaQuery } from "@mui/material";
import { grey } from "@mui/material/colors";
import moment from "moment";
import Section from "../../../components/section";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function RealTimeChart() {
  const [startDate, setStartDate] = useState(
    moment()?.startOf("day")?.local()?.toISOString()
  );
  const [endDate, setEndDate] = useState(moment()?.local()?.toISOString());
  const isSmallDevice = useMediaQuery("(max-width: 1055px)");

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    animation: false,

    plugins: {
      legend: {
        display: true,
        position: "bottom" as const,
        labels: {
          color: grey[300],
          usePointStyle: true,
          padding: 20,
        },
      },

      title: {
        display: false,
        text: "Graph",
        color: grey[300],
      },
      filler: {
        propagate: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          fontSize: 10,
          autoSkip: true,
          maxTicksLimit: isSmallDevice ? 3 : 6,
          color: "#757C8D",
        },
      },
      y: {
        grid: {
          display: true,
          color: "#1F283E",
        },
        border: {
          display: false,
        },
      },
    },
    elements: {
      point: {
        pointRadius: 0,
        pointHoverRadius: 5,
        pointHitRadius: 20,
      },
    },
  };

  const chartData = {
    labels: [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30",
    ],
    datasets: [
      {
        label: "Line Graph",
        data: [
          89, 67, 57, 73, 96, 62, 85, 51, 78, 68, 99, 82, 54, 91, 61, 95, 75,
          55, 87, 74, 76, 64, 60, 83, 98, 79, 93, 69, 88, 72,
        ],
        borderColor: "RGBA(50, 230, 0)",
        backgroundColor: "RGBA(50, 230, 0,0.7)",
        fill: true,
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  };

  return (
    <Section title="Line Graph" width="100%">
      <Grid height={"100%"} width={"100%"}>
        <Grid container style={{ marginTop: "15px" }}>
          <Grid item xs={12}>
            <Line options={options} data={chartData} height={"250px"} />
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
}
