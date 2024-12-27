import { Show, For } from 'solid-js';

function JokeSection(props) {
  const { jokes, newJoke, setNewJoke, loading, saveJoke, handleGenerateJoke } = props;

  return (
    <div class="col-span-1 md:col-span-2 lg:col-span-1">
      <h2 class="text-2xl font-bold mb-4 text-purple-600">Add New Joke</h2>
      <form onSubmit={saveJoke} class="space-y-4">
        <input
          type="text"
          placeholder="Setup"
          value={newJoke().setup}
          onInput={(e) => setNewJoke({ ...newJoke(), setup: e.target.value })}
          class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent box-border"
          required
        />
        <input
          type="text"
          placeholder="Punchline"
          value={newJoke().punchline}
          onInput={(e) => setNewJoke({ ...newJoke(), punchline: e.target.value })}
          class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent box-border"
          required
        />
        <div class="flex space-x-4">
          <button
            type="submit"
            class="flex-1 px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            disabled={loading()}
          >
            Save Joke
          </button>
          <button
            type="button"
            class={`flex-1 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer ${loading() ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleGenerateJoke}
            disabled={loading()}
          >
            <Show when={loading()}>Generating...</Show>
            <Show when={!loading()}>Generate Joke</Show>
          </button>
        </div>
      </form>

      <h2 class="text-2xl font-bold mb-4 text-purple-600 mt-8">Joke List</h2>
      <div class="space-y-4 max-h-[calc(100vh-300px)] overflow-y-auto pr-4">
        <For each={jokes()}>
          {(joke) => (
            <div class="bg-white p-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              <p class="font-semibold text-lg text-purple-600 mb-2">{joke.setup}</p>
              <p class="text-gray-700">{joke.punchline}</p>
            </div>
          )}
        </For>
      </div>
    </div>
  );
}

export default JokeSection;