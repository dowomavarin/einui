"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Cloud, CloudRain, Sun, CloudSnow, Wind, Droplets } from "lucide-react";
import { GlassWidgetBase } from "./base-widget";

interface WeatherWidgetProps {
  temperature: number;
  condition: string;
  icon?: "sun" | "cloud" | "rain" | "snow" | "wind";
  location?: string;
  className?: string;
}

function WeatherWidget({
  temperature,
  condition,
  icon = "sun",
  location,
  className,
}: WeatherWidgetProps) {
  const iconMap = {
    sun: Sun,
    cloud: Cloud,
    rain: CloudRain,
    snow: CloudSnow,
    wind: Wind,
  };

  const Icon = iconMap[icon];
  const glowColors = {
    sun: "amber",
    cloud: "blue",
    rain: "cyan",
    snow: "purple",
    wind: "blue",
  } as const;

  return (
    <GlassWidgetBase
      className={cn("min-w-48", className)}
      size="md"
      glowColor={glowColors[icon]}
    >
      {location && (
        <div className="text-white/60 text-sm mb-2">{location}</div>
      )}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-white/10">
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div>
            <div className="text-4xl font-light text-white">{temperature}°</div>
            <div className="text-white/70 text-sm">{condition}</div>
          </div>
        </div>
      </div>
    </GlassWidgetBase>
  );
}

interface DetailedWeatherWidgetProps {
  temperature: number;
  condition: string;
  icon?: "sun" | "cloud" | "rain" | "snow" | "wind";
  location?: string;
  humidity?: number;
  windSpeed?: number;
  feelsLike?: number;
  className?: string;
}

