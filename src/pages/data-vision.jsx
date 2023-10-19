import { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function DataVision() {
  // 折线图 ref
  const lineChartRef = useRef(null);
  // 条形图 ref
  const barChartRef = useRef(null);
  // 直方图 ref
  const histogramChartRef = useRef(null);
  // 散点图 ref
  const scatterChartRef = useRef(null);

  useEffect(() => {
    // 初始化折线图
    const lineChart = echarts.init(lineChartRef.current);
    lineChart.setOption({
      title: {
        text: '折线图'
      },
      xAxis: {
        type: 'category',
        data: [1950, 1960, 1970, 1980, 1990, 2000, 2010]
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [300.2, 543.3, 1075.9, 2862.5, 5979.6, 10289.7, 14958.3],
          type: 'line'
        }
      ],
      tooltip: {
        trigger: 'axis'
      }
    });

    // 初始化条形图
    const barChart = echarts.init(barChartRef.current);
    barChart.setOption({
      title: {
        text: '条形图'
      },
      xAxis: {
        type: 'category',
        data: ["Annie Hall", "Ben-Hur", "Casablanca", "Gandhi", "West Side Story"]
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [5, 11, 3, 8, 10],
          type: 'bar'
        }
      ],
      tooltip: {
        trigger: 'axis'
      }
    });

    // 初始化直方图
    const grades = [83, 95, 91, 87, 70, 0, 85, 82, 100, 67, 73, 77, 0]
    const histogramData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    grades.forEach((grade) => {
      const index = Math.floor(grade / 10)
      histogramData[index] += 1
    })
    const histogramChart = echarts.init(histogramChartRef.current);
    histogramChart.setOption({
      title: {
        text: '直方图'
      },
      xAxis: {
        type: 'category',
        data: ['0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', "80-90", "90-100"]
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: histogramData,
          type: 'bar'
        }
      ],
      tooltip: {
        trigger: 'axis'
      }
    });

    // 初始化散点图
    const minuets = [175, 170, 205, 120, 220, 130, 105, 145, 190]
    const friends = [ 70,  65,  72,  63,  71,  64,  60,  64,  67]
    const scatterChart = echarts.init(scatterChartRef.current);
    scatterChart.setOption({
      title: {
        text: "散点图",
      },
      xAxis: {
        type: "value",
        min: function (value) {
          return value.min - 20;
        },
      },
      yAxis: {
        type: "value",
        min: function (value) {
          return value.min - 2;
        },
      },
      series: [
        {
          data: minuets.map((minuet, index) => [minuet, friends[index]]),
          type: "scatter",
        },
      ],
      tooltip: {
        trigger: "axis",
      },
    });
  }, [])


  return (
    <div>
      <h1>Data Vision</h1>
      <div className='flex flex-wrap'>
        <div ref={lineChartRef} style={{ width: 500, height:400 }}></div>
        <div ref={barChartRef} style={{ width: 500, height:400 }}></div>
        <div ref={histogramChartRef} style={{ width: 500, height: 400 }}></div>
        <div ref={scatterChartRef} style={{ width: 500, height: 400 }}></div>
      </div>
    </div>
  );
}
