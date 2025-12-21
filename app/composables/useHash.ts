export const useHash = () => {
  const router = useRouter();

  const removeHash = async () => {
    await router.replace({ hash: undefined });
  };

  return { removeHash };
};
