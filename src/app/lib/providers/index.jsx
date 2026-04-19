import AppsContext from "@/context/AppsContext";

const Provider = ({ children }) => {
  return <AppsContext>{children}</AppsContext>;
};

export default Provider;
