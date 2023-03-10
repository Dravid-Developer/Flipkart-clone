const { createContext, useState } = require("react");

const DataContext = createContext(null);

const DataProvider = () => {
  const [account, setAccount] = useState("");

  return (
    <DataContext.Provider
      value={{
        account,
        setAccount,
      }}
    ></DataContext.Provider>
  );
};

export default DataProvider;
