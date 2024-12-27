import { Show } from 'solid-js';
import { SolidMarkdown } from "solid-markdown";
import Calculator from './Calculator';

function AdditionalFeatures(props) {
  const {
    loading,
    newJoke,
    generatedImage,
    audioUrl,
    markdownText,
    handleGenerateImage,
    handleTextToSpeech,
    handleMarkdownGeneration,
  } = props;

  return (
    <>
      <div class="col-span-1 md:col-span-2 lg:col-span-1">
        <h2 class="text-2xl font-bold mb-4 text-purple-600">Additional Features</h2>
        <div class="space-y-4">
          <button
            onClick={handleGenerateImage}
            class="w-full px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            disabled={loading()}
          >
            Generate Image
          </button>
          <Show when={newJoke().setup && newJoke().punchline}>
            <button
              onClick={handleTextToSpeech}
              class="w-full px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
              disabled={loading()}
            >
              Text to Speech
            </button>
          </Show>
          <button
            onClick={handleMarkdownGeneration}
            class="w-full px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
            disabled={loading()}
          >
            Generate Markdown
          </button>
        </div>
      </div>

      <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Show when={generatedImage()}>
          <div>
            <h3 class="text-xl font-bold mb-2 text-purple-600">Generated Image</h3>
            <img src={generatedImage()} alt="Generated joke image" class="w-full rounded-lg shadow-md" />
          </div>
        </Show>
        <Show when={audioUrl()}>
          <div>
            <h3 class="text-xl font-bold mb-2 text-purple-600">Audio Joke</h3>
            <audio controls src={audioUrl()} class="w-full" />
          </div>
        </Show>
        <Show when={markdownText()}>
          <div>
            <h3 class="text-xl font-bold mb-2 text-purple-600">Markdown Story</h3>
            <div class="bg-white p-4 rounded-lg shadow-md">
              <SolidMarkdown children={markdownText()} />
            </div>
          </div>
        </Show>
        <div class="col-span-1">
          <Calculator />
        </div>
      </div>
    </>
  );
}

export default AdditionalFeatures;