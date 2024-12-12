import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Bell, Search, Keyboard, Radio, Monitor } from 'lucide-react'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navbar */}
      <nav className="bg-[#7c634e] p-4 flex justify-between items-center">
        <div className="flex items-center w-1/3">
          <Search className="w-5 h-5 text-white mr-2" />
          <Input 
            type="search" 
            placeholder="Search..." 
            className="bg-white border-[#7c634e] text-[#7c634e] placeholder-[#d2b99f] focus:border-[#7c634e] focus:ring-[#7c634e]"
          />
        </div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <div className="w-1/3 flex justify-end">
          <button className="text-white hover:text-[#d2b99f]">
            <Bell className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Details */}
          <Card className="bg-white border-[#7c634e]">
            <CardHeader>
              <CardTitle className="text-[#7c634e]">Product Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                {[
                  { icon: <Keyboard className="w-4 h-4" />, name: 'Keyboard', count: 10 },
                  { icon: <Radio className="w-4 h-4" />, name: 'Walkie Talkies', count: 30 },
                  { icon: <Monitor className="w-4 h-4" />, name: 'Monitors', count: 15 },
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="flex items-center gap-2 text-[#7c634e]">
                      {item.icon}
                      {item.name}
                    </span>
                    <span className="font-bold text-[#7c634e]">{item.count}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                <div className="text-center text-[#7c634e]">Budget Used</div>
                <div className="relative w-32 h-32 mx-auto">
                  <Progress value={65} className="h-32 w-32 rounded-full bg-[#d2b99f]"  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#7c634e]">65%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Purchase Order */}
          <Card className="bg-white border-[#7c634e]">
            <CardHeader>
              <CardTitle className="flex justify-between items-center text-[#7c634e]">
                <span>Purchase Order</span>
                <span className="text-sm text-[#d2b99f]">This Month</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-sm text-[#d2b99f]">Quantity Ordered</div>
                <div className="text-4xl font-bold text-[#7c634e]">91</div>
              </div>
              <Table className="mt-4">
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-[#7c634e] font-bold">Order ID</TableHead>
                    <TableHead className="text-[#7c634e] font-bold">Date</TableHead>
                    <TableHead className="text-[#7c634e] font-bold">Amount</TableHead>
                    <TableHead className="text-[#7c634e] font-bold">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="text-[#7c634e]">PO-001</TableCell>
                    <TableCell className="text-[#7c634e]">2023-06-15</TableCell>
                    <TableCell className="text-[#7c634e]">$5,000</TableCell>
                    <TableCell className="text-[#7c634e]">Pending</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="text-[#7c634e]">PO-002</TableCell>
                    <TableCell className="text-[#7c634e]">2023-06-20</TableCell>
                    <TableCell className="text-[#7c634e]">$3,500</TableCell>
                    <TableCell className="text-[#7c634e]">Shipped</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Self Inventory (spanning two columns) */}
        <Card className="bg-white border-[#7c634e] col-span-full">
          <CardHeader>
            <CardTitle className="flex justify-between items-center text-[#7c634e]">
              <span>Self Inventory</span>
              <span className="text-sm text-[#d2b99f]">This Month</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  {['Product ID', 'MFD', 'Confirmed', 'Warranty', 'In Usage', 'Last Upgrade'].map((header, index) => (
                    <TableHead key={index} className="text-[#7c634e] font-bold">{header}</TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="text-[#7c634e]">PROD001</TableCell>
                  <TableCell className="text-[#7c634e]">2023-01-15</TableCell>
                  <TableCell className="text-[#7c634e]">320</TableCell>
                  <TableCell className="text-[#7c634e]">2 years</TableCell>
                  <TableCell className="text-[#7c634e]">20</TableCell>
                  <TableCell className="text-[#7c634e]">2023-06-30</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="text-[#7c634e]">PROD002</TableCell>
                  <TableCell className="text-[#7c634e]">2023-02-01</TableCell>
                  <TableCell className="text-[#7c634e]">150</TableCell>
                  <TableCell className="text-[#7c634e]">1 year</TableCell>
                  <TableCell className="text-[#7c634e]">15</TableCell>
                  <TableCell className="text-[#7c634e]">2023-05-15</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

