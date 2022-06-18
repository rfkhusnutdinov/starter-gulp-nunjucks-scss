import del from "del";

// Очистка каталога build
export const clean = () => {
  return del(["build/**"]);
};
