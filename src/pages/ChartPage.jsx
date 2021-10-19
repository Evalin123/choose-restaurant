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
        <div style={{height:'500px', width:'500px'}}>
          <Pie data={pieChart} options={{responsive: true}} />
        </div>
      </Container>
    </StyledChartPage>
  )
}

export default ChartPage