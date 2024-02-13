"use client";
import { ChartType, ReportType, RetentionNumFormat } from "@voidpulse/api";
import "chart.js/auto";
import Link from "next/link";
import React from "react";
import { LineChart } from "../../ui/charts/LineChart";
import { useColorOrder } from "../../themes/useColorOrder";
import { useChartStyle } from "../../themes/useChartStyle";
import { transformLineData } from "../../utils/transformToLineData";
import { RouterOutput } from "../../utils/trpc";
import { transformRetentionData } from "../../utils/transformRetentionData";
import { BarChart } from "../../ui/charts/BarChart";
import { transformBarData } from "../../utils/transformBarData";
import { DonutChart } from "../../ui/charts/DonutChart";
import { transformDonutData } from "../../utils/transformDonutData";
import { FunnelChart } from "../../ui/charts/FunnelChart";
import { transformFunnelChartData } from "../../utils/transformFunnelData";

interface ChartThumbnailProps {
  chart: RouterOutput["getCharts"]["charts"][0];
}

export const ChartThumbnail: React.FC<ChartThumbnailProps> = ({ chart }) => {
  const colorOrder = useColorOrder();
  const chartStyle = useChartStyle();
  let chartToDisplay;
  let minChartDisplayWidth = 300;
  if (chart.reportType === ReportType.funnel) {
    chartToDisplay = (
      <FunnelChart
        data={transformFunnelChartData({
          datas: chart.data.datas,
          visibleDataMap: chart.visibleDataMap,
          colorOrder,
          labels: chart.data.labels,
        })}
      />
    );
    minChartDisplayWidth = 300;
  } else if (chart.chartType === ChartType.line) {
    chartToDisplay = (
      <LineChart
        yPercent={chart.retentionNumFormat !== RetentionNumFormat.rawCount}
        data={
          chart.reportType === ReportType.retention
            ? transformRetentionData({
                datas: chart.data.datas,
                retHeaders: chart.data.retentionHeaders,
                retentionNumFormat: chart.retentionNumFormat,
                colorOrder,
                visibleDataMap: chart.visibleDataMap,
                lineChartStyle: chartStyle.line,
              })
            : transformLineData({
                datas: chart.data.datas,
                dateHeader: chart.data.dateHeaders,
                colorOrder,
                visibleDataMap: chart.visibleDataMap,
                lineChartStyle: chartStyle.line,
              })
        }
        disableAnimations
      />
    );
    minChartDisplayWidth = 400;
  } else if (chart.chartType === ChartType.bar) {
    chartToDisplay = (
      <BarChart
        data={transformBarData({
          datas: chart.data.datas,
          visibleDataMap: chart.visibleDataMap,
          barChartStyle: chartStyle.bar,
        })}
      />
    );
    minChartDisplayWidth = 600;
  } else if (chart.chartType === ChartType.donut) {
    chartToDisplay = (
      <DonutChart
        data={transformDonutData({
          datas: chart.data.datas,
          visibleDataMap: chart.visibleDataMap,
          donutChartStyle: chartStyle.donut,
        })}
      />
    );
    minChartDisplayWidth = 300;
  }

  return (
    <div className="card w-full h-full">
      {/* Chart thumbnail header */}
      <Link href={`/chart/${chart.id}`}>
        <div className="px-5 py-3 h-18 hoverable area group border-b border-primary-800 ">
          <h2
            className={`mb-2 text-l font-semibold text-primary-100 group-hover:text-accent-100 transition-colors`}
          >
            {chart.title}
            {/* <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none opacity-35 ml-2">
            -&gt;
          </span> */}
          </h2>
          <p className={`m-0 max-w-[30ch] subtext overflow-hidden`}>
            {chart.description}
          </p>
        </div>
      </Link>

      {/* Chart display */}
      <div className="bg-primary-800/30 pt-1 h-full overflow-x-scroll">
        <div
          style={{
            minWidth: minChartDisplayWidth,
            height: "100%",
            // minHeight: "400px",
          }}
        >
          {chartToDisplay}
        </div>
      </div>
    </div>
  );
};
