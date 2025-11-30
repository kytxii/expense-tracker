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

type DataTableProps = {
  entries: Entry[];
};

export function DataTable({ entries }: DataTableProps) {
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
    /* Calculate the total amount of all entries */
  }
  const total = entries.reduce((sum, entry) => sum + entry.amount, 0);

  return (
    <Table>
      <TableBody>
        {entries.map((entry) => (
          <TableRow
            key={entry.id}
            className="odd:bg-[var(--bg-primary)] even:bg-[var(--bg-secondary)]"
          >
            <TableCell className="w-1/2">{entry.name}</TableCell>
            <TableCell className="w-1/4">{formatDate(entry.date)}</TableCell>
            <TableCell className="w-1/4">
              {formatAmount(entry.amount)}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={2}>Total</TableCell>
          <TableCell className="text-left">{formatAmount(total)}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

export default DataTable;
