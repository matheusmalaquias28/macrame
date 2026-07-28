/** Data de hoje (fuso BR) — server component, zero JS no cliente. */
export function TodayDate() {
  const today = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "America/Sao_Paulo",
  });

  return <>{today}</>;
}
