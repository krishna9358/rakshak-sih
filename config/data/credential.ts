// Define the types for the table data
export interface CredentialData {
  serialNo: number;
  id: string;
  email: string;
  password: string;
  stationName: string;
  role: string;
}

// Sample data for the table
export const sampleData: CredentialData[] = [
  {
    serialNo: 1,
    id: "001",
    email: "sitapura@gov.in",
    password: "password123",
    stationName: "sitapura",
    role: "Gp store",
  },
  {
    serialNo: 2,
    id: "002",
    email: "haldighati@gov.in",
    password: "password456",
    stationName: "haldighati",
    role: "Station",
  },
  {
    serialNo: 3,
    id: "003",
    email: "jaipur@gov.in",
    password: "password789",
    stationName: "jaipur",
    role: "Station",
  },
  {
    serialNo: 4,
    id: "004",
    email: "delhi@gov.in",
    password: "password000",
    stationName: "delhi",
    role: "Unit",
  },
];
