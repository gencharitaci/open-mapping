<script>
  import { onMount } from "svelte";

  // let isAccepted = localStorage.getItem("disclaimerAccepted");
  let isAccepted = localStorage.getItem("disclaimerAccepted") === "true";
  let doNotShowAgain = false; // Local state to track checkbox selection

  function showDisclaimer() {
    const disclaimerOverlay = document.getElementById("disclaimerOverlay");
    if (disclaimerOverlay) {
      disclaimerOverlay.classList.remove("fade-out", "hidden");
      disclaimerOverlay.classList.add("fade-in");
    } else {
      console.error("Disclaimer overlay not found in DOM.");
    }
  }

  function hideDisclaimer() {
    const disclaimerOverlay = document.getElementById("disclaimerOverlay");
    if (disclaimerOverlay) {
      disclaimerOverlay.classList.remove("fade-in");
      disclaimerOverlay.classList.add("fade-out", "hidden");
    } else {
      console.error("Disclaimer overlay not found in DOM.");
    }
  }

  function handleCloseClick() {
    // localStorage.setItem("disclaimerAccepted", "true");

    // Update local storage based on whether the checkbox was checked
    localStorage.setItem("disclaimerAccepted", doNotShowAgain ? "true" : "false");
    hideDisclaimer();
  }

  onMount(() => {
    if (!isAccepted) {
      showDisclaimer();
    } else {
      hideDisclaimer();
    }
  });
</script>


<div id="disclaimerOverlay" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10 transition-all duration-1000 ease-in-out animate-[fade-in_1s_ease-in-out]" style="animation: fade-in 2s ease-in-out;">
  <div class="max-w-md my-3 overflow-x-auto bg-white rounded-lg shadow-lg">
    <div class="flex px-2 py-2 border-b border-gray-200">
      <div class="flex items-center justify-center w-5">
        <svg
          class="w-6 h-6 text-blue-500 fill-current"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM21.6667 28.3333H18.3334V25H21.6667V28.3333ZM21.6667 21.6666H18.3334V11.6666H21.6667V21.6666Z"
          />
        </svg>
      </div>
      <span class="ml-2 text-lg font-bold text-gray-700">Disclaimer</span>
    </div>

    <div class="px-5 py-2 text-gray-600 text-justify">
      This GIS tool provides information for general reference only and should not be considered a legal document. 
      Data may not be completely accurate and users should always consult primary sources, 
      such as recorded deeds and plats, to verify information before making any decisions based on this data. 
      Mecklenburg County, NC assumes no liability for errors or omissions within the GIS data 
      and provides it 'as is' without warranty <span class="text-red-900">(NCGS 153A-463)</span>.
    </div>

    <div class="px-5 py-2 text-gray-600 text-justify border border-t-gray-500">
      <span class="text-red-700 font-bold">* </span>Unless otherwise specified, our data is released under a
      <a class="text-primaryTeal font-semibold hover:underline" href="https://creativecommons.org/public-domain/cc0/" target="_blank">CCO ("No Rights Reserved")</a> license
      and our open source software projects are released under a <a class="text-primaryTeal font-semibold hover:underline" href="https://en.wikipedia.org/wiki/MIT_License" target="_blank">MIT software license</a>.
    </div>

    <div class="flex justify-between px-5 py-2 bg-gray-100 border-t border-gray-300">
      <div class="text-blue-800">
        <input type="checkbox" bind:checked={doNotShowAgain} class="accent-zinc-500" /> Don't show again
      </div>
      <button
        class="px-3 py-2 text-sm text-black font-bold transition duration-150 hover:text-gray-700"
        on:click={handleCloseClick}
      >Accept</button>
    </div>
  </div>
</div>

