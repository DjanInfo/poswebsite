/*export default function Status({ status }) {
  const styles = {
    Ativo: "bg-green-100 text-green-600",
    Pendente: "bg-yellow-100 text-yellow-600",
    Inativo: "bg-red-100 text-red-600",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold text-center
        ${styles[status] || "bg-gray-100 text-gray-500"}
      `}
    >
      {status}
    </span>
  );
}*/

export const STATUS = {
  ATIVO: "Ativo",
  PENDENTE: "Pendente",
  INATIVO: "Inativo",
};

export const STATUS_LIST = Object.values(STATUS);

export default function Status({ status }) {
  const styles = {
    [STATUS.ATIVO]: "bg-green-100 text-green-600",
    [STATUS.PENDENTE]: "bg-yellow-100 text-yellow-600",
    [STATUS.INATIVO]: "bg-red-100 text-red-600",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold text-center
        ${styles[status] || "bg-gray-100 text-gray-500"}
      `}
    >
      {status}
    </span>
  );
}
