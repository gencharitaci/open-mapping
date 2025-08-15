<script>
  export let jsonFile;

  let promise = fetch(jsonFile).then((x) => x.json());
</script>

<!-- container - projects we love ❤ -->
<div class="container max-w-3xl mx-auto m-8">
  <h2 class="text-center text-3xl text-gray-800 font-bold leading-none mb-3">
    Projects We <span class="text-primaryPoppyRed">❤</span>
  </h2>
  <div class="w-full mb-4">
    <div class="mx-auto h-1 gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
  </div>
  <div class="text-lg text-center px-6">
    In addition to releaseing some of our projects as open source software,
    Mecklenburg County GIS uses open source software to deliver innovative and
    cost effective solutions. Some of the open source projects we use are:
  </div>
</div>

{#await promise}
  <div class="text-center">
    <div class="lds-dual-ring"></div>
  </div>
{:then data}
  <!-- promise was fulfilled -->

  <div
    class="w-full mt-6 grid place-content-start gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3"
  >
    {#each data.sort( (/** @type {{ title: number; }} */ a, /** @type {{ title: number; }} */ b) => {
        return a.title < b.title ? -1 : 1;
      } ) as el}
      <a href={el.theURL} target="_blank">
        <!-- Foss App Card -->
        <div
          class="relative bg-primaryTeal/5 border text-gray-700 shadow-md bg-clip-border rounded-xl w-full h-full border-gray-200 flex flex-col justify-between"
        >
          <div
            class="justify-between flex gap-x-1 gap-y-2 flex-row items-center w-full"
          >
            <!-- Title -->
            <strong
              class="ml-4 text-primaryTeal -mb-4 font-semibold hover:underline font-display text-lg"
            >
              {el.title}
              <div
                class="-mx-4 shadow m-0 p-0 border border-b border-b-primaryTeal"
              ></div>
            </strong>
            <!-- Logo -->
            <div class="flex h-14 shrink-0 rounded border bg-white p-0.5 m-1">
              <img
                class="aspect-rectangle rounded-sm size-full"
                src={el.logo}
                alt="{el.title} - {el.description}"
              />
            </div>
          </div>

          <!-- Description -->
          <div class="px-4 pb-4">
            {@html el.description}
          </div>
        </div>
      </a>
    {/each}
  </div>
{:catch error}
  <!-- optionally show something while promise was rejected -->
{/await}

<style>
  .lds-dual-ring {
    display: inline-block;
    width: 80px;
    height: 80px;
  }
  .lds-dual-ring:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid;
    border-color: rgb(100, 100, 100) transparent rgb(100, 100, 100) transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
