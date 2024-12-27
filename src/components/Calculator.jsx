import { createSignal } from 'solid-js';

export default function Calculator() {
  const [input, setInput] = createSignal('');
  const [result, setResult] = createSignal('');

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const evalResult = eval(input());
      setResult(evalResult);
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div class="p-4 bg-white rounded-lg shadow-md">
      <h2 class="text-2xl font-bold mb-4 text-purple-600">Calculator</h2>
      <input
        type="text"
        value={input()}
        onInput={handleInput}
        class="w-full p-2 border border-gray-300 rounded mb-4 box-border"
        placeholder="Enter math expression"
      />
      <button
        onClick={calculate}
        class="w-full px-4 py-2 bg-blue-500 text-white rounded cursor-pointer hover:bg-blue-600 transition duration-300 ease-in-out"
      >
        Calculate
      </button>
      <div class="mt-4 text-lg">
        Result: <span class="font-semibold text-purple-600">{result()}</span>
      </div>
    </div>
  );
}