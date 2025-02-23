"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ReactNode } from "react";

import { Button, CheckLabel } from "@/components/Button";

type OrderButtonProps = {
  children: ReactNode;
  orderBy?: "DATE" | "CATEGORY" | "LIKES";
};
export function OrderButton({ orderBy, children }: OrderButtonProps) {
  const searchParams = useSearchParams();
  const currentOrderBy = searchParams.get("orderBy");

  const newSearchParams = new URLSearchParams(searchParams);
  if (!orderBy) {
    newSearchParams.delete("orderBy");
  } else {
    newSearchParams.set("orderBy", orderBy);
  }

  const isCurrent = orderBy === (currentOrderBy || undefined);

  return (
    <Button checked={isCurrent}>
      <CheckLabel checked={isCurrent}>
        <Link prefetch={false} href={`/articles?${newSearchParams.toString()}`}>
          {children}
        </Link>
      </CheckLabel>
    </Button>
  );
}
