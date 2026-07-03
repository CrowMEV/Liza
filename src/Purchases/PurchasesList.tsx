import { useState } from "react";

type Purchase = {
  id: number;
  name: string;
};

type PurchasesProps = {
  purchase: Purchase;
  onRemove: (id: number) => void;
};

function PurchaseItem({ purchase, onRemove }: PurchasesProps) {
  return (
    <li>
      {purchase.name} <button onClick={() => onRemove(purchase.id)}>Удалить</button>
    </li>
  );
}

export function PurchasesList() {
  const [purchases, setPurchases] = useState<Purchase[]>([
    { id: 1, name: "сгущёнка" },
    { id: 2, name: "молоко" },
  ]);
  const handleDeleteItem = (id: number) => {
    setPurchases((oldPurchases) =>
      oldPurchases.filter((purchase) => purchase.id !== id),
    );
  };
  return (
    <ul>
      {purchases.map((p) => (
        <PurchaseItem key={p.id} purchase={p} onRemove={handleDeleteItem} />
      ))}
    </ul>
  );
}
