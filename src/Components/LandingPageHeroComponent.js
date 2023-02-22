import SearchBar from './SearchBar';
export default function LandingPageHeroComponent() {
  return (
    <div className="static h-[25rem]  bg-hero bg-no-repeat w-full bg-cover">
      <div className="mx-[23rem] h-full text-5xl flex flex-col center justify-center">
        <div>
          <span className="font-['Englebert'] text-5xl text-white">
            A Book is a dream that you hold in your hand
            &nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          <span className="font-[Parisienne] text-[4xl] text-white">
            ~ Neil Gaiman
          </span>
        </div>
        <div className="h-10" />
        <SearchBar />
      </div>
    </div>
  );
}