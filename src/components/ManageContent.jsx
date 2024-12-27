import { Show } from 'solid-js';

function ManageContent(props) {
  const {
    showApps,
    toggleApps,
    showFiles,
    toggleFiles,
    showPhotos,
    togglePhotos,
    showMusic,
    toggleMusic,
  } = props;

  return (
    <div class="mt-8">
      <h2 class="text-2xl font-bold mb-4 text-purple-600">Manage Content</h2>
      <div class="space-y-4">
        <button
          onClick={toggleApps}
          class="w-full px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
        >
          {showApps() ? 'Hide Apps' : 'Show Apps'}
        </button>
        <Show when={showApps()}>
          <div class="p-4 bg-white rounded-lg shadow-md">
            <p class="text-gray-700">Apps Content Here</p>
          </div>
        </Show>

        <button
          onClick={toggleFiles}
          class="w-full px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
        >
          {showFiles() ? 'Hide Files' : 'Show Files'}
        </button>
        <Show when={showFiles()}>
          <div class="p-4 bg-white rounded-lg shadow-md">
            <p class="text-gray-700">Files Content Here</p>
          </div>
        </Show>

        <button
          onClick={togglePhotos}
          class="w-full px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
        >
          {showPhotos() ? 'Hide Photos' : 'Show Photos'}
        </button>
        <Show when={showPhotos()}>
          <div class="p-4 bg-white rounded-lg shadow-md">
            <p class="text-gray-700">Photos Content Here</p>
          </div>
        </Show>

        <button
          onClick={toggleMusic}
          class="w-full px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
        >
          {showMusic() ? 'Hide Music' : 'Show Music'}
        </button>
        <Show when={showMusic()}>
          <div class="p-4 bg-white rounded-lg shadow-md">
            <p class="text-gray-700">Music Content Here</p>
          </div>
        </Show>
      </div>
    </div>
  );
}

export default ManageContent;