export default function SearchBar() {
    return (
      <form>
        <div class="relative">
          <input
            type="search"
            id="default-search"
            class="placeholder:text-black block w-full p-6 pl-10 text-sm text-white border border-white rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-white dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Your Favourite Book"
            required
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-[#5F6DF8] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-20 py-4 dark:bg-[#5F6DF8] dark:hover:bg-[#5F6DF8] dark:focus:ring-[#5F6DF8]"
          >
            Search
          </button>
        </div>
      </form>
    );
  }