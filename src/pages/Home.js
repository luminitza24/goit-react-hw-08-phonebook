const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 35,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contacts manager welcome page </h1>
      <img
        width="64"
        height="64"
        src="https://img.icons8.com/external-ddara-fill-ddara/64/external-woman-girl-avatar-greeting-sawasdee-Thailand-welcome-avatar-ddara-fill-ddara.png"
        alt="external-woman-girl-avatar-greeting-sawasdee-Thailand-welcome-avatar-ddara-fill-ddara"
      />
    </div>
  );
}
