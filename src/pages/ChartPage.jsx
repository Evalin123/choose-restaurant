import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Pie } from "react-chartjs-2";

import Container from "../components/common/Container";
import { getChartData } from "../utils";

const StyledChartPage = styled.div`
height: 100%;
  width: 100%;
  top: 120px;

  .container {
    padding-top: 60px;
  }

  h2 {
    width: 480px;
    height: 50px;
    font-family: Roboto;
    font-weight: bold;
    font-size: 25px;
    line-height: 37px;
    letter-spacing: 0.2em;
  }

  .description {
    width: 480px;
    height: 30px;
    font-family: Roboto;
    font-style: normal;
    font-size: 18px;
    line-height: 37px;
    letter-spacing: 0.2em;
    color: #696969;
  }

  .chart {
    height: 500px;
    width: 500px;
    padding-top: 20px;
  }
`

const ChartPage = () => {
  const [pieChart, setPieChart] = useState({});

  useEffect(() => {
    getChartData()
    .then(res => {
      console.log(res)
      setPieChart({
        labels: ["會在二訪", "黑名單", "未解鎖"],
        datasets: [
          {
            label: "# of Votes",
            data: res,
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
            ],
            borderWidth: 1
          }
        ]
      });
    })
    .catch(err => {
      console.log(err)
    })
  }, [])
  return (
    <StyledChartPage>
      <Container className="container">
        <h2 align="center">餐廳比例圖</h2>
        <p align="center" className="description">還有多少沒去過呢?</p>
        <div className="chart">
          <Pie data={pieChart} options={{responsive: true}} />
        </div>
      </Container>
    </StyledChartPage>
  )
}

export default ChartPage