import { useState, JSX } from "react";

type AccountType = {
  id: number;
  name: string;
  balance: number;
};
type Props = {
  render: (accounts: AccountType[]) => JSX.Element;
};

function AccountsHolder({ render }: Props) {
  const [accounts, setAccounts] = useState<AccountType[]>([
    { id: 1, name: "**** *464", balance: 10000 },
  ]);
  return <div>{render(accounts)}</div>;
}

export function AccountRender() {
  const renderFunc1 = (accounts: AccountType[]) => (
    <ul>
      {accounts.map((o) => (
        <li key={o.id}>
          {o.name}: {o.balance}
        </li>
      ))}
    </ul>
  );
  const renderFunc2 = (accounts: AccountType[]) => (
    <ol>
      {accounts.map((o) => (
        <li key={o.id}>
          {o.name}: {o.balance}
        </li>
      ))}
    </ol>
  );

  return (
    <>
      <AccountsHolder render={renderFunc1} />
      <AccountsHolder render={renderFunc2} />
    </>
  );
}
