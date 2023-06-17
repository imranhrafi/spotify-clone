import Header from "../../components/Header";
import ListItem from "../../components/ListItem";

export default function Home() {
  return (
    <div className='w-full h-full overflow-hidden overflow-y-auto rounded-lg bg-neutral-900 '>
      <Header>
        <div className='mb-2'>
          <h1 className='text-3xl font-semibold text-white'>
            Welcome Back
          </h1>
          <div className='grid grid-cols-1 gap-3 mt-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
            <ListItem
              image='/images/liked.png'
              name='Liked Songs'
              href='liked'
            />
          </div>
        </div>
      </Header>
    </div>
  );
}