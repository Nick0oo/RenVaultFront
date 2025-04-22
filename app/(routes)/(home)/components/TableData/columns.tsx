"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/components/ui/use-toast";
import { Element } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Copy, MoreHorizontal, User } from "lucide-react";

export type ColumnProps = Element;

export const columns: ColumnDef<ColumnProps>[] = [
  {
    accessorKey: "name",
    header: "Nombre",
  },
  {
    accessorKey: "typeElement",
    header: "Tipo de elemento",
  },
  {
    accessorKey: "urlWebsite",
    header: "Sitio web",
  },
  {
    accessorKey: "directory",
    header: "Directorio",
  },
  {
    accessorKey: "actions",
    header: "Acciones",
    cell: ({ row }) => {
      const password = row.original.password;
      const username = row.original.username;

      const onEditElement = () => {
        window.location.href = `/element/${row.original.id}`;
      };

      const copyItemClipboard = (item: string, name: string) => {
        navigator.clipboard.writeText(item);
        toast({
          title: `${name} copiado ✅`,
        });
      };

      return (
        <div className="flex gap-2 justify-center items-center">
          {password && (
            <Copy
              className="w-4 h-4 cursor-pointer"
              onClick={() => copyItemClipboard(password, "Contraseña")}
            />
          )}
          {username && (
            <User
              className="w-4 h-4 cursor-pointer"
              onClick={() => copyItemClipboard(username, "Usuario")}
            />
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Abrir menú</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Acciones</DropdownMenuLabel>
              <DropdownMenuItem onClick={onEditElement}>Editar</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