function DetailedWeatherWidget({
  temperature,
  condition,
  icon = "sun",
  location,
  humidity,
  windSpeed,
  feelsLike,
  className,
}: DetailedWeatherWidgetProps) {
  const iconMap = {
    sun: Sun,
    cloud: Cloud,
    rain: CloudRain,
    snow: CloudSnow,
    wind: Wind,
  };

  const Icon = iconMap[icon];
  const glowColors = {
    sun: "amber",
    cloud: "blue",
    rain: "cyan",
    snow: "purple",
    wind: "blue",
  } as const;

  return (
    <GlassWidgetBase
      className={cn("min-w-64", className)}
      size="lg"
      glowColor={glowColors[icon]}
    >
      {location && (
        <div className="text-white/60 text-sm mb-3">{location}</div>
      )}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-white/10">
            <Icon className="w-10 h-10 text-white" />
          </div>
          <div>
            <div className="text-5xl font-light text-white mb-1">{temperature}°</div>
            <div className="text-white/70 text-base">{condition}</div>
            {feelsLike && (
              <div className="text-white/50 text-xs mt-1">Feels like {feelsLike}°</div>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
        {humidity !== undefined && (
          <div className="flex items-center gap-2">
            <Droplets className="w-4 h-4 text-cyan-400" />
            <div>
              <div className="text-white/50 text-xs">Humidity</div>
              <div className="text-white text-sm font-medium">{humidity}%</div>
            </div>
          </div>
        )}
        {windSpeed !== undefined && (
          <div className="flex items-center gap-2">
            <Wind className="w-4 h-4 text-blue-400" />
            <div>
              <div className="text-white/50 text-xs">Wind</div>
              <div className="text-white text-sm font-medium">{windSpeed} km/h</div>
            </div>
          </div>
        )}
      </div>
    </GlassWidgetBase>
  );
}

interface ForecastDay {
  day: string;
  high: number;
  low: number;
  icon?: "sun" | "cloud" | "rain" | "snow" | "wind";
  condition: string;
}

interface ForecastWeatherWidgetProps {
  current: {
    temperature: number;
    condition: string;
    icon?: "sun" | "cloud" | "rain" | "snow" | "wind";
  };
  forecast: ForecastDay[];
  location?: string;
  className?: string;
}

function ForecastWeatherWidget({
  current,
  forecast,
  location,
  className,
}: ForecastWeatherWidgetProps) {
  const iconMap = {
    sun: Sun,
    cloud: Cloud,
    rain: CloudRain,
    snow: CloudSnow,
    wind: Wind,
  };

  const CurrentIcon = iconMap[current.icon || "sun"];

  return (
    <GlassWidgetBase
      className={cn("min-w-72", className)}
      size="lg"
      glowColor="cyan"
    >
      {location && (
        <div className="text-white/60 text-sm mb-3">{location}</div>
      )}
      <div className="flex items-center gap-4 mb-4 pb-4 border-b border-white/10">
        <div className="p-3 rounded-xl bg-white/10">
          <CurrentIcon className="w-10 h-10 text-white" />
        </div>
        <div>
          <div className="text-4xl font-light text-white mb-1">{current.temperature}°</div>
          <div className="text-white/70 text-sm">{current.condition}</div>
        </div>
      </div>
      <div className="space-y-2">
        {forecast.map((day, i) => {
          const DayIcon = iconMap[day.icon || "sun"];
          return (
            <div
              key={i}
              className="flex items-center justify-between p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <DayIcon className="w-5 h-5 text-white/70 flex-shrink-0" />
                <span className="text-white/70 text-sm truncate">{day.day}</span>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="text-white/50 text-xs">{day.condition}</span>
                <div className="flex items-center gap-2">
                  <span className="text-white text-sm font-medium">{day.high}°</span>
                  <span className="text-white/50 text-sm">{day.low}°</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </GlassWidgetBase>
  );
}

interface HourlyWeatherWidgetProps {
  hours: Array<{
    time: string;
    temperature: number;
    icon?: "sun" | "cloud" | "rain" | "snow" | "wind";
  }>;
  className?: string;
}

function HourlyWeatherWidget({ hours, className }: HourlyWeatherWidgetProps) {
  const iconMap = {
    sun: Sun,
    cloud: Cloud,
    rain: CloudRain,
    snow: CloudSnow,
    wind: Wind,
  };

  // Guard clause: handle empty hours array
  if (!hours || hours.length === 0) {
    return (
      <GlassWidgetBase
        className={cn("min-w-80", className)}
        size="lg"
        glowColor="blue"
      >
        <div className="text-white/60 text-sm mb-4">24 Hour Forecast</div>
        <div className="text-center py-8 text-white/40 text-sm">
          No hourly data available
        </div>
      </GlassWidgetBase>
    );
  }

  const maxTemp = Math.max(...hours.map((h) => h.temperature));
  const minTemp = Math.min(...hours.map((h) => h.temperature));
  const tempRange = maxTemp - minTemp || 1;

  return (
    <GlassWidgetBase
      className={cn("min-w-80", className)}
      size="lg"
      glowColor="blue"
    >
      <div className="text-white/60 text-sm mb-4">24 Hour Forecast</div>
      <div className="flex items-end justify-between gap-2">
        {hours.map((hour, i) => {
          const Icon = iconMap[hour.icon || "sun"];
          const height = ((hour.temperature - minTemp) / tempRange) * 100;
          return (
            <div key={i} className="flex flex-col items-center gap-2 flex-1">
              <div className="relative w-full h-24 flex items-end justify-center">
                <div
                  className="w-full rounded-t-lg bg-gradient-to-t from-cyan-500/40 to-blue-500/40 transition-all"
                  style={{ height: `${Math.max(height, 10)}%` }}
                />
                <div className="absolute -top-6 text-white text-xs font-medium">
                  {hour.temperature}°
                </div>
              </div>
              <Icon className="w-4 h-4 text-white/70" />
              <div className="text-white/50 text-[10px] text-center">{hour.time}</div>
            </div>
          );
        })}
      </div>
    </GlassWidgetBase>
  );
}

export {
  WeatherWidget,
  DetailedWeatherWidget,
  ForecastWeatherWidget,
  HourlyWeatherWidget,
};

