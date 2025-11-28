import { Platform, Service } from "./types";

export async function fetchPlatforms(): Promise<Platform[]> {
  const response = await fetch(
    "https://github.com/jup-ag/platform-list/releases/latest/download/platforms.json",
  );
  if (!response.ok) {
    throw new Error("Failed to fetch platforms");
  }
  const data: Platform[] = await response.json();
  return data;
}

export async function fetchServices(): Promise<Service[]> {
  const response = await fetch(
    "https://github.com/jup-ag/platform-list/releases/latest/download/services.json",
  );
  if (!response.ok) {
    throw new Error("Failed to fetch services");
  }
  const data: Service[] = await response.json();
  return data;
}
