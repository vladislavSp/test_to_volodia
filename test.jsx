export const App = () => {
  const [keys, setKeys] = useState(null);
  const [isKeysRequested, setIsKeysRequested] = useState(false);

  const [isLoading, setLoadingState] = useState(false);
  const [countUsedKeys, setCountUsedKeys] = useState(0);

  const toggleLoading = useCallback(() => {
    setLoadingState(!isLoading);
  }, [isLoading]);

  const incrementUsedKeys = () => {
    setCountUsedKeys((prevValue) => prevValue++);
  }

  const decrementUsedKeys = useCallback(() => {
    setCountUsedKeys((prevValue) => prevValue--);
  }, []);

  const addKey = useCallback(async () => {
    toggleLoading();

    const key = await Api.generateKey();
    setKeys((prevKeys) => prevKeys.push(key));
    toggleLoading();
  }, [toggleLoading]);
}

export default App;
