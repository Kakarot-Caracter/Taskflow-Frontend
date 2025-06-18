import { Suspense } from "react";
import ResetPasswordPage from "./ResetPasswordPage"; // componente separado que usa useSearchParams

export default function Page() {
  return (
    <Suspense fallback={<div>Cargando...</div>}>
      <ResetPasswordPage />
    </Suspense>
  );
}
