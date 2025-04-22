import { getServerSession } from "next-auth";
import { TabsForms } from "./components/TabsForms";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession();

  if (session) {
    redirect("/");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900">
      <div className="bg-neutral-800 border border-neutral-700 rounded-2xl shadow-xl p-10 w-full max-w-md flex flex-col items-center">
        <h1 className="text-3xl text-center mb-3 font-bold tracking-wide text-white">
          <span className="text-white-500">Ren</span>Vault
        </h1>
        <h2 className="text-xl font-semibold text-neutral-200 mb-2 text-center">
          ¡Bienvenido de nuevo!
        </h2>
        <p className="text-center mb-6 text-neutral-400 text-sm">
          Ingresa tus datos para acceder a tu bóveda segura.
        </p>
        <TabsForms />
      </div>
    </div>
  );
}
