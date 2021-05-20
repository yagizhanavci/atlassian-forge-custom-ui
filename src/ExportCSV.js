import ForgeUI,{ IssueAction, ModalDialog, render, Text, useState } from "@forge/ui";

const App = () => {
  const [isOpen, setOpen] = useState(true);

  if (!isOpen) {
    return null;
  }

  return (
    <ModalDialog header="Hello" onClose={() => setOpen(false)}>
      <Text>Export CSV</Text>
    </ModalDialog>
  );
};

export const run = render(
  <IssueAction>
    <App />
  </IssueAction>,
);
