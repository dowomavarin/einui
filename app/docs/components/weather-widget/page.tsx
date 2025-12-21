import type { Metadata } from "next";
import { PageHeader } from "@/components/docs/page-header";
import { ComponentPreview } from "@/components/docs/component-preview";
import { CLIInstall } from "@/components/docs/cli-install";
import {
  WeatherWidget,
  DetailedWeatherWidget,
  ForecastWeatherWidget,
  HourlyWeatherWidget,
} from "@/registry/widgets/weather-widget";

export const metadata: Metadata = {
  title: "Weather Widgets",
  description:
    "Weather widgets for displaying temperature, conditions, forecasts, and hourly data with liquid glass styling.",
};

const weatherCode = `<WeatherWidget
  temperature={22}
  condition="Sunny"
  icon="sun"
  location="San Francisco, CA"
/>

// Different weather conditions
<WeatherWidget temperature={15} condition="Cloudy" icon="cloud" />
<WeatherWidget temperature={8} condition="Rainy" icon="rain" />
<WeatherWidget temperature={-5} condition="Snowy" icon="snow" />`;

const detailedCode = `<DetailedWeatherWidget
  temperature={22}
  condition="Partly Cloudy"
  icon="cloud"
  location="New York, NY"
  humidity={65}
  windSpeed={12}
  feelsLike={24}
/>`;

const forecastCode = `<ForecastWeatherWidget
  current={{
    temperature: 22,
    condition: "Sunny",
    icon: "sun",
  }}
  forecast={[
    { day: "Mon", high: 24, low: 18, icon: "sun", condition: "Sunny" },
    { day: "Tue", high: 23, low: 17, icon: "cloud", condition: "Cloudy" },
    { day: "Wed", high: 21, low: 15, icon: "rain", condition: "Rainy" },
    { day: "Thu", high: 20, low: 14, icon: "rain", condition: "Showers" },
    { day: "Fri", high: 22, low: 16, icon: "sun", condition: "Clear" },
  ]}
  location="Los Angeles, CA"
/>`;

const hourlyCode = `<HourlyWeatherWidget
  hours={[
    { time: "12AM", temperature: 18, icon: "cloud" },
    { time: "3AM", temperature: 16, icon: "cloud" },
    { time: "6AM", temperature: 15, icon: "cloud" },
    { time: "9AM", temperature: 19, icon: "sun" },
    { time: "12PM", temperature: 22, icon: "sun" },
    { time: "3PM", temperature: 24, icon: "sun" },
    { time: "6PM", temperature: 21, icon: "cloud" },
    { time: "9PM", temperature: 19, icon: "cloud" },
  ]}
/>`;

export default function WeatherWidgetsPage() {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
      <PageHeader
        title="Weather Widgets"
        description="Weather widgets for displaying temperature, conditions, forecasts, and hourly data."
      />

      <CLIInstall componentName="weather-widget" />

      <ComponentPreview
        title="Weather Widget"
        description="Simple weather display with temperature, condition, and icon."
        preview={
          <div className="flex flex-wrap gap-6">
            <WeatherWidget
              temperature={22}
              condition="Sunny"
              icon="sun"
              location="San Francisco, CA"
            />
            <WeatherWidget temperature={15} condition="Cloudy" icon="cloud" />
            <WeatherWidget temperature={8} condition="Rainy" icon="rain" />
          </div>
        }
        code={weatherCode}
      />

      <ComponentPreview
        title="Detailed Weather Widget"
        description="Extended weather widget with additional metrics like humidity and wind speed."
        preview={
          <div className="flex flex-wrap gap-6">
            <DetailedWeatherWidget
              temperature={22}
              condition="Partly Cloudy"
              icon="cloud"
              location="New York, NY"
              humidity={65}
              windSpeed={12}
              feelsLike={24}
            />
            <DetailedWeatherWidget
              temperature={28}
              condition="Sunny"
              icon="sun"
              location="Miami, FL"
              humidity={75}
              windSpeed={8}
              feelsLike={30}
            />
          </div>
        }
        code={detailedCode}
      />

      <ComponentPreview
        title="Forecast Weather Widget"
        description="Weather widget with current conditions and multi-day forecast."
        preview={
          <div className="flex flex-wrap gap-6">
            <ForecastWeatherWidget
              current={{
                temperature: 22,
                condition: "Sunny",
                icon: "sun",
              }}
              forecast={[
                { day: "Mon", high: 24, low: 18, icon: "sun", condition: "Sunny" },
                { day: "Tue", high: 23, low: 17, icon: "cloud", condition: "Cloudy" },
                { day: "Wed", high: 21, low: 15, icon: "rain", condition: "Rainy" },
                { day: "Thu", high: 20, low: 14, icon: "rain", condition: "Showers" },
                { day: "Fri", high: 22, low: 16, icon: "sun", condition: "Clear" },
              ]}
              location="Los Angeles, CA"
            />
          </div>
        }
        code={forecastCode}
      />

      <ComponentPreview
        title="Hourly Weather Widget"
        description="Visual hourly temperature forecast with bar chart representation."
        preview={
          <div className="flex flex-wrap gap-6">
            <HourlyWeatherWidget
              hours={[
                { time: "12AM", temperature: 18, icon: "cloud" },
                { time: "3AM", temperature: 16, icon: "cloud" },
                { time: "6AM", temperature: 15, icon: "cloud" },
                { time: "9AM", temperature: 19, icon: "sun" },
                { time: "12PM", temperature: 22, icon: "sun" },
                { time: "3PM", temperature: 24, icon: "sun" },
                { time: "6PM", temperature: 21, icon: "cloud" },
                { time: "9PM", temperature: 19, icon: "cloud" },
              ]}
            />
          </div>
        }
        code={hourlyCode}
      />
    </div>
  );
}

