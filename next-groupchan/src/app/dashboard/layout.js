import Provider from "@/components/Provider";

export default function RootLayout({ children }) {
  return (
        <Provider>
          {children}
        </Provider>
  );
}
