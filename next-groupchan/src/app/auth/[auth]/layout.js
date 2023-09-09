import Provider from "@/components/Provider";

export default function Layout({ children }) {
  return (
        <Provider>
          {children}
        </Provider>
  );
}
