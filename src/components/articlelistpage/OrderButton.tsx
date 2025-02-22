"use client";
import { ReactNode } from "react";

type OrderButtonProps = {
  children: ReactNode;
  orderBy?: "DATE" | "CATEGORY" | "LIKES";
};
export function OrderButton({ orderBy, children }: OrderButtonProps) {
  // todo:
  //  - Diesem Button wird eine Sortierreihenfolge als String übergeben ("orderBy")
  //  - Wenn auf den Button geklickt wird, soll die Sortierreihenfolge in der URL
  //    gesetzt werden (dort heisst der Search Parameter 'orderBy')
  //  - Der Button ist eigentlich kein Button, sondern soll ein Link (a-Element) sein,
  //    das du mit der Link-Komponente von Next.js erzeugen kannst
  //    - Das Ziel des Links ist _immer_ "/articles", denn das ist die Route, die
  //      die Artikel-Liste darstellt
  //    - Du musst also nur den Search Parameter (orderBy) setzen
  //  - Optional: wenn die übergebene (neue) Sortierreihenfolge der aktuellen Reihenfolge
  //    in der URL entspricht, soll der Button disabled sein
  //    - Achtung! DATE ist die Default-Reihenfolge, d.h. wenn _kein_ orderBy in der
  //      URL gesetzt ist, wird nach DATE sortiert
  //  - Optional: kannst du die URL im Link so bauen, das bestehende Search Parameter
  //     (also alles, was nicht 'orderBy' ist) aus der URL erhalten bleiben?
  //     - Zum Testen kannst du beliebige Search Params in die URL einfügen
  //       z.B. ?orderBy=DATE&testparamter=einszweidrei

  return "todo";
}
