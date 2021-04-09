import { format } from "date-fns";
import ColumnFilter from "./ColumnFilter";

const COLUMN = [
  {
    Header: "Id",
    Footer: "id",
    accessor: "id",
    // Filter: ColumnFilter,
    disableFilters: true,
  },
  {
    Header: "First Name",
    Footer: "first_name",
    accessor: "first_name",
    // Filter: ColumnFilter,
  },
  {
    Header: "Last Name",
    Footer: "last_name",
    accessor: "last_name",
    // Filter: ColumnFilter,
  },
  {
    Header: "Date of birth",
    Footer: "date_of_birth",
    accessor: "date_of_birth",
    // Filter: ColumnFilter,
    Cell: ({ value }) => {
      return format(new Date(value), "dd/MM/yyyy");
    },
  },
  {
    Header: "country",
    Footer: "country",
    accessor: "country",
    // Filter: ColumnFilter,
  },
  {
    Header: "Phone",
    Footer: "Phone",
    accessor: "phone",
    // Filter: ColumnFilter,
  },
];

const GROUPED_COLUMNS = [
  {
    Header: "Id",
    Footer: "id",
    accessor: "id",
  },
  {
    Header: "Name",
    Footer: "Name",
    columns: [
      {
        Header: "First Name",
        Footer: "first_name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        Footer: "last_name",
        accessor: "last_name",
      },
    ],
  },
  {
    Header: "Info",
    Footer: "Info",
    columns: [
      {
        Header: "Date of birth",
        Footer: "date_of_birth",
        accessor: "date_of_birth",
        Cell: ({ value }) => {
          return format(new Date(value), "dd/MM/yyyy");
        },
      },
      {
        Header: "country",
        Footer: "country",
        accessor: "country",
      },
      {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone",
      },
    ],
  },
];

export default COLUMN;
export { GROUPED_COLUMNS };
