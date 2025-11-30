import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

const dataEntries = [
  {
    name: "Walmart",
    amount: "$15.99",
    date: "10-11-2025",
  },
  {
    name: "AJ's Fine Foods",
    amount: "$10.95",
    date: "09-25-2025",
  },
  {
    name: "Desert Mountain",
    amount: "$64.23",
    date: "11-01-2025",
  },
  {
    name: "Panda Express",
    amount: "Paid",
    date: "10-22-2025",
  },
  {
    name: "McDonald's",
    amount: "Paid",
    date: "10-29-2025",
  },
  {
    name: "Amazon",
    amount: "Pending",
    date: "11-15-2025",
  },
  {
    name: "Steam",
    amount: "$64.23",
    date: "11-12-2025",
  },
];

export function DataTable() {
  return (
    <Table>
      <TableBody>
        {dataEntries.map((entry) => (
          <TableRow
            key={entry.name}
            className="odd:bg-[var(--bg-primary)] even:bg-[var(--bg-secondary)]"
          >
            <TableCell className="w-1/2">{entry.name}</TableCell>
            <TableCell className="w-1/4">{entry.date}</TableCell>
            <TableCell className="w-1/4">{entry.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-left">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

export default DataTable;
