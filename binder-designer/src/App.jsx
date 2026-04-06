import BinderGrid from "./components/BinderGrid";

export default function App() {
  return (
    <div style={styles.app}>
      <h1 style={styles.title}>Pokémon Binder Designer</h1>
      <BinderGrid />
    </div>
  );
}

const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    paddingTop: "20px",
    backgroundColor: "#f0f0f0",
    minHeight: "100vh",
  },
  title: {
    marginBottom: "20px",
  },
};