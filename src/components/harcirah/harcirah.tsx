import { Harcirah, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<Harcirah[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      title: "Belen Harcırahı",
      author: {
        id: "728ed52f",
        name: "Şevket ÇİLOĞLU",
        email: "sevketciloglu@ogm.gov.tr",
        createdAt: new Date(),
        position: "İşletmeler Saymanı",
        station: "Hatay OBM",
      },
      from: "Belen",
      to: "Kilis",
      startedAt: new Date("2024-11-10"), //2d ago,
      endedAt: new Date("2024-11-12"),
      createdAt: new Date("2024-11-10"),
      editedAt: null,
      unitFee: 100,
      totalFee: 100,
      expense: 100,
      meal: "3",
    },
    {
      id: "728ed53f",
      title: "Ankara Harcırahı",
      author: {
        id: "728ed53Af",
        name: "Şevket ÇİLOĞLU",
        email: "sevketciloglu@ogm.gov.tr",
        createdAt: new Date(),
        position: "İşletmeler Saymanı",
        station: "Hatay OBM",
      },
      from: "Belen",
      to: "Ankara",
      startedAt: new Date("2024-07-10"), //5d ago,
      endedAt: new Date("2024-09-12"),
      createdAt: new Date("2024-10-10"),
      editedAt: null,
      unitFee: 100,
      totalFee: 101,
      expense: 100,
      meal: "3",
    },
  ];
}

export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="w-full mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
