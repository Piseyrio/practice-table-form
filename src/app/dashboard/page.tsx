import Form from "@/components/form";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { prisma } from "@/lib/prisma";

export default async function Page() {

  const User = await prisma.user.findMany();
  return (
  <div>
    <DataTable columns={columns} data={User}/>
    <Form/>
  </div>
  )
}
