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

type Entry = {
  id: string;
  type: string;
  name: string;
  amount: number;
  date: Date;
  paid: boolean | null;
  userId: string;
  createdAt: Date;
};

{
  /* Allows for dynamic filter rendering */
}
type DataTableProps = {
  entries: Entry[];
  filterType?: string | string[]; // Filter by entry type(s)
  showPaid?: boolean; // Filter by paid status
  limit?: number; // Limit number of rows
  showColumns?: ("name" | "date" | "amount" | "type" | "paid")[]; // Which columns to show
  showTotal?: boolean; // Show footer with total
};

export function DataTable({
  entries,
  filterType,
  showPaid,
  limit,
  showColumns = ["name", "date", "amount"],
  showTotal = true,
}: DataTableProps) {
  {
    /* Format the date */
  }
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  {
    /* Format the currency amount */
  }
  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  {
    /* Filter entries based on props */
  }
  let filteredEntries = entries;

  if (filterType) {
    const types = Array.isArray(filterType) ? filterType : [filterType];
    filteredEntries = filteredEntries.filter((e) => types.includes(e.type));
  }

  if (showPaid !== undefined) {
    filteredEntries = filteredEntries.filter((e) => e.paid === showPaid);
  }

  if (limit) {
    filteredEntries = filteredEntries.slice(0, limit);
  }

  {
    /* Calculate the total amount of filtered entries */
  }
  const total = filteredEntries.reduce((sum, entry) => sum + entry.amount, 0);

  return (
    <Table>
      <TableBody>
        {filteredEntries.map((entry) => (
          <TableRow
            key={entry.id}
            className="odd:bg-[var(--bg-primary)] even:bg-[var(--bg-secondary)]"
          >
            {showColumns.includes("type") && (
              <TableCell className="w-1/4">{entry.type}</TableCell>
            )}
            {showColumns.includes("name") && (
              <TableCell className="w-1/4">{entry.name}</TableCell>
            )}
            {showColumns.includes("date") && (
              <TableCell className="w-1/4">{formatDate(entry.date)}</TableCell>
            )}
            {showColumns.includes("amount") && (
              <TableCell className="w-1/4">
                {formatAmount(entry.amount)}
              </TableCell>
            )}
            {showColumns.includes("paid") && (
              <TableCell className="w-1/4">
                {entry.paid ? "✓ Paid" : "✗ Unpaid"}
              </TableCell>
            )}
          </TableRow>
        ))}
      </TableBody>
      {showTotal && (
        <TableFooter>
          <TableRow>
            <TableCell colSpan={showColumns.length - 1}>Total</TableCell>
            <TableCell className="text-left">{formatAmount(total)}</TableCell>
          </TableRow>
        </TableFooter>
      )}
    </Table>
  );
}

export default DataTable;
