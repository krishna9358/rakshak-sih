// gpsData.ts

export interface GpsDetails {
  name: string;
  id: string;
}

export interface GpsData {
  serialNo: string;
  gpsDetails: GpsDetails;
  budget: number;
}

export const gpsData: GpsData[] = [
  {
    serialNo: "001",
    gpsDetails: { name: "GP Store 1", id: "G123" },
    budget: 50000,
  },
  {
    serialNo: "002",
    gpsDetails: { name: "GP Store 2", id: "G124" },
    budget: 60000,
  },
  {
    serialNo: "003",
    gpsDetails: { name: "GP Store 3", id: "G125" },
    budget: 75000,
  },
  {
    serialNo: "004",
    gpsDetails: { name: "GP Store 4", id: "G126" },
    budget: 45000,
  },
  {
    serialNo: "005",
    gpsDetails: { name: "GP Store 5", id: "G127" },
    budget: 80000,
  },
];
